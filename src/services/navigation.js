import { StackActions, NavigationActions } from 'react-navigation';
import { throttle } from 'lodash';

const NavigationServiceCreator = () => {
  let nav = null;
  let throttledNavigate = null;

  const init = (navObj) => {
    nav = navObj;
    throttledNavigate = throttle(navObj.navigate, 400);
  };

  const navigate = (path, params = {}) => {
    throttledNavigate(path, params);
  };

  const replace = (path, params = {}) => {
    const replaceAction = StackActions.replace({
      routeName: path,
      params,
    });
    nav.dispatch(replaceAction);
  };

  const reset = (path) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: path })],
    });
    nav.dispatch(resetAction);
  };

  return {
    init,
    navigate,
    replace,
    reset,
  };
};

export default NavigationServiceCreator();
