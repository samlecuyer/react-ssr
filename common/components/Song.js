import React from 'react';

class Song extends React.Component{
  render(){
    const { id, title, description } = this.props;

    return(
      <div className='row song'>
        <div className='col-lg-6 col-md-6 col-xs-12 song-video'>
          <iframe
            src={'http://www.youtube.com/embed/' + id}
            frameBorder='0'
            allowFullScreen></iframe>
        </div>
        <div className='col-lg-6 col-md-6 col-xs-12 song-text'>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
    )
  }
}

export default Song;
