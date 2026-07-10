import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComponentFlavio from './src/component/ComponentFlavio';
import ComponentRaquelResende from './src/component/ComponentRaqueResende';
import ComponentCarlosHenrique from './src/component/ComponentCarlosHenrique';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <ComponentFlavio/>
      <ComponentFlavio/>
<ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentFlavio/>
      <ComponentRaquelResende/>
      <ComponentCarlosHenrique/>
      
    </View>
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
