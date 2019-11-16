# indexOf for Arrays

Write a binary function `indexOf` which accepts as parameters:

* **arr** - an Array of values
* **el** - any value

and returns the index where **el** is found in **arr**. If it isn't part of our list, return **-1**.

```javascript
var arr = [1, 2, "Bob", undefined];

console.log(indexOf(arr, 2)); // 1

console.log(indexOf(arr, undefined)); // 2

console.log(indexOf(arr, "Lizz")); // -1

function indexOf(arr, el) {
    /** Your code here */
}
```