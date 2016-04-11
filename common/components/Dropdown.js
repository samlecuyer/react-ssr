import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import DropdownSelection from './DropdownSelection';

class Dropdown extends React.Component {
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
      <DropdownButton
        title={currentArtist}
        key='artist-dropdown'
        id='dropdown-basic-artist'>
          {this.displayDropdown()}
      </DropdownButton>
    )
  }
}

export default Dropdown;
