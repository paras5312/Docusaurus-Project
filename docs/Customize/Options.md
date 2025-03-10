---
sidebar_position: 3
---

# Options

Quickly customize Bootstrap with built-in variables to easily toggle global CSS preferences for controlling style and behavior.

<p>Customize Bootstrap with our built-in custom variables file and easily toggle global CSS preferences with new <code>$enable-*</code> Sass variables. Override a variable’s value and recompile with <code>npm run test</code> as needed.</p>

<p>You can find and customize these variables for key global options in Bootstrap’s <code>scss/_variables.scss</code> file.</p>

| Variable                          | Values                  | Description |
|-----------------------------------|-------------------------|-------------|
| `$spacer`                         | `1rem` (default), or any value > 0 | Specifies the default spacer value to programmatically generate our [spacer utilities](#). |
| `$enable-dark-mode`               | `true` (default) or `false` | Enables built-in [dark mode support](#) across the project and its components. |
| `$enable-shadows`                 | `true` (default) or `false` | Enables predefined `box-shadow` styles on various components. |
| `$enable-gradients`               | `true` (default) or `false` | Enables predefined gradients `background-image` styles on various components. |
| `$enable-transitions`             | `true` (default) or `false` | Enables predefined `transitions` on various components. |
| `$enable-reduced-motion`          | `true` (default) or `false` | Enables the [`prefers-reduced-motion` media query](#), which suppresses certain animations/transitions based on the users’ browser/OS settings preferences. |
| `$enable-grid-classes`            | `true` (default) or `false` | Enables the generation of CSS classes for the grid system (e.g., `.row`, `.col-md-6`, etc.). |
| `$enable-container-classes`       | `true` (default) or `false` | Enables the generation of CSS classes for layout containers. (New in v5.2.0) |
| `$enable-caret`                   | `true` (default) or `false` | Enables pseudo-element caret on `.dropdown-toggle`. |
| `$enable-button-pointers`         | `true` (default) or `false` | Add "hand" cursor icon to disabled button elements. |
| `$enable-rfs`                     | `true` (default) or `false` | Globally enables [RFS](#). |
| `$enable-validation-icons`        | `true` (default) or `false` | Enables `background-image` icons within textual inputs and some custom forms for validation states. |
| `$enable-negative-margins`        | `true` (default) or `false` | Enables the generation of [negative margin utilities](#). |
| `$enable-important-utilities`     | `true` (default) or `false` | Set to `false` to hide the warnings when using the deprecated mixins and functions that are planned to be removed in the next major version. |
| `$enable-smooth-scroll`           | `true` (default) or `false` | Applies `scroll-behavior: smooth` globally, except for users opting for reduced motion through [`prefers-reduced-motion` media query](#). |
