import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Test from './../components/Test';

class App extends React.Component {
  render(){
    console.log('props in App:', this.props);
    return(
      <div>
        Hello from App Container
        <Test {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.playlistReducer.artists,
    currentArtist: state.playlistReducer.currentArtist
  }
}

export default connect(mapStateToProps)(App);
