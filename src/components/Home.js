import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  );
};

export default Home;
