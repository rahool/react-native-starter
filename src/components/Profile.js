import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import { Container, Content, Header, Button, Body, Left, List, ListItem, Icon, InputGroup, Title} from 'native-base';
import { getItem } from '../services/StorageService';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    getItem('userInfo').then((userInfo) => {
        this.setState({userInfo});
    });    
  }

  render() {
   
    if (this.state.userInfo == undefined || this.state.userInfo == null ){
      return <Text>Please wait ...</Text>
    }  

    return (

      <Container>
        <Content>
          <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer() }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          </Header>
          <View >
            <List style={{padding: 11, borderWidth:0, borderColor:'#f0f0f0', marginBottom:11}}>
              <ListItem style={{padding: 11}}>
                <InputGroup>
                  <Icon name='person' />
                  <Text>{this.state.userInfo.user.name}</Text>
                </InputGroup>
              </ListItem>
              <ListItem style={{padding: 11}}>
                <InputGroup>
                  <Icon name='mail' />
                  <Text>{this.state.userInfo.user.email}</Text>
                </InputGroup>
              </ListItem>
            </List>
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

});