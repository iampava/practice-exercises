# Fetch | Chuck Norris jokes

Use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with the code below to consume this [Chuck Norris service](https://api.chucknorris.io/). 

You should 
* fetch and insert the categories into the page
* fetch a random joke from the selected category when submitting the form

<img src="https://raw.githubusercontent.com/iampava/practice-exercises/master/javascript/fetch-chuck-norris/fetch-chuck-norris__example.gif" style="border: 1px solid grey;">


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Fetch | Chuck Norris jokes</title>
        <style>
            :root {
                --black: #1b1b15;
                --green: #58af58;
                --yellow: #f7df1e;
            }

            ul {
                padding: 0;
                display: flex;
                flex-flow: row wrap;
                list-style: none;
            }

            li {
                font-size: 1.25em;
                margin-right: 1em;
                margin-bottom: 1em;
                border-radius: 0.5em;
                display: flex;
                border: 0.25em solid var(--green);
            }

            li label {
                cursor: pointer;
                padding: 0.5em 1em;
            }

            li input {
                width: 1em;
                height: 1em;
                margin-left: 1em;
            }

            button {
                font-size: 1em;
                cursor: pointer;
                padding: 0.5em 1em;
                border: 0.25em solid var(--black);
            }

            p {
                font-size: 2em;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <form>
            <ul></ul>
            <button type="submit" disabled>Get joke</button>
        </form>
        <p></p>
        <script>
            /** Your code here */
        </script>
    </body>
</html>

```