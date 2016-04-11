import React from 'react';
import Song from './Song';

class Songlist extends React.Component{
  render(){
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
