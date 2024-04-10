import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MobileScreen from './screens/MobileScreen';
import MobileDetailScreen from './screens/MobileDetailScreen';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    
    <NavigationContainer>
    <Tab.Navigator id="RootNavigator">
      <Tab.Screen name="Mobile" component={MobileScreen} />
      <Tab.Screen name="MobileDetail" component={MobileDetailScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});