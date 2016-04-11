import React from 'react';
import Loading from './Loading';
import DropdownInstance from './DropdownInstance';
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
            <div className='col-md-12 dropdown-instance'>
              <DropdownInstance
                artists={artists}
                currentArtist={currentArtist}
                selectArtist={selectArtist} />
            </div>
            <div className='col-md-12'>
              <Songlist
                currentArtist={currentArtist}
                videos={videos} />
            </div>
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
