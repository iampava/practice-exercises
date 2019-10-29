# Sliding menu

Add CSS to the code below so that clicking the button toggles the menu.

💡 Tip: clicking the button toggles the **is--open** class on the `<aside>` element so you might want to hook into that for the transition.

<img src="https://raw.githubusercontent.com/iampava/practice-exercises/master/css/sliding-menu/sliding-menu__example.gif" style="border: 1px solid grey;">

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sliding menu</title>
    </head>
    <body>
        <aside>
            <h3>Menu</h3>
            <ul>
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
            </ul>
        </aside>
        <button>Toggle menu</button>
        <script>
            let menu = document.querySelector('aside');
            document.querySelector('button').addEventListener('click', function onClick() {
                menu.classList.toggle('is--open');
            });
        </script>
    </body>
</html>

```