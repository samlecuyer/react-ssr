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
* Clone your fork locally
```
git clone https://github.com/yourusername/react-ssr.git
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
* Run the app on a local server (bundle.js is created automatically)
```
npm install
npm start
```
* Visit http://localhost:8080/ on your browser for the landing page

#### Design Decisions:
TBD

#### Notes:
TBD
