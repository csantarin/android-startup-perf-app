import { NavigationProp } from '@react-navigation/native';

import createNavigateTo from '../../navigation/navigateTo/createNavigateTo';
import { FLOW_STACK_SCREEN_ROUTES, FlowStackParamList, FlowStackRoute } from './FlowStackRoutes';

const createFlowStackNavigateTo = (navigator: Pick<NavigationProp<FlowStackParamList, FlowStackRoute>, 'navigate'>) => {
  return createNavigateTo(navigator, FLOW_STACK_SCREEN_ROUTES);
};

export default createFlowStackNavigateTo;
