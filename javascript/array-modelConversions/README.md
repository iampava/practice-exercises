# Array-to-Object conversion

A school nearby is in trouble and could use your programming skills. Some teachers store information about a student's  grades in an object, like so:

```javascript
var bobsGradesAsAnObject = {
  '02 Feb 2019': [ 10, 9 ],
  '05 Feb 2019': [ 7 ]
}
```

Others prefer to use an Array to store this same information:

```javascript
var bobsGradesAsAnArray = [
    { date: '02 Feb 2019', value: 10},
    { date: '02 Feb 2019', value: 9},
    { date: '05 Feb 2019', value: 7}
]
```

Since the teachers don't want to change their way of working, the school asks you to **write 2 functions** which convert from one format to another.

```javascript
console.log(toObjectFormat(bobsGradesAsAnArray));
/**
{
  '02 Feb 2019': [ 10, 9 ],
  '05 Feb 2019': [ 7 ]
}
*/

console.log(toArrayFormat(bobsGradesAsAnObject));
/**
[
  { date: '02 Feb 2019', value: 10},
  { date: '02 Feb 2019', value: 9},
  { date: '05 Feb 2019', value: 7}
]
*/

function toObjectFormat(arrayOfGrades) {
    /** ... */
}

function toArrayFormat(objectOfGrades) {
    /** ... */
}
```