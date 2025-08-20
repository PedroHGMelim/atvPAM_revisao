import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen.js';
import InitialScreen from './src/screens/InitialScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Initial"}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Initial" component={InitialScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}