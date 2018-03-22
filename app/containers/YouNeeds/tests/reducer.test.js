
import { fromJS } from 'immutable';
import youNeedsReducer from '../reducer';

describe('youNeedsReducer', () => {
  it('returns the initial state', () => {
    expect(youNeedsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
