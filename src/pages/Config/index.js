import { StyleSheet, Text, View } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Pagina Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
  },
});