import React from 'react';
import { Modal, ButtonGroup, Button } from 'react-bootstrap';
import ArtistSelectionModalButton from './ArtistSelectionModalButton';

class ArtistSelectionModal extends React.Component {
  constructor(){
    super();
    this.displayMenu = this.displayMenu.bind(this);
  }

  displayMenu(){
    const { artists, currentArtist, selectArtist, close } = this.props;

    return artists.map((artist, ind) => {
      return currentArtist === artist ?
        <ArtistSelectionModalButton
          artist={artist}
          selectArtist={selectArtist}
          key={ind}
          active={true}
          close={close} /> :
        <ArtistSelectionModalButton
          artist={artist}
          selectArtist={selectArtist}
          key={ind}
          close={close} />;
    });
  }

  render(){
    console.log('props in modal', this.props);
    return(
      <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <ButtonGroup vertical block>
              {this.displayMenu()}
            </ButtonGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default ArtistSelectionModal;
