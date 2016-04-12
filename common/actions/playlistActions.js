export const ADD_ARTIST = 'ADD_ARTIST';
export const SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST';

export const addArtist = (artist) => {
  return dispatch => {
    dispatch({
      type: ADD_ARTIST,
      artist
    })
  }
}

const setCurrentArtist = (artist) => {
  return {
    type: SET_CURRENT_ARTIST,
    artist
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

export const LOAD_VIDEO_REQUEST = 'LOAD_VIDEO_REQUEST';
export const LOAD_VIDEO_SUCCESS = 'LOAD_VIDEO_SUCCESS';

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

export const STOP_SPINNER = 'STOP_SPINNER';

export const stopSpinner = () => {
  return dispatch => {
    dispatch({
      type: STOP_SPINNER
    })
  }
}
