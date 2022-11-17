import { NavigationInjectedProps } from 'react-navigation';

import createNavigateTo from '../../navigation/navigateTo/createNavigateTo';
import { FLOW_STACK_SCREEN_ROUTES, FlowStackParamList } from './FlowStackRoutes';

const createFlowStackNavigateTo = (navigation: Pick<NavigationInjectedProps['navigation'], 'navigate'>) => {
  return createNavigateTo<FlowStackParamList>(navigation, FLOW_STACK_SCREEN_ROUTES);
};

export default createFlowStackNavigateTo;
