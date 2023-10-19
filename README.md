### typescript-react-tailwind-storybook-component-library-example

## Objectives

* Bundle a React Component library using Typescript
* Use TailwindCSS for Styling, but do not require it in the parent application
* Use Storybook to document the library
	* Host the Storybook on Github Pages
    * Deploys Storybook to Github Pages via a Github Action

## Example usage

```
npm install --save hub-component-library
```

#### Setup with Tailwind

```
// tailwind.config.js

module.exports = {
    content: [
        "./node_modules/hub-component-library/**/*.js"
    ]
};
```

#### Setup without Tailwind

```
import 'hub-component-library/dist/library.css';
import { Navbar } from 'hub-component-library';
```

#### Storybook

```
npm run storybook
```

## Publish

Builds during an NPM release with the `prepublish` script.
