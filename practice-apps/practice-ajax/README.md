
# practice-ajax

  

Practice AJAX by integrating the Front-end of this app with the already existing NodeJS API.

<br/><br/>

<p  align='center'>

<img  height=250  src="https://raw.githubusercontent.com/iampava/practice-ajax/master/public/images/screenshot.png" />

</p>

<br/>

Although the app in itself is nothing fancy, it's good exercise because you will have to integrate:

  

- Get

  

* Post

  

- Put

  

* Delete

  

as well as

  

- setting custom headers to enable Authentication

  

## Motivation

  

I give [JavaScript workshops/trainings](https://iampava.com/services) and one of the topics is of course AJAX! So, I created this app to have something we can work on, then open-sourced it for the other trainers out there who might need a practice app as well.

  

In case you're not a trainer but you'd still like to practice AJAX, don't despair! I will do my best to explain **how to install this app** and what the **expected final result** should be, so you can do it by yourself.

  

## Some more about the app

  

You can think of this app as a pet-management tool. The only thing missing from it is the integration with the server. When that is done you should be able to:

  

-  **read** the existing pets

  

-  **create** a new pet

  

-  **update** an existing pet

  

-  **delete** an existing pet

  
  

### API

  

The Back-end exposes a REST API through which you can interact with the pets. I documented this API in RAML format. Check out the <a  href="#raml"> raml section</a> for how to use the documentation.

  

### JavaScript

  

On the Front-end part I already created two JavaScript files: an **app.js** which is the main file of the app and an **utils.js** which provides some utility functions.

  

I wrote those to help you with the implementation so take a good look at them before you start coding.

  

### Authentication

  

This app does not have real authentication. But, because this is a pretty important and common topic, I added a **dummy authentication** (see the login & logout buttons from the screenshot).

  

When calling the right **login API** the server will return, through the Headers, an **authentication token**. You will have to pass that to every request, otherwise you will get a **401 - Unauthorized** error.

  

⚠ By default this dummy authentication is disabled so you can first focus on calling the right API's and handling the responses correctly. If you've done that and want to go to the *next level*, see the [run](#run) section for how to do that.

### CORS
CORS  - [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - is a security-feature of browsers but it can drive us crazy when trying to integrate with an external API!!! 😡

If you're curious how this looks there's a way to run the server with CORS **activated**. See the [run](#run) section.
  

## <p id="installation">How to...</p>

  

### Install

  

To start this practice-project I recommend [forking](https://help.github.com/articles/fork-a-repo/) this repo so you push your own code. Once you've done that, clone the repo and run:

  

```

$ npm install

```

  

### <p id="run">Run</p>

  
#### Default
Run:

  

```

$ npm run serve

```

  

and then navigate to [localhost:8080](http://localhost:8080).

  

#### Dummy Auth

  

If you also want to enable the **_dummy_ Authentication**, run:




```

$ npm run serve-with-auth

```
and then navigate to the same URL. Now, if you're not passing the token to the server, you'll get a 401 responses.

#### CORS

Finally, if you wanna see how CORS errors look like then run the server with CORS enabled:

```
$ npm run serve-with-cors
```

Now, unless you're on the **google.com** origin, calls will fail with a CORS error.
  



  

### <p id="raml">RAML Documentation</p>

  

I've documented the API in [RAML](https://raml.org/) format. In order to read it you will need to first convert it to an HTML page.

  

```

$ npm run raml

```

  

Then open the **api.html** file found in the API folder. You should see something like this:

  

<p  align='center'>

  

<img  height=250  src="https://raw.githubusercontent.com/iampava/practice-ajax/master/public/images/raml.png" />

  

</p>

  

## Good luck! 🥂

  

<p  align="center">Made with ❤ by <a  href="https://iampava.com">Pava</a></p>
