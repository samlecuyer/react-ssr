import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistActions from './../actions/playlistActions';

// Components
/*
Uncomment me if you'd like to use a dropdown menu (and comment out the Modal code)!
import PlaylistDropdown from '../components/PlaylistDropdown';
*/
import PlaylistModal from '../components/PlaylistModal';

function mapStateToProps(state){
  return {
    artists: state.playlistReducer.artists,
    currentArtist: state.playlistReducer.currentArtist,
    videos: state.playlistReducer.videos,
    isFetching: state.playlistReducer.isFetching
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(playlistActions, dispatch)
}

/*
Uncomment me if you'd like to use a dropdown menu (and comment out the Modal code)!
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDropdown);
*/
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
