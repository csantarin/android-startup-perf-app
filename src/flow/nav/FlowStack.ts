import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FlowStackParamList } from './FlowStackRoutes';

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

export default FlowStack;
