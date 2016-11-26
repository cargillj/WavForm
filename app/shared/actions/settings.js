export const SET_VOLUME = "SET_VOLUME";

export function setVolume(level) {
  return {
    type: SET_VOLUME,
    payload: level
  };
}
