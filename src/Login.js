import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'

export default function Login() {
  return (
    <Background>
      <View style={{width: 350, alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginTop: 150}}>
        <Text style={{color: "white", fontSize: 25}}>Login Now</Text>
      </View>
    </Background>
  )
}