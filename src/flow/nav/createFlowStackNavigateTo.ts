import { NavigationProp } from '@react-navigation/native';

import createNavigateTo from '../../navigation/navigateTo/createNavigateTo';
import { FLOW_STACK_SCREEN_ROUTES, FlowStackParamList } from './FlowStackRoutes';

const createFlowStackNavigateTo = (navigation: Pick<NavigationProp<FlowStackParamList>, 'navigate'>) => {
  return createNavigateTo(navigation, FLOW_STACK_SCREEN_ROUTES);
};

export default createFlowStackNavigateTo;
