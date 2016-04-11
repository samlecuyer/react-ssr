export const SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST';
export const LOAD_VIDEO_REQUEST = 'LOAD_VIDEO_REQUEST';
export const LOAD_VIDEO_SUCCESS = 'LOAD_VIDEO_SUCCESS';

const setCurrentArtist = (artist) => {
  return {
    type: SET_CURRENT_ARTIST,
    artist
  }
}

const loadVideoRequest = () => {
  return {
    type: LOAD_VIDEO_REQUEST
  }
}

const loadVideoSuccess = (data) => {
  return {
    type: LOAD_VIDEO_SUCCESS,
    data
  }
}

export const selectArtist = (artist) => {
  return dispatch => {
    dispatch(setCurrentArtist(artist));
    dispatch(loadVideoRequest());

    return fetch(`/api/artists/${artist}`, {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(loadVideoSuccess(response));
    })
  }
}
