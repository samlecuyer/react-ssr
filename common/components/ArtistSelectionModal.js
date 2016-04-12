import React from 'react';
import { Modal, ButtonGroup, Button } from 'react-bootstrap';
import ArtistSelectionModalButton from './ArtistSelectionModalButton';

class ArtistSelectionModal extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayMenu = this.displayMenu.bind(this);
    this.state = {
      value: ''
    }
  }

  handleChange(e){
    this.setState({ value: e.target.value })
  }

  handleSubmit(e){
    const { addArtist, selectArtist, close } = this.props;
    e.preventDefault();

    addArtist(this.state.value);
    selectArtist(this.state.value);
    close();

    this.setState({ value: '' });
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
    const { currentArtist } = this.props;

    return(
      <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title className='modal-title-header'>
              Select an Artist
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Currently Selected: {currentArtist}</h4>
            <ButtonGroup vertical block>
              {this.displayMenu()}
            </ButtonGroup>
            <p className='or'>OR</p>
            <p>Enter an Artist Below</p>
            <form onSubmit={this.handleSubmit}>
              <input
              type='text'
              className='form-control'
              placeholder='Enter an Artist'
              value={this.state.value}
              onChange={this.handleChange} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

export default ArtistSelectionModal;
