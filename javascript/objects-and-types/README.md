# Objects & types

Write the **getStats(obj)** function which receives an Object as a parameter and **prints a message** regarding the types and count of it's properties.

```javascript
let hometown = {
    name: 'Iasi',
    county: 'Iasi',
    country: 'Romania',
    population: 3000000,
    age: 600,
    coordinates: {
        N: 47.1585,
        E: 27.6014
    },
    mayor: undefined,
    previousMayors: ['Bob', 'Lizz', 'Marry']
};

getStats(obj);
//  ➡ prints: "3 strings, 2 numbers, 1 object, 1 undefined, 1 Array

function getStats(obj) {
    /** Your code here */
}
```
