import React, { Component } from 'react'
import { Image, Text, ActivityIndicator, StyleSheet, TouchableHighlight } from 'react-native'


export default class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {
        is_loading: true,
        index: '',
        media_url: '',
        caption: '',
        user_name: '',
        view: props.view || "grid"
      };

      console.log(props)

    this.setState({ is_loading: true })
    fetch('https://graph.instagram.com/'+this.props.post.id+'?fields=id,media_type,media_url,username,timestamp,caption,thumbnail_url&access_token='+props.token).then((response) => response.json()).then((json) => {
      this.setState({ media_url: json.media_type == "IMAGE" ? (json.media_url) : (json.thumbnail_url) })
      this.setState({ caption: json.caption })
      this.setState({ user_name: json.username })
      this.setState({ index: json.id })
      this.setState({ is_loading: false })
    }).catch((error) => {
      console.error(error);
    });

  }
  

    render() {

        return(
            this.state.is_loading ? (
              <ActivityIndicator
                style={styles.image_grid}
                size="small"
              />
              
          ) : (

            <TouchableHighlight onPress={() => this.props.props.props.navigation.navigate("Details", { params: { media_url: this.state.media_url, caption:this.state.caption, user_name: this.state.user_name }})}>
                <Image
                  key={this.state.index}
                  style={this.state.view == "grid" ? styles.image_grid : styles.image_list}
                  source={{uri: this.state.media_url }}
                />
            </TouchableHighlight>
          )
        );
    }
}

const styles = StyleSheet.create({
  image_grid: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "white",
    borderWidth: 2,
    height: 120,
    width: 120
  },
  image_list: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "white",
    borderWidth: 2,
    width: 320,
    height: 320
  }
});