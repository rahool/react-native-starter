import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStack from "./AuthStack";
import AppStack from './AppStack';
import AuthLoadingScreen from './AuthLoadingScreen';


const RootNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  AuthStack: AuthStack,
  AppStack: AppStack,
},
{
  initialRouteName : 'AuthLoading'
});

const AppNavigator = createAppContainer(RootNavigator);

export default AppNavigator;