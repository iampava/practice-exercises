# Arrays & types

Write the **getStats(arr)** function which receives an Array as a parameter and prints a message regarding the types of elements found inside it.

💡 Tip: there are multiple ways to iterate over an array, the simplest in my opinion being with a `for...of` loop - here's the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).


```javascript
var arr = [1, 2, 'hello', NaN, {
    city: 'IasI',
    zip: null
}, [11, 12], undefined, undefined, undefined]

getStats(arr); // 2 numbers, 1 string, 1 NaN, 1 Object, 1 Array, 3 undefined
```