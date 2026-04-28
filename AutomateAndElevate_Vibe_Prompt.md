# Automate and Elevate LLC — Cinematic Landing Page Build Prompt

## Instructions For AI (Claude Code / Cursor / Gemini)

You are a World-Class Senior Creative Technologist and Lead Frontend Engineer. Build a high-fidelity, cinematic landing page for **Automate and Elevate LLC**. Every scroll should feel intentional, every animation weighted and professional. Eradicate all generic AI patterns.

**DO NOT ask clarifying questions. Build immediately using ALL specifications below.**

---

## Brand Identity

- **Business Name:** Automate and Elevate LLC
- **Tagline:** Save 5–10 Hours a Week with Simple Automation
- **One-Line Purpose:** Helping small Wichita businesses automate their most repetitive tasks using simple, affordable tools they can understand and manage themselves.
- **Location:** Wichita, KS
- **Domain:** automateandelevatebiz.com
- **Contact Email:** tony@automateandelevatebiz.com
- **Owner:** Tony (no last name needed on site)

---

## Aesthetic Direction — Custom "Professional Trust" Preset

Do NOT use any of the default presets. Use this custom design system exactly:

### Color Palette
```
Primary Background:    #FFFFFF  (white)
Section Background:    #F7FAFC  (light gray — alternate sections)
Dark Background:       #1E3A5F  (dark navy — philosophy + footer)
Primary Text:          #1E3A5F  (dark navy)
Secondary Text:        #4A5568  (medium gray)
Accent / CTA:          #1A56DB  (trust blue)
Accent Hover:          #1440B3  (darker blue)
Border / Dividers:     #E2E8F0  (subtle light gray)
White Text:            #FFFFFF  (on dark sections)
Muted Text:            #A0AEC0  (captions, labels)
```

### Typography
```
Heading Font:  "DM Sans" (Google Fonts) — tight tracking, modern, clean
Body Font:     "DM Sans" (same family, lighter weight)
Mono Font:     "DM Mono" (Google Fonts) — for labels, stats, live feed
Hero Size:     clamp(3rem, 6vw, 5rem) for H1
Sub Size:      clamp(1.1rem, 2vw, 1.4rem) for subtitles
Body:          1rem / 1.125rem, line-height 1.7
```

### Identity
Clean, professional, approachable. A Wichita small business owner should look at this site and think: "This person is competent, local, and won't overwhelm me with tech jargon." Minimal visual noise. Generous white space. Subtle shadows. Every element earns its place.

### Image Mood (Unsplash)
Use real Unsplash URLs. Search keywords: "modern office workspace minimal", "clean desk productivity", "wichita kansas cityscape", "small business owner working". Apply a light blue-white gradient overlay on hero image.

---

## Fixed Design System (APPLY TO ALL SECTIONS)

### Visual Texture
- Global CSS noise overlay: inline SVG `<feTurbulence>` filter at 0.03 opacity — very subtle, keeps it clean not gritty
- Border radius system: `rounded-2xl` (16px) to `rounded-3xl` (24px) for all cards and containers
- No sharp corners anywhere except horizontal dividers

### Micro-Interactions
- All buttons: `scale(1.03)` on hover, `cubic-bezier(0.25, 0.46, 0.45, 0.94)` transition
- Buttons: `overflow-hidden` with sliding background `<span>` layer for color transition
- Nav links and interactive elements: `translateY(-1px)` lift on hover
- Cards: subtle `box-shadow` lift on hover (`0 8px 30px rgba(26, 86, 219, 0.12)`)

### Animation Lifecycle
- Use `gsap.context()` within `useEffect` for ALL animations, return `ctx.revert()` in cleanup
- Default easing: `power3.out` for entrances, `power2.inOut` for morphs
- Stagger: `0.08` for text, `0.15` for cards
- All sections: fade-up on scroll using ScrollTrigger (`y: 40 → 0, opacity: 0 → 1`)

---

## Tech Stack

```
Framework:    React 19 + Vite
Styling:      Tailwind CSS v3
Animations:   GSAP 3 + ScrollTrigger plugin
Icons:        Lucide React
Fonts:        Google Fonts (DM Sans, DM Mono)
Form:         Formspree (replace mbdqvowa placeholder)
Booking:      HubSpot Meetings embed (✅ LIVE: https://meetings-na2.hubspot.com/tony4)
Images:       Real Unsplash URLs
Responsive:   Mobile-first, fully responsive
```

**File structure:** Single `App.jsx` with all components. Single `index.css` for Tailwind + noise overlay + custom utilities.

---

## Page Sections — BUILD ALL IN ORDER

---

### SECTION 1: NAVBAR — "Floating Island"

Fixed, pill-shaped, horizontally centered at top of viewport.

**Morphing behavior:**
- At top of page: transparent background, white text (hero is behind it)
- On scroll past hero: `bg-white/80 backdrop-blur-xl` with navy text, subtle border `border-[#E2E8F0]`
- Use IntersectionObserver on hero section to trigger morph

**Content:**
- Left: Logo text "Automate & Elevate" in accent blue (`#1A56DB`), DM Sans bold
- Center: Nav links → Services | Pricing | About | Contact (smooth scroll anchors)
- Right: CTA button "Book Free Audit" — solid `#1A56DB` background, white text, rounded-full

**Mobile:** Hamburger menu, slides down full-width nav

---

### SECTION 2: HERO — "The Opening Shot"

`min-height: 100dvh`. Full-bleed Unsplash background image with a light `bg-gradient-to-br from-white/90 via-[#F7FAFC]/80 to-[#1A56DB]/10` overlay. Keep it bright, not dark.

**Layout:** Content in bottom-left third of viewport, flex layout.

**Typography — staggered GSAP fade-up:**
- Small label above headline: `"WICHITA, KS AUTOMATION CONSULTING"` — DM Mono, uppercase, `#1A56DB`, letter-spacing wide
- H1 (large, DM Sans bold): `"Save 5–10 Hours a Week"`
- H1 continuation (accent colored): `"with Simple Automation."`
- Subheadline (body size, gray): `"I help small Wichita businesses automate their most repetitive tasks — using affordable tools they can actually manage themselves."`

**CTAs (animate in after text):**
- Primary button: "Book Your Free Audit" → scrolls to `#booking` section
- Secondary ghost button: "See How It Works" → scrolls to `#services`

**Hero badge:** Small floating pill bottom-right: `"🟢 Available for new clients in Wichita"` — subtle, white bg, border, DM Mono small text

---

### SECTION 3: STATS BAR — "Social Proof Strip"

`bg-[#F7FAFC]`, border-top and border-bottom `#E2E8F0`. Sits immediately below hero.

**4 stats in horizontal row (2x2 on mobile):**

| Stat | Label |
|------|-------|
| 5–10 hrs | Saved Per Week |
| From $500 | Transparent Pricing |
| 20 Min | Free Audit |
| Wichita, KS | Local & Remote |

Each stat: Large number in `#1A56DB` DM Sans bold, label in `#4A5568` DM Mono small caps.
Animate: Count-up effect on numbers when section enters viewport (GSAP).

---

### SECTION 4: SERVICES — "Interactive Functional Artifacts"

`id="services"` — White background. Section title: `"What I Do For You"`.

Five service cards — first three are interactive animated artifacts, last two are static with animation elements. Display as 3-column row on desktop (top row), then 2-column row (bottom row). Single column on mobile.

**Card 1 — "Diagnostic Shuffler" (Appointment Automation)**
- 3 overlapping cards cycling vertically every 3 seconds using `array.unshift(array.pop())` with spring-bounce `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Labels: "Booking Confirmation Sent ✓", "24hr Reminder Delivered ✓", "Follow-Up Triggered ✓"
- Card heading: "Appointment & Follow-Up Automation"
- Descriptor: "Never manually chase a client again. Confirmations, reminders, and follow-ups run on autopilot."

**Card 2 — "Telemetry Typewriter" (Lead & CRM Automation)**
- Monospace live-text feed typing character-by-character with blinking `#1A56DB` cursor
- Messages to cycle through:
  - `> New lead captured from website...`
  - `> Contact created in CRM...`
  - `> Follow-up email scheduled...`
  - `> Deal stage updated: Proposal Sent`
  - `> Reminder set: Follow up in 3 days`
- "Live Feed" label with pulsing blue dot
- Card heading: "Lead & CRM Automation"
- Descriptor: "Every new inquiry auto-captured, organized, and followed up — without you lifting a finger."

**Card 3 — "Cursor Protocol Scheduler" (Review Automation)**
- Weekly grid S M T W T F S
- Animated SVG cursor enters, moves to a day, clicks (scale 0.95 press), activates with `#1A56DB` highlight, moves to "Request Review" button before fading out, loops
- Card heading: "Review & Reputation Automation"
- Descriptor: "Automatically request Google reviews after every appointment. Build your reputation on autopilot."

**Card 4 — "Website Design & Setup" (Static Card)**
- Animated mockup: Browser window outline with a progress bar filling up labeled "Building your site..." then flipping to show a checkmark "Site Live ✓" — loops every 4 seconds
- Card heading: "Website Design & Setup"
- Descriptor: "A clean, professional website built for your business — connected to your automations from day one. No templates that look like everyone else's."
- Small badge: "NEW" in `#1A56DB` top-right corner of card

**Card 5 — "AI Chatbot" (Static Card)**
- Animated mockup: Simple chat bubble UI — a question appears `"What are your hours?"`, then an AI reply types out `"We're open Mon–Sat 9am–6pm. Want to book now? 👉"` with a blinking cursor, then a "Book Now" button fades in. Loops every 5 seconds.
- Card heading: "AI Chatbot for Your Website"
- Descriptor: "A 24/7 AI assistant trained on your business. Answers questions, captures leads, and books appointments — even while you sleep."
- Small badge: "NEW" in `#1A56DB` top-right corner of card

**All cards:** `bg-white`, subtle border `#E2E8F0`, `rounded-2xl`, drop shadow, `#1A56DB` icon accent top-left. Display as 3-column top row (cards 1-3) + 2-column centered bottom row (cards 4-5) on desktop. Single column on mobile.

---

### SECTION 5: PHILOSOPHY — "The Manifesto"

Full-width section. `bg-[#1E3A5F]` dark navy background. Parallaxing subtle texture image at 0.05 opacity behind text.

**Typography contrast — GSAP word-by-word reveal on scroll:**

Line 1 (smaller, muted white): `"Most automation consultants focus on: complex enterprise systems that overwhelm small business owners."`

Line 2 (massive, DM Sans bold, white with `#1A56DB` keyword):
`"We focus on: tools you can actually understand — and results you'll feel by Friday."`

Supporting line below: `"Simple. Affordable. Wichita-built."` — DM Mono, uppercase, muted white

---

### SECTION 6: HOW IT WORKS — "Sticky Stacking Archive"

`id="process"` — 3 full-screen cards that stack on scroll.

**Stacking behavior:** GSAP ScrollTrigger with `pin: true`. As new card enters, previous card scales to `0.9`, blurs to `blur(8px)`, fades to `0.6`.

**Card 1 — Step 01: Free Audit**
- Canvas animation: Slowly rotating concentric circles in `#1A56DB`
- Title: "Free 20-Minute Audit"
- Description: "We review your current workflow together and map out exactly where automation can save you the most time. No pressure. No commitment."
- Background: `#FFFFFF`

**Card 2 — Step 02: Build & Setup**
- Canvas animation: Scanning horizontal laser-line moving across a dot grid in `#1A56DB`
- Title: "I Build It For You"
- Description: "I set up your automations using tools like Zapier, HubSpot, and Calendly. You don't need to touch a line of code. I handle everything and show you how it works."
- Background: `#F7FAFC`

**Card 3 — Step 03: You Save Time**
- SVG animation: Pulsing waveform EKG-style path, `stroke-dashoffset` animation in `#1A56DB`
- Title: "You Get Hours Back"
- Description: "Your business runs smoother. Follow-ups go out automatically. Reviews roll in. You stop doing $15/hr tasks and focus on what actually grows your business."
- Background: `#FFFFFF`

---

### SECTION 7: PRICING — "Transparent Packages"

`id="pricing"` — `bg-[#F7FAFC]`. Section title: `"Simple, Transparent Pricing"`. Subtext: `"No hidden fees. No confusing contracts. Just results."`

**4 pricing cards in grid (2x2 on tablet, 1 col mobile):**

**Card 1 — Free Audit**
- Price: `$0`
- Badge: "Start Here"
- Features: 20-minute workflow review, Identify top automation opportunities, No commitment required, Local or video call
- CTA button: "Book Free Audit" → scrolls to `#booking`
- Style: White card, standard border

**Card 2 — Starter Setup**
- Price: `$500–$800`
- Badge: "Most Popular for New Clients"
- Features: 1–2 automations fully set up, Appointment reminders OR lead follow-up, Training so you can manage it, 30-day email support
- CTA button: "Get Started" → scrolls to `#booking`
- Style: White card, standard border

**Card 3 — Growth Bundle ⭐**
- Price: `$1,500–$2,500`
- Badge: "⭐ Most Popular"
- Features: Full automation stack, CRM setup + pipeline, Appointment + reminder system, Google review automation, Lead capture + follow-up, Website contact form automation, AI chatbot for your website, 60-day support included
- CTA button: "Book Free Audit" → scrolls to `#booking`
- Style: **FEATURED CARD** — `#1A56DB` border ring, slightly larger scale (`scale-105`), white background, blue badge, most prominent shadow

**Card 4 — Monthly Retainer**
- Price: `$300–$600/mo`
- Badge: "Ongoing Partnership"
- Features: Ongoing automation support, Monthly new automation added, Performance check-ins, Priority response, Cancel anytime
- CTA button: "Let's Talk" → scrolls to `#contact`
- Style: White card, standard border

**Bottom note:** `"Not sure which plan? Start with the free audit — it's 20 minutes and completely free."` — centered, `#4A5568`

**Website Add-Ons Box** — render below the pricing cards and bottom note as a clean light gray container with a `#1A56DB` left border accent (4px), `rounded-2xl`, centered:

```
Also need a website or chatbot?

Starter Presence          $600–$900
1-page professional site + booking automation + welcome email

Full Business Site        $1,200–$1,800
Multi-page site + contact form + full automation stack

Website + Growth Bundle   $1,500–$2,500
Everything in Growth Bundle + a complete custom website

AI Chatbot Add-On         $400–$800
GPT-powered chat widget trained on your business.
Answers questions, captures leads, books appointments 24/7.
```

Small print below: `"All websites are mobile-first, fast-loading, and connected to your automations from day one."`
Style the four tiers as a clean 2x2 mini-grid inside the box. Tier names in `#1E3A5F` bold, prices in `#1A56DB` bold, descriptions in `#4A5568` small.

---

### SECTION 8: ABOUT — "The Human Behind It"

`id="about"` — `bg-[#1E3A5F]` dark navy. NO photo/headshot.

**Layout:** Large decorative initial "T" in `#1A56DB` on the left (typographic element, not a photo), text content on the right.

**Content:**
- Small label: `"ABOUT"` — DM Mono, uppercase, muted blue
- Heading: `"Hi, I'm Tony."`
- Bio paragraph: `"I'm a Wichita-based automation consultant helping local small businesses reclaim their time. I specialize in setting up simple, affordable automations using tools like Zapier, HubSpot, and Calendly — so you can focus on running your business, not chasing follow-ups."`
- Second paragraph: `"I work with restaurants, service businesses, contractors, and anyone who's tired of doing the same repetitive tasks every single day. If you're in Wichita, we can meet in person. If you're not, I work remotely too."`
- Tags row: `📍 Wichita, KS` | `💻 Local + Remote` | `🤝 Plain-English Explanations`

---

### SECTION 9: BOOKING — "Book Your Audit"

`id="booking"` — Full-width section, `bg-[#1A56DB]` accent blue background, all white text.

**Content:**
- Heading (white, large): `"Book Your Free 20-Minute Audit"`
- Subtext (white/80): `"No commitment. Just a conversation about where automation can save you time. I'll review your workflow and give you a clear picture of what's possible."`
- **HubSpot Meetings embed widget** — centered, white card container, rounded-2xl
  - ✅ LIVE: https://meetings-na2.hubspot.com/tony4
  - Use `<iframe>` embed OR inline script embed from HubSpot
  - Fallback text if embed fails: `"Or email me directly: tony@automateandelevatebiz.com"`
- Small trust line below: `"🔒 No spam. No pressure. I respond within 24 hours."`

---

### SECTION 10: CONTACT FORM — "Send a Message"

`id="contact"` — `bg-[#F7FAFC]`. For people who prefer email over booking.

**Section title:** `"Prefer to Send a Message?"`
**Subtext:** `"I'll get back to you within 24 hours."`

**Form fields:**
- Full Name* (text input)
- Email Address* (email input)
- Business Name (text input, optional)
- Message* (textarea, 4 rows)
- Submit button: "Send Message" — solid `#1A56DB`, white text, full-width on mobile

**Form handling:**
- Action: `https://formspree.io/f/mbdqvowa`
- Method: POST
- Include hidden honeypot field for spam protection: `<input type="text" name="_gotcha" style="display:none">`
- Success message (show after submit, replace form): `"✅ Message received! I'll get back to you within 24 hours."`
- Error message: `"Something went wrong. Please email me directly at tony@automateandelevatebiz.com"`

**Styling:** White card container, `rounded-2xl`, shadow, inputs with `border-[#E2E8F0]` border, `focus:border-[#1A56DB]` on focus, smooth transition.

---

---

### SECTION 11.5: COMING SOON BANNER — "Voice, SMS & Advanced AI Teaser"

Add this as a full-width banner between the Contact Form and Footer sections.

**Style:** Dark navy `#1E3A5F` background, `rounded-2xl`, centered content, generous padding.

**Content:**
- Small label: `"COMING SOON"` — DM Mono, uppercase, `#1A56DB`
- Heading: `"AI Voice Agents, SMS Follow-Up & Advanced Chatbots"`
- Subtext: `"Automated phone calls, two-way text sequences, and intelligent chatbots that qualify leads and book appointments — while you sleep. Join the waitlist to be first."`
- Three feature pills in a row: `"📞 AI Voice Calls"` | `"💬 SMS Sequences"` | `"🤖 Advanced Chatbots"` — each as a small rounded pill with `#1A56DB/10` background and `#1A56DB` text
- Inline email input + button:
  - Input: placeholder `"your@email.com"` — white bg, `rounded-full`
  - Button: `"Join Waitlist"` — solid `#1A56DB`, white text, `rounded-full`
  - Form submits to Formspree: `https://formspree.io/f/mbdqvowa` with hidden field `source=waitlist`
- Small note: `"No spam. Just a heads-up when it launches."` — muted white, DM Mono small

---



`bg-[#1E3A5F]` dark navy, `rounded-t-3xl`.

**Grid layout (3 columns desktop, stacked mobile):**

Left column:
- Brand name: "Automate & Elevate" — DM Sans bold, white
- Tagline: "Simple automation for Wichita small businesses." — muted white, small
- `"🟢 Accepting new clients"` — pulsing green dot + DM Mono label

Center column:
- Nav: Services | Pricing | About | Contact | Book Free Audit

Right column:
- Email: tony@automateandelevatebiz.com
- Location: Wichita, KS
- Business: Automate and Elevate LLC

Bottom bar (full-width, border-top `#4A5568`):
- Left: `"© 2026 Automate and Elevate LLC. All rights reserved."`
- Right: `"Built in Wichita, KS 🇺🇸"`

---

## SEO & Meta Tags

Add to `index.html` `<head>`:

```html
<title>Automate and Elevate | AI Automation Consulting Wichita KS</title>
<meta name="description" content="Save 5–10 hours a week with simple automation. Wichita KS small business automation consulting. Zapier, HubSpot, Calendly setup starting at $500. Free 20-minute audit.">
<meta name="keywords" content="wichita automation consultant, small business automation wichita, zapier consultant wichita ks, hubspot setup wichita, business automation kansas">
<meta property="og:title" content="Automate and Elevate | Save 5-10 Hours a Week">
<meta property="og:description" content="Simple, affordable automation for Wichita small businesses. Starting at $500.">
<meta property="og:url" content="https://automateandelevatebiz.com">
<meta property="og:type" content="website">
<link rel="canonical" href="https://automateandelevatebiz.com">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## GitHub Pages Deployment

After building, add this file as `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Also add to `vite.config.js`:
```js
export default {
  base: '/', // Use '/' if using custom domain
}
```

---

## Placeholders To Replace Before Going Live

| Placeholder | What to replace with |
|-------------|---------------------|
| `https://meetings-na2.hubspot.com/tony4` | Your HubSpot Meetings embed URL (from HubSpot → Sales → Meetings) |
| `mbdqvowa` | Your Formspree form ID (from formspree.io → New Form) |

---

## Final Build Directive

"Do not build a website; build a digital instrument for a Wichita automation consultant. Every scroll should feel intentional and professional. The site should make a small business owner feel: this person is credible, local, and exactly who I need. Clean. Trustworthy. Confident. Build it complete — no placeholders except the two noted above, no lorem ipsum, no missing sections."
