import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true
    };

  }

  
  render() {
      return (
        <>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
            <Text style={styles.user}><Icon name="user-circle-o" size={35}  /> {this.props.route.params.params.user_name}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{uri: this.props.route.params.params.media_url }}
              style={styles.image}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left' }}>
            <Text style={styles.caption}><Icon name="comments" size={25} color="#ff0000" /> {this.props.route.params.params.caption}</Text>
          </View>
        </>
      );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400,
    resizeMode: 'cover'
  },
  user: {
    marginLeft: 5,
    fontSize: 28
  },
  caption: {
    marginTop: 0,
    marginLeft: 5,
    fontSize: 18
  }
});
