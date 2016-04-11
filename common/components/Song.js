import React from 'react';

class Song extends React.Component{
  render(){
    const { id } = this.props;

    return(
      <li>
        <iframe
          width='420'
          height='315'
          src={'http://www.youtube.com/embed/' + id}
          frameBorder='0'
          allowFullScreen></iframe>
      </li>
    )
  }
}

export default Song;
