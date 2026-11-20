"""Builds portfolio images (public/work/<slug>/) and src/data/projects.ts from the curated list below."""
import json, os, shutil, re
from PIL import Image

SCR = os.path.dirname(os.path.abspath(__file__))
SITE = r"K:\Android App Files\portfoliowebkaran"
PUB = os.path.join(SITE, "public", "work")
CAPS = os.path.join(SCR, "caps")

INV = {}
for f in ["inv_playstore.json", "inv_clod.json", "inv_other.json"]:
    for p in json.load(open(os.path.join(SCR, f), encoding="utf-8")):
        INV.setdefault(p["name"], p)

def inv(name):
    for k, v in INV.items():
        if k.startswith(name):
            return v
    raise KeyError(name)

def inv_shots(name, idx=None):
    s = inv(name).get("screenshots") or []
    if idx is not None:
        s = [s[i] for i in idx]
    return [(x["path"], x.get("label")) for x in s]

# ---------- image processing ----------
STATUS = 0.027  # emulator status bar height as fraction of a 20:9 screen

def process(src, dst, frame, top=0.0, bottom=0.0, aspect=None):
    im = Image.open(src)
    im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
    w, h = im.size
    t, b = int(h * top), h - int(h * bottom)
    im = im.crop((0, t, w, b))
    if aspect:  # keep only the top part of a full-page capture (aspect = h/w)
        im = im.crop((0, 0, w, min(im.size[1], int(w * aspect))))
    if im.mode == "RGBA":
        bg = Image.new("RGB", im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[3]); im = bg
    if frame == "desktop":
        im.thumbnail((1600, 1600), Image.LANCZOS)
    else:
        im.thumbnail((1400, 1400) if frame == "tablet" else (720, 1600), Image.LANCZOS)
    im.save(dst, "WEBP", quality=80, method=6)
    return im.size

def icon(src, dst_dir):
    if src.lower().endswith(".svg"):
        shutil.copy(src, os.path.join(dst_dir, "icon.svg"))
        return "icon.svg"
    im = Image.open(src).convert("RGBA")
    bb = im.split()[3].getbbox()  # trim transparent margins, then pad to a square
    if bb: im = im.crop(bb)
    side = max(im.size); sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - im.width) // 2, (side - im.height) // 2)); im = sq
    im.thumbnail((256, 256), Image.LANCZOS)
    im.save(os.path.join(dst_dir, "icon.webp"), "WEBP", quality=90, method=6)
    return "icon.webp"

def month_range(p):
    a, b = (p.get("first_date") or "")[:7], (p.get("last_date") or "")[:7]
    if not a:
        return None
    fmt = lambda s: __import__("datetime").date(int(s[:4]), int(s[5:7]), 1).strftime("%b %Y")
    return fmt(a) if a == b else f"{fmt(a)} – {fmt(b)}"

# ---------- curated projects ----------
C = lambda *parts: os.path.join(CAPS, *parts)

PROJECTS = [
    dict(slug="smart-paper-generator", inv="Smart Paper Generator AI (website)", name="Smart Paper Generator AI", kind="webapp", status="live", featured=True,
         tagline="AI website that creates CBSE exam papers with answer keys in a few clicks.",
         icon="K:/Android App Files/WebsiteS/Capacitor/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
         links=dict(live="https://paperbykaran.vercel.app"),
         shots=[(C("paperbykaran", "home_desktop.png"), "Home", "desktop")] + [(p, l, "desktop" if "desktop" in p.lower() else "phone") for p, l in inv_shots("Smart Paper Generator AI (website)", [1, 2, 3, 4, 5, 6])],
         also_android=True),
    dict(slug="dadawala-clothing-shop", inv="DadaWala Clothing Shop", name="DadaWala Clothing Shop", kind="webapp", status="live", featured=True, client="DadaWala Clothing Shop, Bagar (Rajasthan)",
         tagline="Online clothing store for a family-run shop — catalogue, cart, offers, WhatsApp ordering and an admin panel.",
         links=dict(live="https://dadawalashop.vercel.app"),
         shots=[(C("dadawala", f"{n}_{k}.png"), lbl + (" (mobile)" if k == "mobile" else ""), "desktop" if k == "desktop" else "phone")
                for n, lbl in [("home", "Home"), ("shop", "Product catalogue"), ("offers", "Offers"), ("about", "About"), ("contact", "Contact")] for k in ("desktop", "mobile")]),
    dict(slug="business-website-designs", inv="Karan Saini Web Studio", name="Website Designs for Local Businesses", kind="website", status="ready", featured=True,
         tagline="8 ready-to-customise website designs: clinic, salon, clothing brand, e-commerce, catalogue, business and portfolio.",
         description="A collection of complete, mobile-friendly website designs I built to show local businesses what their site could look like. Each design is a full page with real sections — services, prices, gallery, enquiry form and WhatsApp contact — and can be customised with your name, photos and content in a few days.",
         features=["Clinic / doctor website with OPD timings and appointment form", "Beauty salon website with services and price list", "Clothing brand and e-commerce store layouts", "Product catalogue for wholesalers and shops", "Business profile and personal portfolio pages", "Enquiry form that sends leads to WhatsApp", "Works on phone, tablet and computer"],
         shots=[(C("demos", f"{n}_{k}.png"), lbl + (" (mobile)" if k == "mobile" else ""), "desktop" if k == "desktop" else "phone")
                for n, lbl in [("clinicdoctor", "Clinic / doctor"), ("beautysalon", "Beauty & salon"), ("clothingbrand", "Clothing brand"), ("ecommerce", "E-commerce"), ("catalogueproducts", "Product catalogue"), ("businessprofile", "Business profile"), ("portfolio", "Portfolio")] for k in ("desktop", "mobile")]),
    dict(slug="reasonmaster-india", inv="ReasonMaster India (website)", name="ReasonMaster India", kind="webapp", status="live",
         tagline="Reasoning practice website for SSC, Banking and Railway exam aspirants — topics, worked examples and MCQ tests.",
         links=dict(live="https://reasonmasterindia.vercel.app"), icon=inv("ReasonMaster").get("icon_path"),
         shots=[(C("reasonmaster-web", "home_desktop.png"), "Home", "desktop"), (C("reasonmaster-web", "home_mobile.png"), "Home (mobile)", "phone")]),
    dict(slug="seminarkaran", inv="SeminarKaran", name="SeminarKaran", kind="website", status="live",
         tagline="Educational seminar portal with talks, books, projects and YouTube lectures in one place.",
         links=dict(live="https://seminarkaran.vercel.app"),
         shots=[(p, l, "desktop" if "desktop" in p.lower() else "phone") for p, l in inv_shots("SeminarKaran")]),
    dict(slug="pocket-arcade", inv="Pocket Arcade", name="Pocket Arcade", kind="webapp", status="ready",
         tagline="A browser game arcade with 3D mini-games that work offline on phone and computer.",
         shots=[(inv_shots("Pocket Arcade")[0][0], "Game library", "desktop", 0, 0, 900 / 1440), (inv_shots("Pocket Arcade")[1][0], "Memory Vault game", "desktop"),
                (inv_shots("Pocket Arcade")[4][0], "Game on mobile", "phone", 0, 0, 844 / 390)]),
    dict(slug="app-legal-portal", inv="App Legal & Privacy Portal", name="App Privacy & Legal Portal", kind="website", status="live",
         tagline="One website hosting the privacy policy, terms and account-deletion pages for all my Play Store apps.",
         links=dict(live="https://pythonwithkaran.vercel.app"),
         shots=[(C("legal-portal", "home_desktop.png"), "Home", "desktop"), (C("legal-portal", "home_mobile.png"), "Home (mobile)", "phone")]),

    # ---- Android: published ----
    dict(slug="pythonwithkaran", inv="PythonWithKaran", name="Python With Karan – IT & IP Notes", kind="android", status="published", featured=True,
         tagline="CBSE Computer Science, IT and IP learning app — notes, videos, MCQs and previous-year papers for Classes 9–12.",
         links=dict(play="https://play.google.com/store/apps/details?id=com.pwk.pythonwithkaran"), play=dict(downloads="100+"),
         shots=[(p, l, "phone") for p, l in inv_shots("PythonWithKaran")]),
    dict(slug="periodic-table-explorer", inv="Periodic Table Explorer", name="Periodic Table Explorer", kind="android", status="published", featured=True,
         tagline="Offline periodic table for students with element details, trends, quizzes and chemistry tools.",
         links=dict(play="https://play.google.com/store/apps/details?id=com.pwk.periodictableexplorer"), play=dict(downloads="10+"),
         shots=[(p, l, "phone", STATUS) for p, l in inv_shots("Periodic Table Explorer")]),

    # ---- Android apps ----
    dict(slug="pyboss", inv="PyBoss", name="PyBoss: Learn Python Game", kind="game", status="ready", featured=True,
         tagline="Learn Python by battling code bosses — 14 worlds, 210 levels and 1,344 real coding challenges.",
         shots=[(p, l, "phone") for p, l in zip([x[0] for x in inv_shots("PyBoss")], ["Code boss battle", "Arrange real Python code", "World map", "Level complete", "Daily lucky spin", "Level up & avatars"])]),
    dict(slug="ncert-math-formulas", inv="NCERT Math Formulas", name="NCERT Math Formulas Hub", kind="android", status="ready",
         tagline="Every maths formula for Classes 9–12, chapter by chapter, with flashcards and quick quizzes.",
         shots=[(p, l, "phone", STATUS) for p, l in zip([x[0] for x in inv_shots("NCERT Math Formulas")], ["Formula wall", "Home", "Class 9 chapters", "Class 10 chapters", "Class 11 chapters", "Class 12 chapters", "Flashcards", "Quick quiz"])]),
    dict(slug="fontzyle", inv="FontZyle", name="FontZyle – Fancy Text & Fonts", kind="android", status="ready",
         tagline="Stylish text generator for Instagram bios, gaming names and captions — 50+ font styles, symbols and templates.",
         shots=[(p, l, "phone", STATUS) for p, l in inv_shots("FontZyle", [0, 2, 3, 4, 5, 6, 7])]),
    dict(slug="tallhour", inv="Tallhour", name="Tallhour – Focus & Screen-time Blocker", kind="android", status="in-progress",
         tagline="Blocks distracting apps for a set time so you can study or work — with routines, streaks and an emergency 'parachute'.",
         shots=[(p, l, "phone", STATUS if i == 0 or i >= 5 else 0.0) for i, (p, l) in enumerate(inv_shots("Tallhour"))]),
    dict(slug="klipnest", inv="KlipNest", name="KlipNest – Status Saver", kind="android", status="ready",
         tagline="Save WhatsApp photo and video statuses to your phone in one tap, with light and dark themes.",
         shots=[(p, l, "phone", STATUS) for p, l in inv_shots("KlipNest", [0, 1, 3, 4])]),
    dict(slug="abeeloo", inv="Abeeloo", name="Abeeloo – 3D ABC for Toddlers", kind="android", status="in-progress",
         tagline="Toddlers learn A to Z with friendly 3D letters, 260 talking 3D objects, tracing and sticker rewards.",
         shots=[(p, l, "phone", STATUS) for p, l in zip([x[0] for x in inv_shots("Abeeloo", [0, 1, 3, 5, 6])], ["Home island", "Learn the letter A", "Explore letters", "Celebration", "A for Ant"])]),

    # ---- Games ----
    dict(slug="blink-and-remember", inv="Blink & Remember", name="Blink & Remember", kind="game", status="ready", featured=True,
         tagline="Memory-training game with 100+ levels, colour and pattern modes, a shop, daily challenges and 50 achievements.",
         shots=[(p, l, "phone", STATUS, 0.065 if i in (0, 6, 7) else 0) for i, (p, l) in enumerate(inv_shots("Blink & Remember"))]),
    dict(slug="purple-monster", inv="Purple Monster: Snack Rain", name="Purple Monster: Snack Rain", kind="game", status="ready",
         tagline="Feed the hungry monster falling snacks and dodge the hazards — skins, boosters, achievements and 3 game modes.",
         shots=[(p, l, "phone", STATUS) for p, l in inv_shots("Purple Monster: Snack Rain")]),
    dict(slug="mithai-merge", inv="Mithai Merge", name="Mithai Merge", kind="game", status="ready",
         tagline="A festive Indian twist on 2048 — merge sweets from jalebi to kaju katli on square and hexagon boards.",
         shots=[(p, l, "phone", STATUS, 0.065 if i == 0 else 0) for i, (p, l) in enumerate(inv_shots("Mithai Merge"))]),
    dict(slug="kirana-store-tycoon", inv="Kirana Store Tycoon", name="Kirana Store Tycoon", kind="game", status="in-progress",
         tagline="Run your own Indian kirana shop — stock the godown, buy from the mandi, serve customers and grow your business.",
         shots=[(p, l, "phone", STATUS) for p, l in inv_shots("Kirana Store Tycoon", [0, 1, 3, 4, 5, 6, 7])]),
    dict(slug="school-masti-mania", inv="School Masti Mania", name="School Masti Mania", kind="game", status="in-progress",
         tagline="Funny school prank game in Hindi & English — sneak past the teacher, complete missions and unlock characters.",
         shots=[(p, l, "tablet") for p, l in inv_shots("School Masti Mania")]),
    dict(slug="school-masti-3d", inv="School Masti 3D", name="School Masti 3D", kind="game", status="in-progress", featured=True,
         tagline="Open-world 3D school game — explore classrooms and the campus, ride a cycle, play mini-games and dress up.",
         shots=[(p, l, "tablet") for p, l in inv_shots("School Masti 3D")]),
    dict(slug="holefeast", inv="HoleFeast", name="HoleFeast", kind="game", status="in-progress",
         tagline="Casual 3D game where a growing hole swallows thousands of foods — skins, fields and level rewards.",
         shots=[(p, l, "phone") for p, l in inv_shots("HoleFeast", [0, 1, 2, 4, 5, 6])]),
]

# Smaller apps and experiments: listed compactly (no screenshots yet).
MORE = [
    ("PyKaksha", "android", "ready", "Python learning app for CBSE students with an offline Python code runner", "PyKaksha"),
    ("OctaCalc", "android", "ready", "All-in-one calculator: scientific, unit, EMI, GST, age and more", "OctaCalc"),
    ("TriScienceFusion", "android", "in-progress", "Physics, Chemistry and Biology formulas for Classes 9–12 in one app", "TriScienceFusion"),
    ("Smart Paper Generator (Android)", "android", "ready", "Android version of the Smart Paper Generator website", "Smart Paper Generator (Android app"),
    ("ReasonMaster", "android", "in-progress", "Reasoning practice app for competitive exams", "ReasonMaster"),
    ("Moti Rhyme Time", "android", "in-progress", "Animated nursery rhymes app for small children", "Moti Rhyme Time"),
    ("QR Scanner Pro", "android", "ready", "Fast QR and barcode scanner with history and QR generator", "QR Scanner Pro"),
    ("PDF Utility", "android", "ready", "Merge, split, compress and convert PDF files on the phone", "PDF Utility"),
    ("PaprlyPDF", "android", "in-progress", "Native Android PDF reader and tools", "PaprlyPDF"),
    ("ScanLite AI", "android", "in-progress", "Document scanner with auto-crop and text recognition", "ScanLite AI"),
    ("Smart Attendance", "android", "in-progress", "Attendance and leave tracking for institutes", "Smart Attendance"),
    ("REMIND ME", "android", "in-progress", "Simple reminders and to-do app", "REMIND ME"),
    ("GoliMoli (TouchLock)", "android", "in-progress", "Locks the screen's touch while kids watch videos", "GoliMoli"),
    ("Smart Alarm", "android", "in-progress", "Alarm that makes you solve a task before it stops", "Smart Alarm"),
    ("ExpenseTracker", "android", "in-progress", "Track daily spending and monthly budget", "ExpenseTracker"),
    ("BMI & Health Calculator", "android", "in-progress", "BMI, body fat and daily calorie calculator", "BMI & Health"),
    ("EMI Calculator", "android", "in-progress", "Loan EMI calculator with amortisation table", "EMI Calculator"),
    ("Math Tables", "android", "in-progress", "Tables, squares, cubes and roots practice", "Math Tables"),
    ("TeachMate AI", "android", "in-progress", "AI helper for teachers to prepare lessons", "TeachMate AI"),
    ("Color Sort", "game", "in-progress", "Colour sorting puzzle game", "Color Sort"),
    ("ArrowFlow: Escape the Grid", "game", "in-progress", "Arrow puzzle game", "ArrowFlow"),
    ("Solitaire", "game", "in-progress", "Classic Klondike solitaire card game", "Solitaire"),
    ("ABC Wonderland / Alphabet Adventure", "android", "in-progress", "Alphabet learning apps for pre-schoolers", "ABC Wonderland"),
    ("Dhanlaxmi Textiles", "webapp", "in-progress", "Client project: wholesale and retail textile e-commerce with dealer portal", "Dhanlaxmi Textiles"),
]

def tech_list(t):
    """Inventory tech may be a list or a comma string; split on commas outside brackets."""
    if isinstance(t, list):
        return t
    parts, depth, cur = [], 0, ""
    for ch in t or "":
        depth += ch in "([" ; depth -= ch in ")]"
        if ch == "," and depth == 0:
            parts.append(cur.strip()); cur = ""
        else:
            cur += ch
    if cur.strip(): parts.append(cur.strip())
    return parts

def ts_str(s):
    return json.dumps(s, ensure_ascii=False)

# Customer-facing rewrites where the inventory text has internal notes.
OVERRIDE = {
    "smart-paper-generator": dict(tech=["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Firebase Auth", "Turso (SQLite)", "Razorpay", "jsPDF & DOCX export"]),
    "dadawala-clothing-shop": dict(
        description="A complete online store for DadaWala Clothing Shop in Bagar, Rajasthan — a family clothing business. Customers browse sarees, suits, lehengas, western and kids' wear with Hindi and English labels, view products in multi-photo galleries with colour options, and order through the cart or WhatsApp.",
        features=["Bilingual Hindi / English navigation", "Category mega-menu: sarees, suits, lehengas, kids' wear and more", "Product pages with photo gallery and colour variants", "Cart, wishlist, offers and order tracking", "WhatsApp chat and store contact with business hours", "Size guide, shipping, returns and policy pages", "Admin pages for products and orders", "Blog, FAQ and careers pages"],
        tech=["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion", "Vercel"]),
    "seminarkaran": dict(
        description="Personal educator website listing student seminars, Python tutorials, books and software projects, with online, offline and hybrid session options and a YouTube lecture section.",
        tech=["Next.js", "React", "Tailwind CSS", "YouTube", "Vercel"]),
    "pocket-arcade": dict(
        description="A 3D game arcade that runs in the browser — 18 games across 8 categories, built with Babylon.js. High scores, favourites and settings are saved on the device, and it can be installed for offline play. No server needed, so it can be hosted anywhere for free.",
        features=["18 playable 3D games in 8 categories", "Smooth WebGL 3D graphics with a fallback screen", "Keyboard, touch and mouse controls", "High scores, favourites and settings saved locally", "Works offline after the first visit", "Generated sound effects"]),
    "pyboss": dict(description="An offline game that teaches Python through code puzzles and boss battles. All 1,344 questions are generated from templates and every answer is verified by actually running the code in Python, so there are no wrong answers in the game. Players move through 14 worlds earning coins, XP, avatars and achievements."),
    "tallhour": dict(
        description="A focus app that locks the phone for a chosen time and lets through only the apps you pack into your 'suitcase' — calls, maps or a messenger. It works fully offline with no login. Free users see a small banner; a one-time 'Plus' purchase removes ads and adds extras. Comes with its own landing page and privacy policy site.",
        features=["Timed phone lock with a full-screen block", "'Suitcase' of allowed apps during a block", "Limited emergency unlocks ('parachutes')", "Scheduled routines (e.g. every night 11 PM – 7 AM)", "A tower that grows with each completed block, plus stats", "Home-screen widget, light and dark themes, backup", "One-time Plus purchase: no ads, extra colours, more routines", "Landing page and privacy policy website"]),
    "holefeast": dict(
        description="A casual 3D game: drag a hole around the field and swallow thousands of foods — it grows as it eats. Built in Godot 4 with Blender-modelled food, an original mole mascot called Digby, unlockable hole skins and seven playable fields.",
        features=["Levels with about 3,400 items that fall into the hole with real physics", "15 foods modelled in Blender", "Growing hole with adaptive camera zoom", "6 hole skins and 7 fields (including night and snow)", "Original mascot Digby with animations", "Home, shop, pause and win screens"]),
    "abeeloo": dict(
        description="A 3D alphabet app for toddlers. All 26 letters and 260 word objects are modelled in Blender and shown in real-time 3D, and 592 friendly voice lines say every letter, word and sentence. Children learn, find letters and pictures, trace letters, explore objects and collect stickers, with a parent area behind a gate.",
        features=["26 3D letters and 260 3D word objects", "Spoken letters, words and sentences (592 voice lines)", "Find-the-letter and find-the-picture games", "Letter tracing", "3D explore mode with rotatable objects", "Sticker collection and celebration rewards", "Parent area behind a gate, family-safe ads", "314 sound effects and music"]),
    "app-legal-portal": dict(features=["Privacy policy page for each app", "Terms of service for each app and a terms hub", "Account and data deletion request form", "Trader details required by Google Play", "Easy navigation with table of contents", "app-ads.txt for AdMob verification"]),
    "school-masti-3d": dict(features=["Open campus: classrooms, labs, library, canteen, courts and road traffic", "8 playable characters and 39 teacher and student characters", "54 missions: story chapters, side quests, pranks and secret missions", "8 mini-games including surprise test, lab mixing and basketball", "Day-night cycle, weather, rideable cycles and Indian vehicles", "Daily login rewards, lucky wheel and achievements", "29 outfits previewed in 3D", "Google Play Games sign-in, leaderboard and cloud save"]),
}

def main():
    if os.path.isdir(PUB):
        shutil.rmtree(PUB)
    out = []
    for p in PROJECTS:
        src = inv(p["inv"])
        d = os.path.join(PUB, p["slug"]); os.makedirs(d, exist_ok=True)
        ic = p.get("icon", src.get("icon_path"))
        ic_url = f"/work/{p['slug']}/{icon(ic, d)}" if ic and os.path.exists(ic) else None
        shots = []
        for i, s in enumerate(p["shots"]):
            path, label, frame = s[0], s[1], s[2]
            top = s[3] if len(s) > 3 else 0; bottom = s[4] if len(s) > 4 else 0; aspect = s[5] if len(s) > 5 else None
            if not os.path.exists(path):
                print("  MISSING", path); continue
            fn = f"{i + 1:02d}.webp"
            w, h = process(path, os.path.join(d, fn), frame, top, bottom, aspect)
            shots.append(dict(src=f"/work/{p['slug']}/{fn}", w=w, h=h, label=label, frame="desktop" if frame == "desktop" else "phone" if h > w else "tablet"))
        p = {**p, **OVERRIDE.get(p["slug"], {})}
        tech = tech_list(p.get("tech") or src.get("tech"))
        desc = p.get("description") or src.get("description") or ""
        feats = p.get("features") or src.get("features") or []
        year = int(((src.get("last_date") or "2026")[:4]))
        rec = dict(slug=p["slug"], name=p["name"], kind=p["kind"], status=p["status"], year=year, tagline=p["tagline"],
                   description=desc, features=feats, tech=tech, timeline=month_range(src), icon=ic_url, shots=shots,
                   links=p.get("links", {}), featured=p.get("featured", False))
        if p.get("client"): rec["client"] = p["client"]
        if p.get("play"): rec["play"] = p["play"]
        out.append(rec)
        print(f"{p['slug']}: {len(shots)} shots, icon={'y' if ic_url else 'n'}")
    more = []
    for name, kind, status, line, key in MORE:
        try:
            src = inv(key)
        except KeyError:
            src = {}
        more.append(dict(name=name, kind=kind, status=status, tagline=line, tech=tech_list(src.get("tech"))[:4]))
    ts = "// Generated by build_portfolio.py from the project inventory. Edit the script, not this file.\n"
    ts += 'import type { Project, MiniProject } from "@/types";\n\n'
    ts += "export const PROJECTS: Project[] = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n\n"
    ts += "export const MORE_PROJECTS: MiniProject[] = " + json.dumps(more, ensure_ascii=False, indent=2) + ";\n"
    open(os.path.join(SITE, "src", "data", "projects.ts"), "w", encoding="utf-8").write(ts)
    print("projects:", len(out), "more:", len(more))

if __name__ == "__main__":
    main()
