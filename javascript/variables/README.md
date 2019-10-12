# Variables

Variable/function declarations in JavaScript have quite a few perks. Modify just one line from the second function so that it outputs the same result as the first one. **Keep** the lines initial order.

```javascript
function first() {
    function bar() {
        return 8;
    }
    return bar();
}

function second() {
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
```