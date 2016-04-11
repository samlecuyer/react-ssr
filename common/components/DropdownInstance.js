import React from 'react';
import { Dropdown, Glyphicon } from 'react-bootstrap';
import DropdownSelection from './DropdownSelection';

class DropdownInstance extends React.Component {
  constructor(){
    super();
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  displayDropdown(){
    const { artists, currentArtist, selectArtist } = this.props;

    return artists.map((artist, ind) => {
      return currentArtist === artist ?
        <DropdownSelection
          artist={artist}
          selectArtist={selectArtist}
          eventKey={ind + 1}
          key={ind}
          active={true} /> :
          <DropdownSelection
          artist={artist}
          selectArtist={selectArtist}
          eventKey={ind + 1}
          key={ind} />;
    });
  }

  render(){
    const { currentArtist } = this.props;

    return(
      <Dropdown
        key='artist-dropdown'
        id='dropdown-basic-artist'>
        <Dropdown.Toggle>
          <Glyphicon glyph='music' />
          <span>&nbsp;</span>
          {currentArtist}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {this.displayDropdown()}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownInstance;
