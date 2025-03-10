---
sidebar_position: 4
---
# Browsers and devices

Learn about the browsers and devices, from modern to old, that are supported by Bootstrap, including known quirks and bugs for each.

## Supported browsers 
Bootstrap supports the **latest, stable releases** of all major browsers and platforms.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

```jsx
# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```

We use <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> to handle intended browser support via CSS prefixes, which uses <a href="https://github.com/browserslist/browserslist">Browserslist</a> to manage these browser versions. Consult their documentation for how to integrate these tools into your projects.

### Mobile devices 
Generally speaking, Bootstrap supports the latest versions of each major platform’s default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile’s Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

|            | **Chrome**  | **Firefox** | **Safari** | **Android Browser & WebView** |
|------------|------------|------------|------------|--------------------------------|
| **Android** | Supported  | Supported  | —          | v6.0+                          |
| **iOS**    | Supported  | Supported  | Supported  | —                              |

### Desktop browsers

Similarly, the latest versions of most desktop browsers are supported.

|            | **Chrome**  | **Firefox** | **Microsoft Edge** | **Opera**  | **Safari**  |
|------------|------------|------------|------------------|------------|------------|
| **Mac**    | Supported  | Supported  | Supported       | Supported  | Supported  |
| **Windows**| Supported  | Supported  | Supported       | Supported  | —          |

For Firefox, in addition to the latest normal stable release, we also support the latest [Extended Support Release (ESR)](#) version of Firefox.

Unofficially, Bootstrap should look and behave well enough in Chromium and Chrome for Linux, and Firefox for Linux, though they are not officially supported.


## Internet Explorer 
Internet Explorer is not supported. **If you require Internet Explorer support, please use Bootstrap v4.**

## Modals and dropdowns on mobile 

### Overflow and scrolling 
upport for <code>overflow: hidden;</code> on the <code>&lt;body&gt;</code> element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices’ browsers, the <code>&lt;body&gt;</code> content will begin to scroll. See <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=175502">Chrome bug #175502</a> (fixed in Chrome v40) and <a href="https://bugs.webkit.org/show_bug.cgi?id=153852">WebKit bug #153852</a>.

### iOS text fields and scrolling 
As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the boundary of a textual <code>&lt;input&gt;</code> or a <code>&lt;textarea&gt;</code>, the <code>&lt;body&gt;</code> content underneath the modal will be scrolled instead of the modal itself. See <a href="https://bugs.webkit.org/show_bug.cgi?id=153856">WebKit bug #153856</a>.

### Navbar Dropdowns 
The <code>.dropdown-backdrop</code> element isn’t used on iOS in the nav because of the complexity of z-indexing. Thus, to close dropdowns in navbars, you must directly click the dropdown element (or <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile">any other element which will fire a click event in iOS</a>).

## Browser zooming 
Page zooming inevitably presents rendering artifacts in some components, both in Bootstrap and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.

## Validators 
In order to provide the best possible experience to old and buggy browsers, Bootstrap uses <a href="http://browserhacks.com/">CSS browser hacks</a> in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren’t yet fully standardized, but these are used purely for progressive enhancement.

These validation warnings don’t matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don’t interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.

Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">a certain Firefox bug</a>.