import { createAliasedAction } from 'electron-redux';

export const SET_VOLUME = "SET_VOLUME";

export const setVolume = createAliasedAction(
  SET_VOLUME,
  (level) => ({
    type: SET_VOLUME,
    payload: level
  })
);
