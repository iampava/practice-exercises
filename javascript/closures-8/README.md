# Closures #8

Write a `limit` function with 2 params:

-   **fn** - a function
-   **max** - number

and returns another function which behaves just like `fn` but can be called just `max` number of times. After that it will return `undefined`.

```javascript
let limitAdd = limit(add, 2);

limitAdd(3, 5); // 8
limitAdd(11, 23); //34
limitAdd(5, 10); // undefined

function add(x, y) {
    return x + y;
}
```
