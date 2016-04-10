import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Test from '../components/Test';
// import playlistActions

function mapStateToProps(state){
  return {
    artists: state.playlistReducer.artists,
    currentArtist: state.playlistReducer.currentArtist
  }
}

function mapDispatchToProps(dispatch){
  // return bindActionCreators(playlistActions, dispatch)
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
