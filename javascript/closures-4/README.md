# Closures #5

Write a unary function `genericF` which accepts 1 param:

-   **fn** - a binary function

and returns a function which behaves similarly to `addF` function from [this exercise](https://github.com/iampava/practice-exercises/tree/master/javascript/closures-2).

```javascript
let anotherAddF = genericF(add);
anotherAddF(5)(10); // 15

let anotherMulF = genericF(mul);
anotherMulF(5)(10); // 50

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}
```
