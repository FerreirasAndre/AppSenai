import { StyleSheet, Text, View } from 'react-native';

export default function ComponentCarlosHenrique() {
  return (
    <View style={styles.container}>
      <Text>Carlos Henrique!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});