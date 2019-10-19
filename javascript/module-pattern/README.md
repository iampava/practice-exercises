# Module pattern

Create an internationalization module that exposes the following public API:

* `registerLanguage(string, object)` ➡ registers a new language into the module
* `applyLanguage(string)` ➡ apply the language identified with this string to the entire page. All nodes whose `data-text` attribute match a valid language string should have the translated value inserted in them.
* `registerSentences(string, object)` ➡ just like `registerLanguage` but for dynamically adding new sentences
* `refresh` ➡ refreshes the currently applied language, updating all nodes to the latest internationalization values

Make it work with the code below, without changing it. :)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Internationalization module pattern</title>
    </head>
    <body data-lang="en">
        <h1 data-text="hello_there"></h1>
        <p data-text="intro_paragraph"></p>
        <p data-text="later_text"></p>
    </body>
    <script src="app.js"></script>
</html>
```

```javascript
/* app.js */

let i18n = (function() {
    /* your code here */
})();

i18n.registerLanguage('en', {
    hello_there: 'Hey there',
    intro_paragraph: 'Welcome to this exercise'
});

try {
    i18n.applyLanguage(document.querySelector('body').dataset.lang);
} catch (err) {
    alert('unsupported language');
}

i18n.registerSentences('en', {
    later_text: 'Some later text'
});
i18n.refresh();
```