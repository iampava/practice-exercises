# Deep find

Write a `deepFind(path)` function which deep searches for a property inside an Object. If the property doesn't exist it should return undefined.

```javascript
let propertyPath = 'job.city.zip';
let human = {
    name: 'Bob',
    job: {
        title: 'JS Developer',
        city: {
            name: 'Utrecht',
            zip: 333000
        }
    }
}

deepFind(propertyPath); // 333000
```