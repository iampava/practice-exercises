# Closures #5

Write a function `reverseF` which accepts 1 param:

-   **fn** - binary function

and returns a function which calls `fn` but with the arguments reversed.

```javascript
let bus = reverse(sub);
bus(10, 5); // 5 - 10 = -5

function sub(x, y) {
    return x - y;
}
```
