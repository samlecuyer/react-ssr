import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import * as playlistActions from './../actions/playlistActions';

function mapStateToProps(state){
  return {
    artists: state.playlistReducer.artists,
    currentArtist: state.playlistReducer.currentArtist
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(playlistActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
