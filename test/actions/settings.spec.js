import { expect } from 'chai';
import * as actions from '../../app/shared/actions/settings';

describe ('actions', () => {
  it('should create setVolume action', () => {
    expect(actions.setVolume(0.5)).to.deep.equal({
      meta: {
        trigger: "SET_VOLUME"
      },
      payload: [0.5],
      type: "ALIASED"
    });
  });
});

