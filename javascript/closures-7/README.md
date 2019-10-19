# Closures #7

Write a generic `genericG` function which receives 1 param:

-   **fn** - a unary function

and returns a **unary function** which keeps calling `fn` on it's arguments until called with no arguments.

```javascript
genericG(add)(3)(10)(15)(); // 28

genericG(mul)(1)(1)(5)(5)(); // 25

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}
```
