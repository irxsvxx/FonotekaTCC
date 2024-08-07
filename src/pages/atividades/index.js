import { StyleSheet, Text, View } from 'react-native';

export default function Atividades() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Pagina Atividades</Text>
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