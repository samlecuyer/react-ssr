import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import Loading from './Loading';
import ArtistSelectionModal from './ArtistSelectionModal';
import Songlist from './Songlist';

class PlaylistModal extends React.Component{
  constructor(){
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.displayHome = this.displayHome.bind(this);
    this.state = {
      showModal: false
    }
  }

  componentDidMount(){
    const { stopSpinner } = this.props;

    stopSpinner();
  }

  open(){
    this.setState({ showModal: true });
  }

  close(){
    this.setState({ showModal: false });
  }

  displayHome(){
    const { artists, addArtist, currentArtist, videos, isFetching, selectArtist } = this.props;

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
              <Button onClick={this.open}>
                <Glyphicon glyph='music' />
                <span>&nbsp;</span>
                {currentArtist}
              </Button>
              <ArtistSelectionModal
                artists={artists}
                currentArtist={currentArtist}
                addArtist={addArtist}
                selectArtist={selectArtist}
                showModal={this.state.showModal}
                close={this.close} />
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

export default PlaylistModal;
