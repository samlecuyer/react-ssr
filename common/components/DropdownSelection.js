import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class DropdownSelection extends React.Component {
  constructor(){
    super();
    this.handleSelection = this.handleSelection.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  handleSelection(e){
    const { artist, selectArtist } = this.props;
    e.preventDefault();

    selectArtist(artist);
  }

  displayButton(){
    const { artist, eventKey, active } = this.props;

    if(active){
      return(
        <MenuItem
          eventKey={eventKey}
          onClick={this.handleSelection}
          active>
          {artist}
        </MenuItem>
      )
    } else {
      return(
        <MenuItem
          eventKey={eventKey}
          onClick={this.handleSelection}>
          {artist}
        </MenuItem>
      )
    }
  }

  render(){
    const { artist, eventKey } = this.props;

    return this.displayButton();
  }
}

export default DropdownSelection;
