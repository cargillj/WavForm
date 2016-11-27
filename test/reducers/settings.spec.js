import { expect } from 'chai';
import settings from '../../app/shared/reducers/settings';
import { SET_VOLUME } from '../../app/shared/actions/settings';

const temp_state = { 
  volume: 0.5
};

describe('reducers', () => {
  describe('settings', () => {
    it('should handle initial state', () => {
      expect(settings(undefined, {})).to.deep.equal({volume: 0.5});
    });

    it('should handle SET_VOLUME', () => {
      expect(settings(temp_state, { type: "SET_VOLUME", payload: 0.7 })).to.deep.equal({
        volume: 0.7
      });
    })
  });
});
