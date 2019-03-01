import { createStackNavigator, createAppContainer } from 'react-navigation'
import SigninScreen from './SigninScreen'

const AuthStackNavigator = createStackNavigator(
  {
    UserSignin: {
      screen: SigninScreen,
    },
  },
  {
    headerMode: 'none', 
  }
);

const AuthStack = createAppContainer(AuthStackNavigator);

export default AuthStack;