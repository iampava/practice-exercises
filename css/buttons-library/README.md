# CSS Button library

Create a button library to reuse throughout your projects. It should offer support for **full**, **outlined** and **loading** buttons, both in `primary`, `success` and `danger` colors.

You can think of your own design or if you find yourself lacking inspiration here's the library I'm using in [DevDrive](https://devdrive.io). Implement it **without modifying the HTML**.

<video height="300" style="border: 1px solid grey;" src="https://raw.githubusercontent.com/iampava/practice-exercises/master/css/buttons-library/buttons-library.mp4" muted autoplay loop></video>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Button library</title>
    <style>
        .btn { margin-right: 1em; }
    </style>
</head>
<body>
    <h3> Filled </h3>
    <button class="btn btn--blue"> Primary </button>  
    <button class="btn btn--success"> Success </button>  
    <button class="btn btn--danger"> Danger </button>

    <h3> Outlined </h3>
    <button class="btn btn--blue btn--outline"> Primary </button>  
    <button class="btn btn--success btn--outline"> Success </button>  
    <button class="btn btn--danger btn--outline"> Danger </button>

    <h3> Filled & loading </h3>
    <button class="btn btn--blue btn--loading"> Primary </button>  
    <button class="btn btn--success btn--loading"> Success </button>  
    <button class="btn btn--danger btn--loading"> Danger </button>

    <h3> Outlined & loading </h3>
    <button class="btn btn--blue btn--outline btn--loading"> Primary </button>  
    <button class="btn btn--success btn--outline btn--loading"> Success </button>  
    <button class="btn btn--danger btn--outline btn--loading"> Danger </button>
</body>
</html>
```