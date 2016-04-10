import React from 'react';

class Test extends React.Component{
  constructor(){
    super();
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(){
    console.log('props in Test:', this.props);
  }

  render(){
    return (
      <p>
        Hello from test
        <button onClick={this.clickMe}>Click</button>
        {this.props.currentArtist}
      </p>
    )
  }
}

export default Test;
