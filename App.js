import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './components/auth/Landing';
import HomeScreen from './components/Home';
import ExploreScreen from './components/Explore';
import UploadsScreen from './components/Uploads';
import DetailsScreen from './components/Details';
import PostsScreen from './components/Posts';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{title: "Instagram"}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Uploads" component={UploadsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
