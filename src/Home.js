import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { color1, color2 } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Welcome</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Viral Feed</Text>
      <Btn bgColor={color1} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={color2} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      <Btn bgColor='white' textColor={color2} btnLabel="Calendar" Press={() => props.navigation.navigate("Schedule")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;