# Project ideas

I believe in order to be good at coding you gotta code A LOT! The exercises in this repo are perfect for practicing the basics in a "controlled" environment, but nothing beats having a real application to work at. 

Here are some of my ideas:


## #1 ThankYou

Build a WebApp which lets you digitally create thank you postcards and share them with the loved ones. The main feature of the app should be a digital canvas where the user creates/edits the postcard by adding images, videos, audio, text and various shapes. The user can upload it's own assets or use 3rd party ones from providers such as [Unsplash](https://unsplash.com) and [Pixabay](https://pixabay.com).

While editing, undo-redo functionality should be available as well as certain keyboard shortcuts to make the entire process easier. The app should also offer seemless sharing via unique links, emails and integration with social-media sites like Twiter/Facebook. 

Inspiration/resources: [Figma](https://www.figma.com/), [Flixier](https://flixier.com). Also check out [FabricJS](http://fabricjs.com/).

Bonus: add colaboration mode for real-time editing of a postcard.

## #2 Party bot

Automate the process of selecting music at parties with a WebApp which does just that.

After creating the "party group" inside the app, all it's members will upload/edit favorite tracks. By using 3rd party API's the app will automatically fill the database with song info (artist, year, genre, etc).

At first the app will play random songs and determine the number of dancing users by reading the gyroscope data from their phones. Then, based on this data it will adjust future songs, the goal being to have as much people dancing.

At the end of the party the app will show detailed graphs for each user. (overall dancing time, favorite song, least favorite song, time danced per song, etc...)

Bonus: create a "silent party" mode with at least 3 tracks in parallel. Users listening to the same track should have their screens colored the same so they can recognize themselves.

Resources: [LastFM Api](https://www.last.fm/api),  [Gyroscope MDN](https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope).

## #3 TimeLog

Create a minimalist time-logging product in the form of a Progressive Web App.

Users will create tasks and assign them to other registered users or via an anonymous link to everyone on the internet. 

They can specify some mandatory criterias for starting it: only between certain times, only in a certain geographical, or finishing it: requires an image/video or audio as proof. The history of all tasks + detailed statistics will be avaible to both the creator and the do'er.

The app must work offline, in which case it will sync it's task data when finding a connection. It will also feature a configurable push-notification system to inform users of the changes they desire (you've been invited to a task, a task has been updated, etc).

Inspiration: [Asana](https://asana.com), [Trello](https://trello.com)


