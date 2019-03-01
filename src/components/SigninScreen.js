import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import { Container, Content } from 'native-base';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import NavigationService from '../services/NavigationService';
import StorageService from '../services/StorageService';

GoogleSignin.configure();

export default class SigninScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  _signIn = async () => {
    console.log('signIn');
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      await StorageService.setItem('userInfo', userInfo);
      NavigationService.navigate('AuthLoading', {});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (

      <Container>
        <Content>
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require('../images/logo.png')}
            />
          </View>
         
          <View style={styles.container}>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} />
          </View>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    backgroundColor: '#ffffff',
    padding: 11,
    marginBottom: 42,
    alignItems: 'center',
    justifyContent: 'center',
  }
});