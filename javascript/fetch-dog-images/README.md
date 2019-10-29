# Fetch | Dog.ceo API

Use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with the code below to consume this [Dog.ceo API](https://dog.ceo/dog-api/). 

You should 
* search and fetch 3 pictures of dogs from that breed when submitting the form

<img src="https://raw.githubusercontent.com/iampava/practice-exercises/master/javascript/fetch-dog-images/fetch-dog-images__example.gif" style="border: 1px solid grey;">


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Fetch | Dog pictures</title>
        <style>
            :root {
                --black: #1b1b15;
                --green: #58af58;
                --yellow: #f7df1e;
            }

            form {
                margin-top: 25vh;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                flex-flow: row nowrap;
                font-size: 1.5em;
            }

            input,
            button {
                font-size: 1em;
                cursor: pointer;
                padding: 0.5em 1em;
                height: 100%;
                border: 0.25em solid var(--black);
            }

            input {
                cursor: initial;
                border-color: var(--black);
            }

            .gallery {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: space-evenly;
            }

            img {
                margin: 2em 1em;
                max-width: 33%;
                max-height: 500px;
                box-shadow: 0 0 5px var(--black);
            }
        </style>
    </head>
    <body>
        <form>
            <input type="text" placeholder="Breed" required name="breed" />
            <button type="submit">Fetch pictures</button>
        </form>
        <div class="gallery"></div>
        <script>
            /** Your code here */
        </script>
    </body>
</html>

```