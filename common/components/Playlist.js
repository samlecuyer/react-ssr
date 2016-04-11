import React from 'react';

class Playlist extends React.Component{
  constructor(){
    super();
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(){
    console.log('props in Playlist:', this.props);
  }

  render(){
    return (
      <div className='container-fluid'>
        <h1>Hello from Test Component</h1>
        <div className='row'>
        <button onClick={this.clickMe}>Click</button>
        </div>
      </div>
    )
  }
}

export default Playlist;
