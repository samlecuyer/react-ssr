import React from 'react';

class Loading extends React.Component {
  render(){
    let divStyle = {
      textAlign: 'center'
    }

    return(
      <div style={divStyle}>
        <img
          src='./../styles/images/loading.gif'
          width='1000px'
          height='800px' />
      </div>
    )
  }
}

export default Loading;
