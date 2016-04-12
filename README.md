# React Server-Side Rendering

#### An application built using React, Redux, and the YouTube API for a Yahoo! coding challenge.

## Developer Documentation
#### Tools Used:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React-Redux](https://github.com/reactjs/react-redux)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.github.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html)
* [Sass](http://sass-lang.com/)
* [Bootstrap](http://getbootstrap.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)

#### APIs Used:
* [Youtube API](https://developers.google.com/youtube/v3/docs/search)

#### Running the Application Locally:
* Fork the repo
* Clone your fork locally (alternatively, you can download the .zip file on my repo)
```
git clone https://github.com/YOURUSERNAME/react-ssr.git
```
* Create a config.js file in /server/helpers
```
server
└── helpers
      └── config-example.js
// copy this file and input your YouTube API key
// your config file will contain the following:
module.exports = {
    youtubeKey: 'INSERT APP ID HERE'
};
```
* Install server and client dependencies
```
npm install
```
* Run the app on a local server (bundle.js is created automatically)
```
npm start
```
* Visit http://localhost:8080/ on your browser for the landing page

#### Design Decisions:
* React allows us to share components on both the server and client side, along with reusing components throughout our application
* Redux holds the state of our application, enabling one way YouTube API data flow from the initial hydration of our store to client-side Artist queries
  * Since the application is a relatively small application, we use a single Reducer (playlistReducer.js) and a single Action Creator file (playlistActions.js) to handle changes in our UI/UX.
* Server-side rendering is done initially via the 'handleRender' function within the server file, which fetches YouTube artist data and hydrates our Redux state, using ES6 to send a template to our client
* After the initial render, the client takes over. You can find the shared client / server side components in the /common directory
* We use a single container (App.js) to pass our application state to the top-level component (PlaylistModal.js or PlaylistDropdown.js)
  * The only state kept on individual components relates to displaying the modal component or capturing input in a form
* Decided with a modal approach to selecting/adding an artist as it flows nicer with the application (see below on how to toggle the modal and dropdown components)

#### Notes:
* The application defaults to using a modal to select an artist. You can change this to a dropdown (but lose the functionality of adding an artist), by simply going to /common/containers/App.js and commenting/uncommenting out the necessary lines of code
