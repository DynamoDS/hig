# Tile

The Tile component renders a themable container that display information related to a single subject or destination

## Getting started

```
yarn add @hig/tile @hig/theme-context @hig/theme-data
```

## Import the component

```
import Tile from '@hig/tile';
```

## Basic usage

```jsx
<Tile />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Surface also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Tile from '@hig/tile';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    surface: {
      ...styles.surface,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Tile stylesheet={customStylesheet} />
  );
}
```