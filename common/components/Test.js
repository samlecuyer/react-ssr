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
      <div>
        <h1>Hello from Test Component</h1>
        <button onClick={this.clickMe}>Click</button>
      </div>
    )
  }
}

export default Test;
