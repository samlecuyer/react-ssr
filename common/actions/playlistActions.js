export const SET_CURRENT_ARTIST = 'SET_CURRENT_ARTIST';
export const LOAD_VIDEOS = 'LOAD_VIDEOS';

const setCurrentArtist = (artist) => {
  return {
    type: SET_CURRENT_ARTIST,
    artist
  }
}

const loadVideos = (data) => {
  return {
    type: LOAD_VIDEOS,
    data
  }
}

export const selectArtist = (artist) => {
  return dispatch => {
    dispatch(setCurrentArtist(artist));

    return fetch(`/api/artists/${artist}`, {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(loadVideos(response));
    })
  }
}
