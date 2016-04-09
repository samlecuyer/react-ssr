import React from 'react';
import { render } from 'react-dom';

// Components
import Test from './components/Test';

class Hook extends React.Component {
  render(){
    return(
      <div>
        Hello from Hook
        <Test />
      </div>
    )
  }
}

// render(
//   <App />,
//   document.getElementById('app')
// )

export default Hook;
