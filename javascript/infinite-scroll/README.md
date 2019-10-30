# Infinite scroll

Add JavaScript to the code below so that new numbers are inserted when you're about to reach the end of the container.

<img src="https://raw.githubusercontent.com/iampava/practice-exercises/master/javascript/infinite-scroll/infinite-scroll__example.gif" style="border: 1px solid grey;">


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Infinite scroll</title>
        <style>
            :root {
                --black: #1b1b15;
                --green: #58af58;
                --yellow: #f7df1e;
            }

            body {
                color: var(--black);
                font-family: sans-serif;
            }

            h1 {
                text-align: center;
                margin-bottom: 2em;
            }

            .container {
                border: 0.5em dashed var(--black);
                height: 15em;
                overflow: auto;
                padding: 1em;
                font-size: 1.5em;
            }

            p {
                margin-bottom: 2em;
                padding: 0.25em;
                border: 0.25em solid var(--yellow);
            }
        </style>
    </head>
    <body>
        <h1>Scrolling to the bottom inserts new numbers:</h1>
        <div class="container">
            <p>01</p>
            <p>02</p>
            <p>03</p>
            <p>04</p>
            <p>05</p>
            <p>06</p>
            <p>07</p>
            <p>08</p>
            <p>09</p>
            <p>10</p>
        </div>
        <script>
            /** You code here */
        </script>
    </body>
</html>

```