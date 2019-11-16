# filterByType for Arrays

Write a binary function `filterByType` which accepts as parameters:

* **arr** - an Array of values
* **type** - a string representing a JavaScript type

and returns **a new array** with only the values in **arr** that match the type.

```javascript
var schoolGrades = [ 10, 9, "9", 7.5];

console.log(filterByType(schoolGrades, 'number')); // [10, 9, 7.5]

console.log(filterByType(schoolGrades, 'string')); // ["9"]

console.log(filterByType(schoolGrades, 'function')); // []


function indexOf(arr, type) {
    /** Your code here */
}
```

PS: you might need to use this [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to determine the type.