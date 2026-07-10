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

      <ComponentFlavio />
      <ComponentRaquelResende />
      <ComponentCarlosHenrique />

      <Text style={styles.receita}>
        Receita de café:{"\n\n"}
        • 200 ml de água{"\n"}
        • 2 colheres de pó de café{"\n"}
        • Ferva a água{"\n"}
        • Coloque o pó no filtro{"\n"}
        • Despeje a água lentamente{"\n"}
        • Sirva e aproveite!
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  receita: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    lineHeight: 24,
    width: '90%',
  },
});