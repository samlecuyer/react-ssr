import React from 'react';
import Dropdown from './Dropdown';
import Songlist from './Songlist';

class Playlist extends React.Component{
  constructor(){
    super();
  }

  render(){
    console.log('props in application', this.props);
    return (
      <div className='container-fluid'>
        <h1>YouTube Playlist</h1>
        <div className='row'>
          <Dropdown {...this.props} />
          <Songlist />
        </div>
      </div>
    )
  }
}

export default Playlist;
