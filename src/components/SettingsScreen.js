import React from 'react';
import { CheckBox, StyleSheet, Image, Text, View} from 'react-native';
import { Container, Content, Header, Button, Body, Left, List, ListItem, Icon, InputGroup, Title} from 'native-base';
import StorageService from '../services/StorageService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        autoSync: true
    }
  }

  componentDidMount() {
    StorageService.getItem('autoSync').then((autoSync) => {
      if (autoSync !== null){
        this.setState({autoSync: autoSync});
      }
    });
  }

  async updateSettings() {
    await this.setState({autoSync: !this.state.autoSync});
    await StorageService.setItem('autoSync', this.state.autoSync);  
  }

  render() {
   
    return (

      <Container>
        <Content>
          <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack(null) }}>
              <MaterialIcons style={styles.headerIcon} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          </Header>
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                value={this.state.autoSync}
                onValueChange={() => this.updateSettings()}
                />
                <Text style={{marginTop: 5}}>Auto sync call logs</Text>
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
        padding: 11,
        paddingBottom: 21
      },
      headerIcon: {
        color: '#fbfbfb',
        fontSize: 32
      }
});