
import { fromJS } from 'immutable';
import welcomeReducer from '../reducer';

describe('welcomeReducer', () => {
  it('returns the initial state', () => {
    expect(welcomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
