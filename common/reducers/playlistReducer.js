import * as ActionTypes from './../actions/playlistActions';

const initialState = {
  artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong'],
  currentArtist: 'Elton John'
}

export default function playlistReducer(state = initialState, action){
  switch (action.type) {
    case ActionTypes.SET_CURRENT_ARTIST:
      return Object.assign({}, state, {
        currentArtist: action.artist
      });
    default:
      return state;
  }
}
