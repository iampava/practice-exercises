# Simple CSS positioning

Add CSS to the code below so that clicking the radio buttons behaves like in the demo.

<img src="https://raw.githubusercontent.com/iampava/practice-exercises/master/css/simple-positioning/simple-positioning__example.gif" style="border: 1px solid grey;">

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Positions</title>
</head>
<body>
    <div id="scene">
        <form >
            <div class="form__input">
                <input type="radio" name="horizontal" id="leftRadio" value="left">
                <label for="leftRadio">Left</label>
            </div>
            <div class="form__input">
                <input checked type="radio" name="horizontal" id="centerRadio" value="center">
                <label for="centerRadio">Center</label>
            </div>
            <div class="form__input">
                <input type="radio" name="horizontal" id="rightRadio" value="right">
                <label for="rightRadio">Right</label>
            </div>
        </form>
        <div id="rectangle" class="is--center">
            <div class="circle"></div>
        </div>
    </div>
    <script>
        // This javascript changes the class on the square whenever you select a different radio
        // It's fine if you don't understand it. It's not in the scope of this exercise
        
        let form = document.querySelector('form');
        let rectangle = document.getElementById('rectangle')

        form.addEventListener('input', (e) => {
            rectangle.className = `is--${e.target.value}`;
        })
    </script>
</body>
</html>
```