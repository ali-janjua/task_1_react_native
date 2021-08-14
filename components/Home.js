import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UploadsScreen from './Uploads';
import ExploreScreen from './Explore';

const Tab = createBottomTabNavigator()

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
            <Tab.Navigator initialRouteName="Uploads" >
              <Tab.Screen
                  name="Uploads"
                  component={() => <UploadsScreen props={this.props} />}
                  options={{
                      tabBarIcon: ({ tintColor }) => (
                          <View>
                              <Icon
                                  style={[{ color: tintColor }]}
                                  size={28}
                                  name={'home'}
                              />
                          </View>
                      ),
                  }}
              />
               <Tab.Screen
                  name="Explore"
                  component={() => <ExploreScreen props={this.props} />}
                  options={{
                      tabBarIcon: ({ tintColor }) => (
                          <View>
                              <Icon
                                  style={[{ color: tintColor }]}
                                  size={28}
                                  name={'compass'}
                              />
                          </View>
                      ),
                  }}
              />
            </Tab.Navigator>
          )
  }
}

