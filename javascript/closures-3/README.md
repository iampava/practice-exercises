# Closures #3

Write a binary function `curry` which receives 2 params:

-   **fn** - a binary function
-   **x** - a number

and returns a **unary function** which executes `fn` on `x` and it's param.

```javascript
let sub10 = curry(sub, 10);
sub10(11); // -1

let mul5 = curry(mul, 5);
mul5(3); // 15

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}
```
