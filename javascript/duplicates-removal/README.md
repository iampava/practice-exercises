# Duplicates removal

You have an Array of `Object<name: string, country: string>`. The goal is to remove duplicates based on the country field (case insensitive).
    
Write 2 different functions which will act similarly, both receiving the array as their only param.

* first, a function called `filterArray` which returns a **new Array** without the duplicates.

* secondly, a `modifyArray` function which **modifies the array in place**. 

```javascript
let data = [{
    name: 'Bob',
    country: 'Romania'
}, {
    name: 'Alice',
    country: 'ROMANIA'
}, {
    name: 'Lizz',
    country: 'Netherlands'
}]

filterArray(data); 
/* [
    {name: 'Bob', country: 'Romania', 
    {name: 'Lizz', country: 'Netherlands'}
] */

console.log(data.length); // 3

modifyArray(data);
console.log(data.length); // 2

```
