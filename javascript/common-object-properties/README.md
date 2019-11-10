# Common object properties

Write a `getCommon(obj1, obj2)` function which receives **two objects** as parameters and **returns a new object** whose properties:

1. exist in both objects sent as params
2. have the same value in both of them


```javascript
let myBike = {
    brand: 'Pegas',
    year: 2019,
    color: 'blue',
    boughtFrom: undefined
}

let bobsBike = {
    brand: 'Pegas',
    isElectric: true,
    batteries: '24W',
    color: 'blue',
    year: 2018
}

let combinedObject = getCommon(myBike, bobsBike);
console.log(combinedObject);

/*
{
    brand: 'Pegas',
    color: 'blue'
}

"myBike" and "bobsBike" have 3 common properties: "brand", "year" and "color", but just 2 of them also have the same value.
*/


function getCommon(obj1, obj2) {
    /** Your code here */
}
```