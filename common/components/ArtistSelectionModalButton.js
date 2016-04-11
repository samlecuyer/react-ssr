import React from 'react';
import { Button } from 'react-bootstrap';

class ArtistSelectionModalButton extends React.Component {
  constructor(){
    super();
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(){
    const { artist, selectArtist, close } = this.props;

    selectArtist(artist);
    close();
  }

  render(){
    const { artist } = this.props;

    return(
      <Button onClick={this.handleSelection}>
        {artist}
      </Button>
    )
  }
}

export default ArtistSelectionModalButton;
