import React from 'react';

class Song extends React.Component{
  render(){
    return(
      <li>
        <iframe
          width='420'
          height='315'
          src='http://www.youtube.com/embed/0CFuCYNx-1g'
          frameBorder='0'
          allowFullScreen></iframe>
      </li>
    )
  }
}

export default Song;
