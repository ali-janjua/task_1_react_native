import React, { Component } from 'react'
import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import Post from './Post'


export default class Explore extends Component {
  constructor(props) {
    props = props.props
    super(props);
    this.state = {
      is_loading: true,
      token: props.route.params.params.token,
      current_url: 'https://www.instagram.com/explore/tags/all/?__a=1&access_token='+props.route.params.params.token+'&limit=10',
      next_url: '',
      previous_url: '',
      posts_data: []
    };

  }

  fetchData() {
    if (this.state.current_url == null || (this.state.current_url == this.state.previous_url)) return;
    this.setState({ is_loading: true })
    fetch(this.state.current_url).then((response) => response.json()).then((json) => {
      console.log(json)
      //this.setState({ posts_data: this.state.posts_data.concat(json.data) }) // Infinite scroll
      //this.setState({ is_loading: false })
      //this.setState({ previous_url: this.state.current_url})
      //this.setState({ current_url: json.paging.next})
    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.fetchData()
  }


  renderPost(self, element) {
    return(
      <View>
          <Post post={ element.item } token={ self.state.token } view="grid" />
      </View>
    )
  }

  renderFooter(self) {
    return(
      self.state.is_loading ? (
        <View>
         <ActivityIndicator size="small" />
        </View>
      ): (
         <View>
         </View>
      )
    )
  }

  // Called, when the list ends
  handleLoadMore(self, distanceFromEnd ) {
    if (distanceFromEnd < 0) return;

    if (self.state.current_url == null) return;

    console.log("Loading more...")
    self.fetchData()
    
  }
  
  render() {

      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
              scrollEnabled={true}
              contentContainerStyle={{
                alignSelf: 'flex-start',
              }}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.posts_data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(element) => this.renderPost(this, element)}
              onEndReached={(distanceFromEnd) => this.handleLoadMore(this, distanceFromEnd)}
              onEndReachedThreshold={0}
              ListFooterComponent={() => this.renderFooter(this)}
            />
          </View>
      );
  }
}
