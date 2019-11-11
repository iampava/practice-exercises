# Prefer named functions

This is not an exercise but a showcase of **named functions** advantages. Open the HTML below in the browser and take a peek into the console.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Named functions DEMO</title>
  </head>
  <body>
    <h1>Open the console!</h1>
    <script>
      start();

      function start() {
        fuelTheTank();
        startEngines();
        startRadio();
      }

      function fuelTheTank() {
        openCap();
        fillWithFuel();
        closeCap();
      }

      function openCap() {
        console.log("Cap is open!");
      }

      function fillWithFuel() {
        throw new Error("Oups, wrong fuel!");
      }

      function closeCap() {
        console.log("Cap is closed!");
      }

      function startEngines() {
        console.log("Vrum vrum, engines are on!");
      }

      function startRadio() {
        console.log("Radio has started. Music is goooood!");
      }
    </script>
  </body>
</html>
```

<img style="border: 1px solid grey;" src="https://raw.githubusercontent.com/iampava/practice-exercises/master/javascript/prefer-named-functions/prefer-named-functions.png">