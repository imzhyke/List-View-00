import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fetch from './assets/Fetch';
import OptionList from './OptionList';

 function App() {
  return (
    <View style={styles.container}>
      <OptionList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});

export default App