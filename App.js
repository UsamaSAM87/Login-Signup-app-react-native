import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Verification from './src/Verification';
import Schedule from './src/Schedule';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;