import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fetch from './assets/Fetch';

export default function App() {
  return (
    <View style={styles.container}>
    <Fetch/>
    </View>
  );
}
//test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
