import React from 'react';
import Loading from './Loading';
import Dropdown from './Dropdown';
import Songlist from './Songlist';

class Playlist extends React.Component{
  constructor(){
    super();
    this.displayHome = this.displayHome.bind(this);
  }

  displayHome(){
    const { artists, currentArtist, videos, isFetching, selectArtist } = this.props;

    if(isFetching){
      return(
        <Loading />
      )
    } else {
      return(
        <div>
          <h1>YouTube Playlist</h1>
          <div className='row'>
            <Dropdown
              artists={artists}
              currentArtist={currentArtist}
              selectArtist={selectArtist} />
            <Songlist videos={videos} />
          </div>
        </div>
      )
    }
  }

  render(){
    console.log('props in application', this.props);
    return (
      <div className='container-fluid'>
        {this.displayHome()}
      </div>
    )
  }
}

export default Playlist;
