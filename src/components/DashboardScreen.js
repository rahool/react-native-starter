import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Container, Content, Card, CardItem, Header, Button, Body, Left, Title} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    console.log("props.navigation:", this.props.navigation);
  }

  render() {
   
    return (

      <Container>
      <Content>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer() }}>
              <MaterialIcons style={styles.headerIcon} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page1')}>
        <Card button>
          <CardItem>
            <Left>
              <MaterialIcons style={styles.cardHeaderIcon} name="event-note" />
              <Body>
                <Text style={styles.headerText}>Page1</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              </Text>
            </Body>
          </CardItem>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page2')}>
        <Card>
          <CardItem>
            <Left>
              <MaterialIcons style={styles.cardHeaderIcon} name="event-note" />
              <Body>
                <Text style={styles.headerText}>Page2</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              </Text>
            </Body>
          </CardItem>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page3')}>
        <Card>
          <CardItem>
            <Left>
              <MaterialIcons style={styles.cardHeaderIcon} name="event-note" />
              <Body>
                <Text style={styles.headerText}>Page3</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
              </Text>
            </Body>
          </CardItem>
        </Card>
        </TouchableOpacity>
      </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
    headerIcon: {
      color: '#fbfbfb',
      fontSize: 32
      },
      cardHeaderIcon: {
        color: '#5e5e5e',
        fontSize: 32
        },
    headerText: {
        color: '#5e5e5e',
      fontSize: 24
      },
});