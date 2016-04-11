import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class DropdownSelection extends React.Component {
  constructor(){
    super();
    this.displayButton = this.displayButton.bind(this);
  }

  displayButton(){
    const { artist, eventKey, active } = this.props;

    if(active){
      return(
        <MenuItem eventKey={eventKey} active>
          {artist}
        </MenuItem>
      )
    } else {
      return(
        <MenuItem eventKey={eventKey}>
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
