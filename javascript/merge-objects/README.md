# Merge objects

Write a `merge(obj1, obj2)` function which receives **two objects** as parameters and adds to the first object all new properties from second one.

```javascript
let myBike = {
    brand: 'Pegas',
    year: 2019,
    boughtFrom: undefined
}

let bobsBike = {
    brand: 'Pegas',
    isElectric: true,
    batteries: '24W',
    year: 2018
}

merge(myBike, bobsBike);
console.log(myBike);
/*
{
    brand: 'Pegas',
    year: 2019,
    boughtFrom: undefined,
    isElectric: true,
    batteries: '24W',
}
*/


function merge(obj1, obj2) {
    /** Your code here */
}
```