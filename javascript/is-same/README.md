# isSame

Implement the **isSame(x, y)** function which takes 2 parameters and checks whether they are exactly the same value. So, write one or more **if-else** instructions that handle all the possible situations.

Make sure you handle the edge cases, for example:
* `0 === -0` but we want our function to return false (hint: you might want to use Infinity here)

* `NaN !== NaN` but we want our function to return true (hint: it's the only value not equal to itself)

Below you'll find some code which helps you check you got it right.

```javascript
console.log(isSame(2, '2')); // false
console.log(isSame(null, undefined)); // false
console.log(isSame(undefined, undefined)); // true
console.log(isSame(0, -0));  // false
console.log(isSame(NaN, NaN)); // true

function isSame(x,y) {
    /** your code here */
}
```
## isSame | ternary operator

**If-else** is just one of the ways of having control flows in our programs. Another one is the **ternary operator** and here's the [documentation from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). 

For example, these 2 functions below are doing the exact same thing. Notice how you can have the same **if-else** flows by using this operator. It's not so easy to read, but it's possible.

For example, these 2 pieces of code are doing the same thing:

```javascript
function between5And10() {
    if (x >= 5) {
        if (x <= 10) {
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
}
```

```javascript
function between5And10WithTernary(x) {
    return (x >= 5)
        ? ((x <= 10) ? true : false)
        : false
}
```
So, the exercise is to rewrite the **isSame(x,y)** function from the previous exercise without using any **if-else** conditions.

## isSame | switch statement

The last way of doing control flow that I want to talk about is the **switch** statement - here's the [documentation from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

For example, these 2 functions below are doing the same thing. Notice how you can have the same **if-else** flows by using this statement. It's a lot more code than we would write with just **if-else** so in "real-life" there's no point of using *switch* here, but I want you to do it for practice.

```javascript
function between5And10() {
    if (x >= 5) {
        if (x <= 10) {
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
}
```

```javascript
function between5And10WithSwitch(x) {
    switch (x >= 5) {
        case true: {
            switch (x <= 10) {
                case true:
                    return true;
                case false:
                    return false;
            }
        }
        case false:
            return false;
        default:
            break;

    }
}
```

So, the exercise is to rewrite the **isSame(x,y)** function from the previous exercise using only **switch statements**.