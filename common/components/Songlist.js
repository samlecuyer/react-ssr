import React from 'react';
import Song from './Song';

class Songlist extends React.Component{
  constructor(){
    super();
    this.displaySonglist = this.displaySonglist.bind(this);
  }

  displaySonglist(){
    const { videos } = this.props;

    return videos.map((video, ind) => {
      return <Song
        id={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        key={ind} />
    });
  }

  render(){
    console.log('props in songlist', this.props);
    return(
      <div className='row'>
        <h2>Songs</h2>
        <div className='col-md-12'>
          {this.displaySonglist()}
        </div>
      </div>
    )
  }
}

export default Songlist;
