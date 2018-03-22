/**
 *
 * Asynchronously loads the component for Home
 *
 */
/*eslint-disable*/
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
