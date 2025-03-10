---
sidebar_position: 3
---
# Contents


Discover what’s included in Bootstrap, including our compiled and source code flavors.


## Compiled Bootstrap 
Once downloaded, unzip the compressed folder and you’ll see something like this:
 ```jsx
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map

 ```

This is the most basic form of Bootstrap: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (bootstrap.*), as well as compiled and minified CSS and JS (bootstrap.min.*). Source maps (bootstrap.*.map) are available for use with certain browsers’ developer tools. Bundled JS files (bootstrap.bundle.js and minified bootstrap.bundle.min.js) include Popper.

# CSS files

Bootstrap includes a handful of options for including some or all of our compiled CSS.

| **CSS files**                      | **Layout**              | **Content** | **Components** | **Utilities**         |
|-------------------------------------|-------------------------|------------|---------------|-----------------------|
| bootstrap.css                       | Included                | Included   | Included      | Included              |
| bootstrap.min.css                    | Included                | Included   | Included      | Included              |
| bootstrap.rtl.css                     | Included                | Included   | Included      | Included              |
| bootstrap.rtl.min.css                 | Included                | Included   | Included      | Included              |
| bootstrap-grid.css                    | [Only grid system](#)   | —          | —             | [Only flex utilities](#) |
| bootstrap-grid.rtl.css                | [Only grid system](#)   | —          | —             | [Only flex utilities](#) |
| bootstrap-grid.min.css                | [Only grid system](#)   | —          | —             | [Only flex utilities](#) |
| bootstrap-grid.rtl.min.css            | [Only grid system](#)   | —          | —             | [Only flex utilities](#) |
| bootstrap-utilities.css               | —                       | —          | —             | Included              |
| bootstrap-utilities.rtl.css           | —                       | —          | —             | Included              |
| bootstrap-utilities.min.css           | —                       | —          | —             | Included              |
| bootstrap-utilities.rtl.min.css       | —                       | —          | —             | Included              |
| bootstrap-reboot.css                  | —                       | [Only Reboot](#) | —             | —                     |
| bootstrap-reboot.rtl.css              | —                       | [Only Reboot](#) | —             | —                     |
| bootstrap-reboot.min.css              | —                       | [Only Reboot](#) | —             | —                     |
| bootstrap-reboot.rtl.min.css          | —                       | [Only Reboot](#) | —             | —                     |



# JS files 

Similarly, we have options for including some or all of our compiled JavaScript.

| **JS Files**                  | **Popper**  |
|--------------------------------|------------|
| bootstrap.bundle.js            | [Included](#) |
| bootstrap.bundle.min.js        | [Included](#) |
| bootstrap.js                   | —          |
| bootstrap.min.js               | —          |



# Bootstrap source code 

The Bootstrap source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

 ```jsx
    bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── 5.3/
│              └── examples/
├── js/
└── scss/
 ```

 The scss/ and js/ are the source code for our CSS and JavaScript. The dist/ folder includes everything listed in the compiled download section above. The site/content/docs/ folder includes the source code for our hosted documentation, including our live examples of Bootstrap usage.

Beyond that, any other included file provides support for packages, license information, and development.

