import React from 'react';
import {Text, View, Button, SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Home';

const Stack = createStackNavigator();

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const Router = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // title: '',
            headerStyle: {
              backgroundColor: isDarkMode ? '#000' : 'skyblue',
            },
            headerTintColor: isDarkMode ? '#fff' : '#000',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
