TOC
---

- HoC
    - [`pureIgnoreFunctions()`](#pureIgnoreFunctions)


### `pureIgnoreFunctions()`

##### src: [:memo:](src/pureIgnoreFunctions.js) test: [:white_check_mark:](src/__tests__/pureIgnoreFunctions.test.js)

```javascript
pureIgnoreFunctions: HigherOrderComponent
```

Prevents the component from updating unless a prop has changed.
At that time ignore functions when check the updating to props.

Uses [`shallowEqualIgnoreFunctions()`](src/helpers/shallowEqualIgnoreFunction.js) to test for changes.

#### Motivation

Typically, create arrow function when pass to component a event handler.

```javascript
const Component = () => (
  <div
    onClick={() => doSomething()}
  />
)
```

In such a case, pass to component a new instance of function when rerender `Component`.
Then, `shouldComponentUpdate()` of `pure()` return the `true`.
But, expected `false`, because not changed logic `onClick`.

#### :warning: Caution

Expected rerender by case in case if you use High order function.
