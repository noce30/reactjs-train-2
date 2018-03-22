import { createSelector } from 'reselect';

/**
 * Direct selector to the youNeeds state domain
 */
const selectYouNeedsDomain = (state) => state.get('youNeeds');

/**
 * Other specific selectors
 */


/**
 * Default selector used by YouNeeds
 */

const makeSelectYouNeeds = () => createSelector(
  selectYouNeedsDomain,
  (substate) => substate.toJS()
);

export default makeSelectYouNeeds;
export {
  selectYouNeedsDomain,
};
