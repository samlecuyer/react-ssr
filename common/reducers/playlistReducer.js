import * as ActionTypes from './../actions/playlistActions';

const initialState = {
  artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong'],
  currentArtist: 'Elton John',
  videos: []
}

export default function playlistReducer(state = initialState, action){
  switch (action.type) {
    case ActionTypes.SET_CURRENT_ARTIST:
      return Object.assign({}, state, {
        currentArtist: action.artist
      });
    case ActionTypes.LOAD_VIDEOS:
      return Object.assign({}, state, {
        videos: action.data
      })
    default:
      return state;
  }
}
