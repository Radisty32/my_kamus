import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0288d1" barStyle="light-content" />

        <View style={{ padding: 20, backgroundColor: '#03a9f4', elevation: 1 }}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>
            MyKamus
          </Text>
        </View>
      </View>
    );
  }
}

export default Index;

