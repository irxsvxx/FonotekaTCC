import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from '../../fonts/useLoadFonts';


SplashScreen.preventAutoHideAsync();

export default function Profile() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tutor, setTutor] = useState('');

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Pagina Perfil</Text>
        <View onLayout={onLayoutRootView} style={styles.container2}>
          <View onLayout={onLayoutRootView} style={styles.container3}>
            <Text style={styles.nome}>Luana Querosene</Text>
          </View>

          <View onLayout={onLayoutRootView} style={styles.container4}>
            <Text style={styles.text}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              placeholder="useless placeholder"
              placeholderTextColor="#000"
              keyboardType="numeric"
            />

            <Text style={styles.text}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="useless placeholder"
              placeholderTextColor="#000"
            />

            <Text style={styles.text}>Tutor(a)</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTutor}
              value={tutor}
              placeholder="useless placeholder"
              placeholderTextColor="#000"
            />

            <View style={styles.buttonContainer}>
              <Button
                title='Salvar Alteracoes'
                onPress={() => Alert.alert('Situação', 'As alterações foram salvas!')}
                color='#FF7714'
              />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container2: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    height: '75%',
    width: '100%',
    top: '25%',
  },
  container3: {
    backgroundColor: 'white',
    height: '10%',
    width: '90%',
    bottom: '13%',
    alignItems: 'center',
  },
  container4: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    height: '50%',
    width: '100%',
    bottom: '10%'
  },
  text: {
    color: '#003F55',
    right: '33%',
    top: '8%',
    fontFamily: 'Kodchasan_Bold',
    fontSize: 20,
    marginLeft: '10%',
  },
  nome: {
    fontFamily: 'Kodchasan_Bold',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#d7edf6',
    height: '6%',
    width: '80%',
    margin: '6%',
    marginBottom: '1%',
    borderWidth: 1,
    padding: 15,
    borderColor: '#0097CC',
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    top: '9%',
  },
});

