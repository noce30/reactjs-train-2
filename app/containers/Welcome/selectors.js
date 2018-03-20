import { createSelector } from 'reselect';

/**
 * Direct selector to the welcome state domain
 */
const selectWelcomeDomain = (state) => state.get('welcome');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Welcome
 */

const makeSelectWelcome = () => createSelector(
  selectWelcomeDomain,
  (substate) => substate.toJS()
);

export default makeSelectWelcome;
export {
  selectWelcomeDomain,
};
