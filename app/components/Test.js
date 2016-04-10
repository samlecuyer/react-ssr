import React from 'react';

class Test extends React.Component {
  render(){
    console.log('props in Test:', this.props);
    return(
      <div>
        Hello from Test Component
      </div>
    )
  }
}

export default Test;
