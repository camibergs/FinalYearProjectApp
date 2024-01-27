import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBottom from './src/components/navigation/NavigationBottom';

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
     <NavigationBottom />
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
