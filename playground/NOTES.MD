# Accessibility Comparison Notes: Custom vs. Shadcn/ui (Radix)

This document analyzes the technical and accessibility gaps between our custom-built React + TS components and the industry-standard implementation in shadcn/ui (powered by Radix UI primitives).

---

## 1. Concrete Gaps Identified

### Gap 1: Portal Rendering & DOM Isolation
*   **Our Custom Version:** Renders the Modal inline inside the component tree. If nested within an parent container with `overflow: hidden` or specific `z-index` stacks, the modal could visually clip or fail to render above other layouts.
*   **Shadcn/ui (Radix):** Employs **Portals** (`<DialogPrimitive.Portal>`) which dynamically injects the modal markup directly into the `<body>` element. This completely detaches it from the parent styling constraints while preserving React context, ensuring consistent layering and rendering across all viewport situations. Furthermore, Radix fully isolates the rest of the page using `aria-hidden="true"` on non-modal DOM nodes when the dialog is open, which prevents screen readers from navigating outside the modal.

### Gap 2: Robust Focus Management & Edge Cases
*   **Our Custom Version:** Implements a manual focus trap query selector on common focusable elements (`button`, `a`, `input`, etc.). If there are no focusable elements inside the modal, or if nested elements dynamically change state, the custom focus trap can break.
*   **Shadcn/ui (Radix):** Leverages `@radix-ui/react-focus-guards` and specialized focus-trap mechanisms. It handles:
    *   **Sentinel Elements:** Invisible inputs placed at the start and end of the boundary to trap focus perfectly even if the inner content is fully static or dynamically rendering.
    *   **Focus Restoration Precision:** Safely restores focus back to the exact element trigger, even if that trigger was conditionally unmounted or shifted in the DOM.

### Gap 3: Complete Keyboard Specifications
*   **Our Custom Version:** For Tabs, we handled `ArrowRight` and `ArrowLeft` but omitted `Home` and `End` key bindings.
*   **Shadcn/ui (Radix):** Fully supports:
    *   `Home` key (focusses the first tab instantly).
    *   `End` key (focusses the last tab instantly).
    *   Supports both automatic activation (selection on focus) and manual activation (selection only on press).

---

## 2. Key Learnings

1. **Reflecting ARIA State States Dynamically:** Building accessible widgets manually requires deep state binding with semantic attributes (`aria-selected`, `aria-expanded`). A single mistake in string interpolation can lead to screen readers presenting stale state information.
2. **The "Why" of Radix UI:** Library packages like Radix are not just UI tools; they are battle-tested, standard-compliant state engines that solve cross-browser edge cases for assistive technologies (such as NVDA or VoiceOver mobile screen-reader nuances).