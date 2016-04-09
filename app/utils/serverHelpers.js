export const helpers = {
  handleRender: function(){

  },
  renderFullPage: function(html, initialState){
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>YouTube Playlist</title>
      </head>
      <body>
        <div id='app'>${html}</div>
      </body>
      </html>
    `
  }
}
