export const SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST';

const setCurrentArtist = (artist) => {
  return {
    type: SET_CURRENT_ARTIST,
    artist
  }
}

export const selectArtist = (artist) => {
  return dispatch => {
    dispatch(setCurrentArtist(artist));
  }
}
