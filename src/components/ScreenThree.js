
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Content, Left, Title, Text, Body, Button as ButtonBase } from 'native-base';
import StorageService from '../services/StorageService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ScreenThree extends Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  componentDidMount() {
    console.log("componentDidMount");
    StorageService.getItem('userInfo').then((userInfo) => {
      this.setState({userInfo});
    });   

  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {

    if (this.state.userInfo == undefined || this.state.userInfo == null ){
      return <Text>Please wait ...</Text>
    }  

    return (
      <Container>
      <Header style={styles.labsHeader}>
      <Left>
        <ButtonBase transparent onPress={() => {this.props.navigation.goBack(null) }}>
          <MaterialIcons style={styles.headerIcon} name="arrow-back" />
        </ButtonBase>
      </Left>
      <Body>
        <Title>Page Three</Title>
      </Body>
      </Header>
        <Content>
      <View style={styles.container}>
        <View style={{flex: 10}}>
        <Text>YOUR COMPONENT HERE</Text>
        </View>
      </View>
        </Content>
       
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 21
  },
  headerIcon: {
    color: '#fbfbfb',
    fontSize: 32
  },
  labsHeader: {
  }
});
