# Development setup

## Installed foundation

- Next.js 16 with the App Router and TypeScript
- Tailwind CSS 4
- GSAP and `@gsap/react`
- ESLint via the standard Next.js configuration

## Skills

The official `emilkowalski/skills` repository was installed in `.agents/skills/`. The requested skills are available there:

- `emil-design-eng`
- `animate`
- `review-animations`
- `improve-animations`
- `find-animation-opportunities`
- `apple-design`

Use the original skill instructions without modification when those skills are invoked.

## MCP status

`gsap-master` is enabled in the local Codex configuration with:

```text
command: npx
args: -y @vinhnguyen/gsap-mcp
```

Context7, Playwright MCP, and Figma MCP are not currently registered in the active Codex configuration. They require their own verified server configuration (and any provider-required authentication) before use. No guessed configuration or credentials were added.

## Planned source layout

```text
src/
  app/          Next.js routes, global styles, and layout
  components/   reusable UI primitives
  content/      typed, couple-approved wedding content
  features/     page sections and section-specific components
  lib/          motion and shared utilities
public/images/  replaceable couple, venue, story, and gallery assets
```

The website is implemented with this structure. Wedding facts and all replaceable temporary image references are centralized in `src/content/wedding.ts`; GSAP orchestration is contained in `src/components/motion-provider.tsx`.
