import React from 'react';
import { createDrawerNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';
import { Container, Content, List, ListItem, Icon } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native'
import Profile from "./Profile";
import SigninScreen from './SigninScreen';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';
import SettingsScreen from './SettingsScreen';
import DashboardScreen from './DashboardScreen';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

export class DrawerContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    StorageService.getItem('userInfo').then((userInfo) => {
        this.setState({userInfo});
    });    
  }

  logout = () => {
    AuthService.signOut().then(() => {
      this.setState({"userInfo": null});
      console.log('signed out')});
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'UserSignin' })]
    })
    this.props.navigation.dispatch(actionToDispatch);

  }

  render() {
    const { navigation } = this.props
    
    if (this.state.userInfo == undefined || this.state.userInfo == null ){
      return <Text>Please wait ...</Text>
    }  

    return (

      <Container style={styles.parentContainer}>
        <Content>
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require('../images/logo.png')}
            />
          </View>
          <View style={styles.profileContainer}>
            <List style={{padding: 11, borderWidth:0, borderColor:'#f0f0f0', marginBottom:11}}>
              <ListItem style={{padding: 11}}>
                  <Icon style={{paddingRight: 11}} name='person' />
                  <Text>{this.state.userInfo.user.name}</Text>
              </ListItem>
              <ListItem style={{padding: 11}}>
                  <Icon style={{paddingRight: 11}}name='mail' />
                  <Text>{this.state.userInfo.user.email}</Text>
              </ListItem>
            </List>
          </View>
         
          <View style={styles.container}>
            <Text
              onPress={() => navigation.navigate('Home')}
              style={styles.drawerItem}>
              Home
            </Text>
            <Text
              onPress={() => navigation.navigate('Page1')}
              style={styles.drawerItem}>
              Page1
            </Text>
            <Text
              onPress={() => navigation.navigate('Page2')}
              style={styles.drawerItem}>
              Page1
            </Text>
            <Text
              onPress={() => navigation.navigate('Page3')}
              style={styles.drawerItem}>
              Page1
            </Text>
            <Text
              onPress={() => navigation.navigate('Settings')}
              style={styles.drawerItem}>
              Settings
            </Text>
            <Text
              onPress={this.logout}
              style={styles.drawerItem}>
              Sign out
            </Text>
          </View>
        </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#f6f6f6',
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 21,
    paddingHorizontal: 21
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    margin: 5,
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain'
  }

})

const AppStackNavigator = createDrawerNavigator({
  //"Profile": { screen: Profile  },
  "Home": { screen: DashboardScreen },
  "Page1": { screen: ScreenOne },
  "Page2": { screen: ScreenTwo },
  "Page3": { screen: ScreenThree },
  "Settings": { screen: SettingsScreen },
  "Sign out": { screen: SigninScreen },
},
{
  initialRouteName : 'Home',
  headerMode: 'screen',
  contentComponent: DrawerContainer
});

const AppStack = createAppContainer(AppStackNavigator);

export default AppStack;
