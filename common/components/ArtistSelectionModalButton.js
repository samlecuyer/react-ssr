import React from 'react';
import { Button } from 'react-bootstrap';

class ArtistSelectionModalButton extends React.Component {
  constructor(){
    super();
    this.handleSelection = this.handleSelection.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  handleSelection(){
    const { artist, selectArtist, close } = this.props;

    selectArtist(artist);
    close();
  }

  displayButton(){
    const { artist, active } = this.props;

    if(active){
      return(
        <Button
          onClick={this.handleSelection}
          className='active'>
          {artist}
        </Button>
      )
    } else {
      return(
        <Button onClick={this.handleSelection}>
          {artist}
        </Button>
      )
    }
  }

  render(){
    const { artist } = this.props;

    return this.displayButton();
  }
}

export default ArtistSelectionModalButton;
