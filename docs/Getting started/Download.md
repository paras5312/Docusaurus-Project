---
sidebar_position: 2
---
# Download

Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.



## Compiled CSS and JS 
Download ready-to-use compiled code for **Bootstrap v5.3.3** to easily drop into your project, which includes:


- Compiled and minified CSS bundles (see <a href="/docs/5.3/getting-started/contents/#css-files">CSS files comparison</a>)
- Compiled and minified JavaScript plugins (see <a href="/docs/5.3/getting-started/contents/#js-files">JS files comparison</a>)

This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.

## Source files

Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Sass compiler](#) for compiling Sass source files into CSS files
- [Autoprefixer](#) for CSS vendor prefixing

Should you require our full set of [build tools](#), they are included for developing Bootstrap and its docs, but they're likely unsuitable for your own purposes.

[Download source](#)

## Examples

If you want to download and examine our [examples](#), you can grab the already built examples:

[Download Examples](#)







Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this [Bootstrap CodePen demo](https://codepen.io/team/bootstrap/pen/qBamdLj) .

**1. Create a new  <code>index.html</code>  file in your project root.** Include the <code>&lt;meta name="viewport"&gt;</code> tag as well for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">proper responsive behavior</a> in mobile devices.


```jsx 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```


**2. Include Bootstrap’s CSS and JS.** Place the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> for our CSS, and the <code>&lt;script&gt;</code> tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing <code>&lt;/body&gt;</code>. Learn more about our <a href="#cdn-links">CDN links</a>.


```jsx 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```


You can also include <a href="https://popper.js.org/">Popper</a> and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.

```jsx 
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
```

**3. Hello, world!** Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own layout, adding dozens of components, and utilizing our official examples.


## CDN links

As reference, here are our primary CDN links.

| **Description** | **URL** |
|---------------|---------|
| **CSS** | [https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css) |
| **JS**  | [https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js) |

You can also use the CDN to fetch any of our [additional builds listed in the Contents page](https://getbootstrap.com/docs/5.3/getting-started/contents/).


## Next steps

- Read a bit more about some [important global environment settings](https://getbootstrap.com/docs/5.3/getting-started/introduction/#important-globals) that Bootstrap utilizes.
- Read about what’s included in Bootstrap in our [contents section](https://getbootstrap.com/docs/5.3/getting-started/contents/) and the list of [components that require JavaScript](https://getbootstrap.com/docs/5.3/getting-started/introduction/#js-components) below.
- Need a little more power? Consider building with Bootstrap by [including the source files via package manager](https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers).
- Looking to use Bootstrap as a module with `<script type="module">`? Please refer to our [using Bootstrap as a module](https://getbootstrap.com/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module) section.

## JS components

Curious which components explicitly require our JavaScript and Popper? If you're at all unsure about the general page structure, keep reading for an example page template.

2- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning also requires Popper
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors
- Navs with the Tab plugin for toggling content panes
- Offcanvas for displaying, positioning, and scroll behavior
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning also requires Popper

 
# Important globals

Bootstrap employs a handful of important global styles and settings, all of which are almost exclusively geared towards the normalization of cross-browser styling. Let’s dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky and incomplete styling.

```jsx
<!doctype html>
<html lang="en">
```

### Viewport meta

Bootstrap is developed <em>mobile first</em>, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <code>&lt;head&gt;</code>.

```jsx
<meta name="viewport" content="width=device-width, initial-scale=1">
```
You can see an example of this in action in the <a href="#quick-start">quick start</a>.


### Box-sizing 

For more straightforward sizing in CSS, we switch the global <code>box-sizing</code> value from <code>content-box</code> to <code>border-box</code>. This ensures <code>padding</code> does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```jsx
.selector-for-some-widget {
  box-sizing: content-box;
}
```
With the above snippet, nested elements—including generated content via <code>::before</code> and <code>::after</code>—will all inherit the specified <code>box-sizing</code> for that <code>.selector-for-some-widget</code>.

Learn more about <a href="https://css-tricks.com/box-sizing/">box model and sizing at CSS Tricks</a>.


### Reboot 

<p>For improved cross-browser rendering, we use <a href="/docs/5.3/content/reboot/">Reboot</a> to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.</p>


### Community 
Stay up-to-date on the development of Bootstrap and reach out to the community with these helpful resources.


- Read and subscribe to <a href="https://blog.getbootstrap.com/">The Official Bootstrap Blog</a>.
- Ask questions and explore <a href="https://github.com/twbs/bootstrap/discussions">our GitHub Discussions</a>.
- Discuss, ask questions, and more on <a href="https://discord.gg/bZUvakRU3M">the community Discord</a> or <a href="https://reddit.com/r/bootstrap">Bootstrap subreddit</a>.
- Chat with fellow Bootstrappers in IRC. On the <code>irc.libera.chat</code> server, in the <code>#bootstrap</code> channel.
- Implementation help may be found at Stack Overflow (tagged <a href="https://stackoverflow.com/questions/tagged/bootstrap-5"><code>bootstrap-5</code></a>).
- Developers should use the keyword <code>bootstrap</code> on packages that modify or add to the functionality of Bootstrap when distributing through <a href="https://www.npmjs.com/search?q=keywords:bootstrap">npm</a> or similar delivery mechanisms for maximum discoverability.
