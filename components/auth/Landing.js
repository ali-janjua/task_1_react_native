import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InstagramLogin from 'react-native-instagram-login';

import Uploads from '../Uploads';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };

  }

  setIgToken = (data) => {
    console.log('data', data)
    this.setState({ token: data.access_token })
    this.setState({ data: this.navigation })
    this.props.navigation.navigate("Home", { params: { token: this.state.token }} )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
        {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId='210231337721979'
          appSecret='f2f2fb44691f0df1c316dfd025ba95e5'
          redirectUrl='https://github.com/'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={(data) => console.log(data)}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: 'orange',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});