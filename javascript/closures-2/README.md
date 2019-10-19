# Closures #2

Write a unary function `addF` which accepts 1 param:

* **x** - number

and returns another **unary function** with which, when called, returns the sum between it's param and `x`.

```javascript
let add13 = addF(13);

add13(10); // 23
add13(-5); // 8
```