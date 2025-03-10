---
sidebar_position: 1
---
# Overview

## Customize
Learn how to theme, customize, and extend Bootstrap with Sass, a boatload of global options, an expansive color system, and more.

### Sass
Utilize our source Sass files to take advantage of variables, maps, mixins, and functions.

### Options
Customize Bootstrap with built-in variables to easily toggle global CSS preferences.

### Color
Learn about and customize the color systems that support the entire toolkit.

### Color modes
Explore our default light mode and the new dark mode, or create custom color modes yourself.

### Components
Learn how we build nearly all our components responsively and with base and modifier classes.

### CSS variables
Use Bootstrap's CSS custom properties for fast and forward-looking design and development.

### Optimize
Keep your projects lean, responsive, and maintainable so you can deliver the best experience.


## Overview 
There are multiple ways to customize Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of Bootstrap you’re using, browser support, and more.

Our two preferred methods are:
<ol>
- Using Bootstrap <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers">via package manager</a> so you can use and extend our source files.
- Using Bootstrap’s compiled distribution files or <a href="https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr">jsDelivr</a> so you can add onto or override Bootstrap’s styles.
</ol>

While we cannot go into details here on how to use every package manager, we can give some guidance on <a href="https://getbootstrap.com/docs/5.3/customize/sass/">using Bootstrap with your own Sass compiler</a>.

For those who want to use the distribution files, review the <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">getting started page</a> for how to include those files and an example HTML page. From there, consult the docs for the layout, components, and behaviors you’d like to use.

As you familiarize yourself with Bootstrap, continue exploring this section for more details on how to utilize our global options, making use of and changing our color system, how we build our components, how to use our growing list of CSS custom properties, and how to optimize your code when building with Bootstrap.


## CSPs and embedded SVGs 
Several Bootstrap components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. **For organizations with more strict <abbr title="Content Security Policy">CSP</abbr> configurations**, we’ve documented all instances of our embedded SVGs (all of which are applied via <code>background-image</code>) so you can more thoroughly review your options.

- <a href="https://getbootstrap.com/docs/5.3/components/accordion/">Accordion</a>
- <a href="https://getbootstrap.com/docs/5.3/components/carousel/#with-controls">Carousel controls</a>
- <a href="https://getbootstrap.com/docs/5.3/components/close-button/">Close button</a> (used in alerts and modals)
- <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/">Form checkboxes and radio buttons</a>
- <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches">Form switches</a>
- <a href="https://getbootstrap.com/docs/5.3/forms/validation/#server-side">Form validation icons</a>
- <a href="https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors">Navbar toggle buttons</a>
- <a href="https://getbootstrap.com/docs/5.3/forms/select/">Select menus</a>


Based on <a href="https://github.com/twbs/bootstrap/issues/25394">community conversation</a>, some options for addressing this in your own codebase include <a href="/docs/5.3/getting-started/webpack/#extracting-svg-files">replacing the URLs with locally hosted assets</a>, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on the best path forward, if necessary.