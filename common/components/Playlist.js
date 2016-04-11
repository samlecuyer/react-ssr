import React from 'react';
import Loading from './Loading';
import Dropdown from './Dropdown';
import Songlist from './Songlist';

class Playlist extends React.Component{
  constructor(){
    super();
    this.displayHome = this.displayHome.bind(this);
  }

  componentDidMount(){
    const { stopSpinner } = this.props;

    stopSpinner();
  }

  displayHome(){
    const { artists, currentArtist, videos, isFetching, selectArtist } = this.props;

    if(isFetching){
      return(
        <Loading />
      )
    } else {
      return(
        <div className='playlist'>
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
    return (
      <div className='container-fluid'>
        {this.displayHome()}
      </div>
    )
  }
}

export default Playlist;
