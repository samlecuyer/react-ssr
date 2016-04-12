import * as ActionTypes from './../actions/playlistActions';

const initialState = {
  artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong', 'Lil Wayne'],
  currentArtist: 'Elton John',
  videos: [],
  isFetching: false
}

export default function playlistReducer(state = initialState, action){
  switch (action.type) {
    case ActionTypes.ADD_ARTIST:
      let newArtistList = state.artists.map((artist) => {
        return artist;
      });
      newArtistList.push(action.artist);

      return Object.assign({}, state, {
        artists: newArtistList,
        currentArtist: action.artist
      });
    case ActionTypes.SET_CURRENT_ARTIST:
      return Object.assign({}, state, {
        currentArtist: action.artist
      });
    case ActionTypes.LOAD_VIDEO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.LOAD_VIDEO_SUCCESS:
      return Object.assign({}, state, {
        videos: action.data,
        isFetching: false
      });
    case ActionTypes.STOP_SPINNER:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}
