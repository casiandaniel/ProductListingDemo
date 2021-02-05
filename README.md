# demo/product-listing-page

DEMO package that will render a product listing page with mockdata using Fake Store API.
https://fakestoreapi.com/docs

## Get Started

### Prerequisites (recommended): install (or check current version) Yarn
https://yarnpkg.com/

First run `yarn install && yarn build`.

For testing purpose, please use Storybook: `yarn run storybook`.

---

## Available Scripts

#### In the project directory, you can run:

### `yarn run watch`

Runs the build in the watch mode.

### `yarn run lint`

Runs [ESLint](https://eslint.org/).

### `yarn run format`

Applies consistent code style formatting using [Prettier](https://prettier.io/).

### `yarn run format:check`

Checks if all matched files are formatted using [Prettier](https://prettier.io/) (used by CI).

### `yarn run test`

Runs [Jest](https://jestjs.io/) tests.

### `yarn run test:watch`

Launches [Jest](https://jestjs.io/) in the interactive watch mode.

### `yarn run build`

Builds the package for production in the `dist` folder.

### `yarn run storybook`

Runs the storybook.

### Props accepted:

```
ProductListing.propTypes = {
    title: string,
    theme: oneOf(['dark', 'nice']),
};
```

### Example of usage:

```
 see StoryBook for more details
```

### Purpose 

This package has been created only for DEMO purpose and can be used as a first step in your learning process.
Includes a bunch of interesting dependencies in order to demonstrate integration, usage, capabilities and use cases. 

#### Getting started with React: https://reactjs.org/docs/getting-started.html

#### Get familiar with:

- React Hooks: https://reactjs.org/docs/hooks-intro.html
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- ESLint: https://eslint.org/docs/user-guide/configuring/
- Prettier: https://prettier.io/docs/en/install.html
- Storybook: https://storybook.js.org/
- Babel: https://babeljs.io/docs/en/
- Material-UI: https://material-ui.com/
- UI Animations with framer-motion: https://www.framer.com/motion/
- CSS Animations
