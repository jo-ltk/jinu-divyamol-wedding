<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Jinu & Divyamol Wedding Website

This is a premium JW Christian wedding website for Jinu Albert and Divyamol K B. It should feel like a high-end, modern editorial invitation: elegant, minimal, romantic, faith-centered, and subtly Kerala-inspired.

## Design and content

- Use mustard yellow, white, and light blue as the core palette, with calm, refined contrast.
- Treat Malayalam as meaningful cultural and visual content, especially the supplied scripture—not as decorative filler.
- Use semantic HTML, accessible labels and landmarks, responsive images, and a mobile-first layout.
- Keep the visual language restrained. Avoid generic wedding-template conventions, heavy florals, neon, cheap gradients, excessive shadows, glassmorphism, clutter, and unnecessary social sections.
- Never invent wedding information. Use only facts supplied by the couple and clearly label temporary imagery as placeholders until genuine photography is supplied.
- Do not add RSVP, a gift registry, a guest book, or unrequested social-media sections.

## Motion

- Animation must be purposeful and sophisticated, never decorative by default.
- Use GSAP (and ScrollTrigger where justified) for complex sequences, with transform and opacity as the preferred animated properties.
- Honor `prefers-reduced-motion`; the reduced-motion experience must remain complete and usable.
- Avoid bouncy easing, blanket animation, excessive parallax, confetti, and animation that harms mobile performance.
- Before substantial motion work, use the installed `find-animation-opportunities` and `animate` skills; review completed work with `review-animations` and `improve-animations`.

## Architecture and quality

- Keep wedding content in typed, centralized content modules under `src/content/` once implementation begins.
- Keep reusable presentation components under `src/components/`, feature sections under `src/features/`, and motion helpers under `src/lib/`.
- Store replaceable images in clearly named folders under `public/images/`; do not mix placeholder and final couple photography.
- Prefer server components. Introduce client components only when interaction or GSAP needs them.
- Run `npm run lint` and `npm run build` after implementation changes. Verify the completed interface with a real browser before handoff.

## Tooling

- `gsap-master` is configured in Codex. Use it for GSAP-specific API guidance rather than relying on memory.
- Use Context7, Playwright MCP, and Figma MCP only when they are configured and available in the active environment. Never add guessed endpoint URLs, tokens, or credentials.
