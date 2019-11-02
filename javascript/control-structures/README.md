# Control structures

Let's take everything we've learned so far and use it for this exercise. There are no restrictions, so use whichever control-stucture seems best fitted for the job. You can even combine them, so don't feel restricted to just using one.

Okay, so the exercise is to write a **signIn** function which receives 3 parameters:

* **username** 
* **password** 
* **role**: a string with one of these values:  'student', 'teacher' or 'admin'

and prints to the console a welcome message.

1. If the **username** or **password** are not strings ➡ print a type error message
2. If the **username** or **password** are empty strings ➡ print an info message
3. If the role is missing, assume the role is **student**
4. Based on the role print a different message

See the example below for the appropriate messages. Also, to print things at the console use the `console.log` function.

```javascript
signIn(null, '1234'); // TypeError: username is not a string
signIn('Bob', 1234); // TypeError password is not a string

signIn('', '1234', 'unknown'); // Please fill in the username
signIn('Bob', ''); // Please fill in the password


signIn('Bob', '1234'); // Hi Bob! Welcome to the app. Let's get studying
signIn('Bob', '1234', 'student'); // Hi Bob! Welcome to the app. Let's get studying

signIn('Lizz', '1234', 'teacher'); // Hi Lizz! Welcome to the app. Let's get teaching

signIn('Frank', '1234', 'admin'); // Hi Frank! Welcome to the app. Let's get managing

function signIn(username, password, role) {
    /** Your code her */
}
```