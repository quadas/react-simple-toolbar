# react-simple-toolbar

## Why ?

Enables you to easily layout items in a toolbar with custom align options.

## Usage

```jsx
import 'react-simple-toolbar/index.css'
import Toolbar, { Region } from 'react-simple-toolbar'

<Toolbar>
  <Region>
    <button>start button</button>
  </Region>

  <Region>
    <button>end button</button>
  </Region>
</Toolbar>
```

In most of the cases, you will have up to 3 regions in the toolbar. A `Region` can specify an `align` property. If it does not, it will default to the following:

 * if you **don't have a region**, a default region will be created, with align `"start"`
 * if you only have **one region**, it will have align `"start"` by default
 * if you have **two regions**, they will have align `"start"` and `"end"` respectively.
 * if you have **three regions**, they will have align `"start"`, `"center"` and `"end"` respectively.

You can customize the **`align`** prop of each region explicitly.

Regions are basically flex items, with a **default flex of 1**. This can also be customized.

```jsx
import 'react-simple-toolbar/index.css'
import Toolbar, { Region } from 'react-simple-toolbar'

<Toolbar>
  <Region flex={1}>
    <button>start button</button>
  </Region>

  <Region align="center" flex={2}>
    <button>centered button</button>
  </Region>

  <Region flex={3}>
    <button>end button</button>
  </Region>
</Toolbar>
```

When you specify no region, one will be created for you out-of-the-box.

```jsx

<Toolbar>
  <button>A button</button>
</Toolbar>
// becomes
<Toolbar>
  <Region><button>A button</button></Region>
</Toolbar>
```

## Props

 * `theme: String` - defaults to `"default"`
 * `padding: Number` - the padding to apply to the toolbar contents.

## Region Props

 * `align: String` - one of `"start", "center", "end"`
 * `flex: Number` - a numeric value for region flex

## Other

By default, the `Toolbar` has **`overflow: hidden`** in css. If you don't want that, make sure you specify a `className` or a `style` object with a different value for `overflow`. This is especially useful when rendering combo-boxes or other complex components that at times need to expand beyond the toolbar bounding rect.

Also note that `react-simple-toolbar` and all it's descendents are rendered with **`box-sizing: border-box`**. This is generally the most natural box-sizing, but in some cases you might want some of the nodes in the toolbar to have a different value. If that's the case, you should explicitly specify a different `box-sizing` for your components.

## License

### Commercial