TOC
---

- HoC
    - [`pureIgnoreFunctions()`](#pureIgnoreFunctions)


### `pureIgnoreFunctions()`

```javascript
pureIgnoreFunctions: HigherOrderComponent
```

Prevents the component from updating unless a prop has changed.
At that time ignore functions when check the updating to props.

Uses [`shallowEqualIgnoreFunctions()`](src/helpers/shallowEqualIgnoreFunction.js) to test for changes.
