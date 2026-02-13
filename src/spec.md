# Specification

## Summary
**Goal:** Build a single-page SmartBreak deep-tech marketing website with consistent dark-blue/electric-yellow styling, section diagrams/visuals, smooth animations, and a working contact form persisted in a single Motoko actor.

**Planned changes:**
- Create one scrollable page containing 9 sections in the required order: Hero, Problem, Our Solution, How It Works (6 steps), Technology & Innovation, Simulation & Proof, Impact, About/Research Background, Contact.
- Apply the SmartBreak design system (dark-blue base, electric-yellow accents, modern sans-serif typography, consistent components).
- Implement Hero with exact headline/subheadline, two CTAs (Request Demo scrolls to Contact; Download Technical Brief downloads a local placeholder PDF), plus a subtle animated power-grid background.
- Add smooth-scroll behavior for in-page jumps and subtle on-scroll entrance animations for key elements across sections.
- Build required content sections with specified titles, bullets, and visuals/diagrams (problem chain infographic; solution architecture diagram; 6-step icon flow; tech highlight cards; MATLAB waveform placeholder; Impact visual storytelling; About text).
- Add static public assets for all placeholder diagrams/visuals and reference them from the frontend (no backend image serving).
- Implement Contact form with Name/Organization/Email/Message, two submit CTAs (“Partner With Us”, “Request Pilot Deployment”), basic validation, and success/error UI states.
- Add backend persistence in a single Motoko actor: store submissions (timestamp, name, organization, email, message, selected CTA) with an update method to create and a query method to list; persist across upgrades using the template’s stable-state pattern.

**User-visible outcome:** Visitors can scroll through a polished SmartBreak one-page pitch site with diagrams/animations, download a technical brief PDF, and submit a contact request via one of two CTAs; submissions are stored in the canister for later retrieval.
