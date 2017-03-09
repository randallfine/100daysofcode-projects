import * as actionTypes from "./constants/action_types";

exports function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  }
};
