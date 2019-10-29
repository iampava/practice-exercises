# Simple pub-sub

Fill in the gaps to get to [this result](https://iampava.com/PICTURES/staw/pub_sub.gif).

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Simple pub-sub</title>
    </head>
    <body>
        <div id="counterWrapper1"></div>
        <div id="counterWrapper2"></div>
        <div id="buttonWrapper1"></div>
        <div id="buttonWrapper2"></div>
        <script src="app.js"></script>
    </body>
    <script>
    const PubSub = (function() {
        /** ... */

        return {
            subscribe(/** ... */) {

            },
            dispatch(/** ... */) {
                
            }
        }
    })();

    const btnWrapper1 = document.getElementById('buttonWrapper1');
    const btnWrapper2 = document.getElementById('buttonWrapper2');
    const counterWrapper1 = document.getElementById('counterWrapper1');
    const counterWrapper2 = document.getElementById('counterWrapper2');



    class Counter {
        /** ... */
    }

    class Button {
        /** ... */
    }

    new Counter(counterWrapper1, 10);
    new Counter(counterWrapper2, -100);
    new Button(btnWrapper1, 7);
    new Button(btnWrapper2, -3);

    // Button and Counter don't interact directly. Only through the PubSub module!
    </script>
</html>

```