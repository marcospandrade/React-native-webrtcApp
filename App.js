import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import CallTeste from './screens/CallTeste';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Call" component={CallTeste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
