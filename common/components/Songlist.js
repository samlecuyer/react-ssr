import React from 'react';
import Song from './Song';

class Songlist extends React.Component{
  constructor(){
    super();
    this.displaySonglist = this.displaySonglist.bind(this);
  }

  displaySonglist(){
    const { videos } = this.props;
    let songs;

    if(videos.length > 0){
      songs = videos.map((video, ind) => {
        return <Song id={video.id.videoId} key={ind} />
      });

      return songs;
    } else {
      return (
        <li>
          <iframe
            width='420'
            height='315'
            src='http://www.youtube.com/embed/0CFuCYNx-1g'
            frameBorder='0'
            allowFullScreen></iframe>
        </li>
      )
    }
  }

  render(){
    console.log('props in songlist', this.props);
    return(
      <div>
        <h2>Songs</h2>
        <ul>
          {this.displaySonglist()}
        </ul>
      </div>
    )
  }
}

export default Songlist;
