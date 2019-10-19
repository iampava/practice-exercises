# Closures #1

Write a unary function `identifyF` which accepts 1 param and returns a `function` which, when called, returns the param passed to `identifyF`.

```javascript
let tenF = identityF(10);
tenF(); // 10

let helloF = identityF('hello');
helloF(); // 'hello'
```