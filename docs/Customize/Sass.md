---
sidebar_position: 2
---

# Sass
Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.

Utilize our source Sass files to take advantage of variables, maps, mixins, and more.

## File structure 
Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it. Assuming you’re using a package manager like npm, you’ll have a file structure that looks like this:


```jsx
your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
└── index.html
```

If you’ve downloaded our source files and aren’t using a package manager, you’ll want to manually create something similar to that structure, keeping Bootstrap’s source files separate from your own.

```jsx
your-project/
├── scss/
│   └── custom.scss
├── bootstrap/
│   ├── js/
│   └── scss/
└── index.html
```

## Importing 
In your <code>custom.scss</code>, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.

```jsx
// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```


```jsx
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here

```

With that setup in place, you can begin to modify any of the Sass variables and maps in your <code>custom.scss</code>. You can also start to add parts of Bootstrap under the <code>// Optional</code> section as needed. We suggest using the full import stack from our <code>bootstrap.scss</code> file as your starting point.

## Compiling 
In order to use your custom Sass code as CSS in the browser, you need a Sass compiler. Sass ships as a CLI package, but you can also compile it with other build tools like <a href="https://gulpjs.com/">Gulp</a> or <a href="https://webpack.js.org/">Webpack</a>, or with a GUI applications. Some IDEs also have Sass compilers built in or as downloadable extensions.

We like to use the CLI to compile our Sass, but you can use whichever method you prefer. From the command line, run the following:


```jsx
# Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.css
```

Learn more about your options at <a href="https://sass-lang.com/install">sass-lang.com/install</a> and <a href="https://code.visualstudio.com/docs/languages/css#_transpiling-sass-and-less-into-css">compiling with VS Code</a>.

## Including 
Once your CSS is compiled, you can include it in your HTML files. Inside your <code>index.html</code> you’ll want to include your compiled CSS file. Be sure to update the path to your compiled CSS file if you’ve changed it.

```jsx
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Custom Bootstrap</title>
    <link href="/css/custom.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

## Variable defaults 
Every Sass variable in Bootstrap includes the <code>!default</code> flag allowing you to override the variable’s default value in your own Sass without modifying Bootstrap’s source code. Copy and paste variables as needed, modify their values, and remove the <code>!default</code> flag. If a variable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap.

You will find the complete list of Bootstrap’s variables in <code>scss/_variables.scss</code>. Some variables are set to <code>null</code>, these variables don’t output the property unless they are overridden in your configuration.

Variable overrides must come after our functions are imported, but before the rest of the imports.

Here’s an example that changes the <code>background-color</code> and <code>color</code> for the <code>&lt;body&gt;</code> when importing and compiling Bootstrap via npm:

```jsx
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional Bootstrap components here
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

Repeat as necessary for any variable in Bootstrap, including the global options below.


***Get started with Bootstrap via npm with our starter project!*** Head to the <a href="https://github.com/twbs/examples/tree/main/sass-js">Sass &amp; JS example</a> template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.

## Maps and loops 
Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the <code>!default</code> flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making removing items from a map slightly more difficult.

### Modify map 
All variables in the <code>$theme-colors</code> map are defined as standalone variables. To modify an existing color in our <code>$theme-colors</code> map, add the following to your custom Sass file:

```jsx
$primary: #0074d9;
$danger: #ff4136;
```

Later on, these variables are set in Bootstrap’s <code>$theme-colors</code> map:
```jsx
$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
```

### Add to map 
Add new colors to <code>$theme-colors</code>, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we’ll create a new <code>$custom-colors</code> map and merge it with <code>$theme-colors</code>.

```jsx
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Remove from map 
To remove colors from <code>$theme-colors</code>, or any other map, use <code>map-remove</code>. Be aware you must insert <code>$theme-colors</code> between our requirements just after its definition in <code>variables</code> and before its usage in <code>maps</code>:

```jsx
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc

```

## Required keys 
Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map’s key is being used.

For example, we use the <code>primary</code>, <code>success</code>, and <code>danger</code> keys from <code>$theme-colors</code> for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you’ll need to modify the Sass code that makes use of those values.

## Functions 
### Colors 
Next to the <a href="https://getbootstrap.com/docs/5.3/customize/color/#color-sass-maps">Sass maps</a> we have, theme colors can also be used as standalone variables, like <code>$primary</code>.

```jsx
.custom-element {
  color: $gray-100;
  background-color: $dark;
}
```

You can lighten or darken colors with Bootstrap’s <code>tint-color()</code> and <code>shade-color()</code> functions. These functions will mix colors with black or white, unlike Sass’ native <code>lighten()</code> and <code>darken()</code> functions which will change the lightness by a fixed amount, which often doesn’t lead to the desired effect.

<code>shift-color()</code> combines these two functions by shading the color if the weight is positive and tinting the color if the weight is negative.

```jsx
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}
```

In practice, you’d call the function and pass in the color and weight parameters.

```jsx
.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}

.custom-element-3 {
  color: shift-color($success, 40%);
  background-color: shift-color($success, -60%);
}
```

### Color contrast 
In order to meet the <a href="https://www.w3.org/TR/WCAG/">Web Content Accessibility Guidelines (WCAG)</a> contrast requirements, authors <strong>must</strong> provide a minimum <a href="https://www.w3.org/TR/WCAG/#contrast-minimum">text color contrast of 4.5:1</a> and a minimum <a href="https://www.w3.org/TR/WCAG/#non-text-contrast">non-text color contrast of 3:1</a>, with very few exceptions.

To help with this, we included the <code>color-contrast</code> function in Bootstrap. It uses the <a href="https://www.w3.org/TR/WCAG/#dfn-contrast-ratio">WCAG contrast ratio algorithm</a> for calculating contrast thresholds based on <a href="https://www.w3.org/TR/WCAG/#dfn-relative-luminance">relative luminance</a> in an <code>sRGB</code> color space to automatically return a light (<code>#fff</code>), dark (<code>#212529</code>) or black (<code>#000</code>) contrast color based on the specified base color. This function is especially useful for mixins or loops where you’re generating multiple classes.

For example, to generate color swatches from our <code>$theme-colors</code> map:

```jsx
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

It can also be used for one-off contrast needs:

```jsx
.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
```

You can also specify a base color with our color map functions:

```jax

.custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}

```

### Escape SVG 
We use the <code>escape-svg</code> function to escape the <code>&lt;</code>, <code>&gt;</code> and <code>#</code> characters for SVG background images. When using the <code>escape-svg</code> function, data URIs must be quoted.

### Add and Subtract functions 
We use the <code>add</code> and <code>subtract</code> functions to wrap the CSS <code>calc</code> function. The primary purpose of these functions is to avoid errors when a “unitless” <code>0</code> value is passed into a <code>calc</code> expression. Expressions like <code>calc(10px - 0)</code> will return an error in all browsers, despite being mathematically correct.

Example where the calc is valid:
```jsx
$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}
```

Example where the calc is invalid:
```jsx
$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}
```

## Mixins 
Our <code>scss/mixins/</code> directory has a ton of mixins that power parts of Bootstrap and can also be used across your own project.

### Color schemes 
A shorthand mixin for the <code>prefers-color-scheme</code> media query is available with support for <code>light</code> and <code>dark</code> color schemes. See <a href="https://getbootstrap.com/docs/5.3/customize/color-modes/">the color modes documentation</a> for information on our color mode mixin.

```jsx
@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}
```
```jsx
.custom-element {
  @include color-scheme(light) {
    // Insert light mode styles here
  }

  @include color-scheme(dark) {
    // Insert dark mode styles here
  }
}
```



