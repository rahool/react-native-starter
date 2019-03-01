import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import StorageService from '../services/StorageService';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    console.log('AuthLoading');
    StorageService.getItem("userInfo").then((userInfo) => {

      console.log("userInfo:", userInfo);
      this.props.navigation.navigate(userInfo ? 'AppStack' : 'AuthStack');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
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
  
  });
