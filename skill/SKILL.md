# Premium Frontend Builder Skill

A comprehensive playbook, standard, and instruction set for creating visually stunning, modern, and highly interactive user interfaces. Use this skill whenever building client-side views, writing styles, crafting micro-animations, setting up CSS/Tailwind design tokens, or auditing UI/UX layouts.

## Core Directives

### 1. Visual Excellence & Rich Aesthetics
- ** Harmonious Palettes**: Avoid basic web-safe colors. Utilize tailored HSL gradients, glassmorphism (`backdrop-filter`), elegant borders, and soft shadows (`shadow-sm`, `shadow-xl`).
- **Typography Priority**: Import premium typography (e.g., Google Fonts like Inter, Outfit, Playfair Display) rather than relying on standard browser fallbacks. Configure scale, weight, and tracking (`tracking-wide`, `tracking-tight`) to fit the brand's archetype.
- **Biophilic & Theme-centric Gradients**: Draw inspiration from nature (biophilic colors: forest, sage, cream, sky) and map them cleanly to CSS variable structures.

### 2. Responsiveness & Mobile-First Execution
- Implement flexible layouts using modern CSS Flexbox and Grid.
- Design mobile-first. Ensure all tap targets are at least `48px * 48px` to guarantee physical accessibility on touch screens.
- Use explicit aspect ratios to avoid Cumulative Layout Shift (CLS) when loading images and media elements.

### 3. High-Fidelity Micro-Animations
- Add transitions on interactive items (buttons, inputs, links, cards):
  `transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]`
- Utilize keyframe-driven intro animations to make page loads feel organic and elegant (e.g., fade-ins, slide-ups).
- Suppress structural animations for users with `prefers-reduced-motion` media queries to ensure comprehensive accessibility.

---

## Technical Stack & Custom CSS Integration
*   **Base Styles**: Always establish custom Tailwind/CSS variables in the root style sheet (`index.css` or `globals.css`).
*   **Component Modularity**: Encapsulate reusable layouts into focused sub-components. Keep structural layout separated from stylistic presentation.
*   **Interactive Toggles**: Always provide dynamic feedback states (loading spinners, disabled buttons, active checkmarks, dynamic error highlights).

---

## References & Design Playbooks
See the following comprehensive guides in the `references/` directory to construct state-of-the-art visual interfaces:
1. [design-system-spec.md](file:///c:/Users/Kevin%20v%20Dev/Downloads/WEB%20Projects/WebDev%20AgentSkillsMD/.agents/skills/frontend-builder/references/design-system-spec.md) - Deep-dive tokens, HSL setups, biophilic colors, and custom glassmorphism.
2. [animations.md](file:///c:/Users/Kevin%20v%20Dev/Downloads/WEB%20Projects/WebDev%20AgentSkillsMD/.agents/skills/frontend-builder/references/animations.md) - Standard physics curves, custom micro-animations, keyframe loader classes.
3. [checklist.md](file:///c:/Users/Kevin%20v%20Dev/Downloads/WEB%20Projects/WebDev%20AgentSkillsMD/.agents/skills/frontend-builder/references/checklist.md) - End-to-end client visual and responsive compliance checklist.
