
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from './Post'

export default class Posts extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        is_loading: true,
        token: props.token,
        view: props.view || "grid",
        page: 1,
        data: props.data
      };

    }

    renderPost(post, element) {
      return(
        <View>
            <Post post={ element.item } token={ post.state.token } view={ post.state.view } />
        </View>
      )
    }

    render() {
        return (
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{
                alignSelf: 'flex-start',
              }}
              numColumns={this.props.view == "grid" ? 3 : 1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(element) => this.renderPost(this, element)}
            />
        )
    }
}