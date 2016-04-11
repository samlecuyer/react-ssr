import React from 'react';
import Song from './Song';

class Songlist extends React.Component{
  render(){
    console.log('props in songlist', this.props);
    return(
      <div>
        SONGS:
        <ul>
          <Song />
        </ul>
      </div>
    )
  }
}

export default Songlist;
