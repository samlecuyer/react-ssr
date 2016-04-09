const initialState = {
  artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong'],
  currentArtist: ''
}

export default function playlistReducer(state = initialState, action){
  switch(action.type){
    default:
      return state;
  }
}
