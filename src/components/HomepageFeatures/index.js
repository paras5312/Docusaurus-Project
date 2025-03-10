import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Install via package manager',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also use any demo from our Examples repo to quickly jumpstart Bootstrap projects.
      </>
    ),
    code: (
      <pre>
        <code>
          {`npm install bootstrap@5.3.3

npm install bootstrap@5.3.3`}
        </code>
      </pre>
    ),
  },
  {
    title: 'Include via CDN',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        When you only need to include Bootstrap’s compiled CSS or JS, you can use <a href="https://www.jsdelivr.com/package/npm/bootstrap">jsDelivr</a>. See it in action with our simple <a href="/docs/5.3/getting-started/introduction/#quick-start">quick start</a>, or <a href="/docs/5.3/examples/">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href="/docs/5.3/getting-started/introduction/#separate">separately</a>.
      </>
    ),
    code: (
      <pre>
        <code>
          {`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`}
        </code>
      </pre>
    ),
  },
];

const Guidesec = [
  {
    title: 'Webpack',
    Svg: require('@site/static/img/webpack.svg').default,
  },
  {
    title: 'Parcel',
    Svg: require('@site/static/img/parcel.png').default,
  },
  {
    title: 'Vite',
    Svg: require('@site/static/img/vite.svg').default,
  },
];

const Customizesass = [
  {
    title: 'Include all of Bootstrap’s Sass',
    description: (
      <>
        Import one stylesheet and you're off to the races with every feature of our CSS.
      </>
    ),
    code: (
      <pre>
        <code>
          {`// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";`}
        </code>
      </pre>
    ),
  },
  {
    title: 'Include what you need',
    description: (
      <>
        The easiest way to customize Bootstrap—include only the CSS you need.
      </>
    ),
    code: (
      <pre>
        <code>
          {`// Functions first
@import "../node_modules/bootstrap/scss/functions";

// Variable overrides second
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Required Bootstrap imports
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional components
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";
@import "../node_modules/bootstrap/scss/utilities/api";`}
        </code>
      </pre>
    ),
  },
];

const CssVariable = [
  {
    title: 'Using CSS variables',
    description: (
      <>
        Use any of our <a href="/docs/5.3/customize/css-variables/#root-variables">global <code>:root</code> variables</a> to write new styles. CSS variables use the <code>var(--bs-variableName)</code> syntax and can be inherited by children elements.
      </>
    ),
    code: (
      <pre>
        <code>
          {`.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}`}
        </code>
      </pre>
    ),
  },
  {
    title: 'Customizing via CSS variables',
    description: (
      <>
        Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.
      </>
    ),
    code: (
      <pre>
        <code>
          {`body {
  --bs-body-font-family: var(--bs-font-monospace);
  --bs-body-line-height: 1.4;
  --bs-body-bg: var(--bs-gray-100);
}

.table {
  --bs-table-color: var(--bs-gray-600);
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-border-color: transparent;
}`}
        </code>
      </pre>
    ),
  },
];

const BootstrapIcons = [
  {
    title: 'Personalize it with Bootstrap Icons',
    description: (
      <>
        <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/bootstrap-icons.png').default,
  },
];

const BootstrapThemes = [
  {
    Svg: require('@site/static/img/bootstrap-themes.png').default,
  },
  {
    title: 'Make it yours with official Bootstrap Themes',
    description: (
      <>
        Take Bootstrap to the next level with premium themes from the <a href="https://themes.getbootstrap.com/">official Bootstrap Themes marketplace</a>. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.
      </>
    ),
  },
  
];



function Feature({ Svg, title, description, code }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <p>{code}</p>
      </div>
    </div>
  );
}

function Guides({ Svg, title }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        {typeof Svg === 'string' ? (
          <img src={Svg} className={styles.featureSvg} alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

function Customizesasss({ title, description, code }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <p>{code}</p>
      </div>
    </div>
  );
}

function CssVariables({ title, description, code }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <p>{code}</p>
      </div>
    </div>
  );
}

function BootstrapIconss({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <img src={Svg} />
      </div>
    </div>
  );
}
 
function BootstrapThemess({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <img src={Svg} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={clsx(styles.featuress, 'com-section')}>
        <div className="container">
          <div className="row">
            <div className="col col--12 text--center get-start-heading">
              <Heading as="h2">Get started any way you want</Heading>
            </div>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.guides, 'com-section guides-sec')} style={{ backgroundColor: '#eee' }}>
        <div className="container">
          <div className="row">
            <div className="col col--12 text--center get-start-heading">
              <Heading as="h2">Read our getting started guides</Heading>
              <p>Get a jump on including Bootstrap's source files in a new project with our official guides.</p>
            </div>
          </div>
          <div className="row">
            {Guidesec.map((props, idx) => (
              <Guides key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles, 'com-section Customizesasss')}>
        <div className="container">
          <div className="row">
            <div className="col col--12 text--center get-start-heading">
              <Heading as="h2">Customize everything with Sass</Heading>
              <p>Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.</p>
            </div>
          </div>
          <div className="row">
            {Customizesass.map((props, idx) => (
              <Customizesasss key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.guides, 'com-section Customizesasss')} style={{ backgroundColor: '#eee' }}>
        <div className="container">
          <div className="row">
            <div className="col col--12 text--center get-start-heading">
              <Heading as="h2">Build and extend in real-time with CSS variables</Heading>
              <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a <code>:root</code> level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>
            </div>
          </div>
          <div className="row">
            {CssVariable.map((props, idx) => (
              <CssVariables key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.guides, 'com-section')}>
        <div className="container">
          <div className="row">
            {BootstrapIcons.map((props, idx) => (
              <BootstrapIconss key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>       
      
      <section className={clsx(styles.guides, 'com-section')}>
        <div className="container">
          <div className="row">
            {BootstrapThemes.map((props, idx) => (
              <BootstrapThemess key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>  


    </>
  );
}
