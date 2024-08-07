import { Text, SafeAreaView, StyleSheet, ImageBackground, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { useState } from 'react';

// or any files within the Snack

function _onPressButton() {
  }

export default function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

const [fontes] = useFonts({
  'Madimi-One': require('./assets/fonts/MadimiOne'),
  'Kodchasan': require('./assets/fonts/Kodchasan-BoldSEGUNDARIA.ttf')
})

  this.tela1 = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.imgfundo}source={require('./assets/img/fundinho-bala1.png')}/>
        
        <View style={styles.circuloLogo}>
          <Image style={styles.imglogo} source={require('./assets/img/Logo.png')}/>
        </View>
        <Text style={styles.textTitulo}>Fonoteka</Text>
        <View style={styles.containerLogin}>   
        <View style={styles.retangLogin}>
        <Text style={styles.textField}>E-mail/Nome</Text>
        <TextInput
            placeholder="E-mail/Nome:"
            onChangeText={text => setText(text)}
            value={text}
            style={{bottom: '15%',backgroundColor: '#ffffff', margin: '10%', height: '12%', borderRadius: 8, paddingHorizontal: '2%', width: '80%'}}
          />
        <Text style={styles.textField2}>Senha</Text>
        <TextInput
            placeholder="Senha:"
            onChangeText={text2 => setText2(text2)}
            value={text2}
            style={{bottom: '15%', backgroundColor: '#ffffff', margin: '5%', height: '12%', borderRadius: 8, paddingHorizontal: '2%', width: '80%'}}
          />
        <TouchableOpacity
            style={styles.botaoEntrar}
            onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'>
            <Text style={styles.textBotaoEntrar}>Entrar</Text>
        </TouchableOpacity>
        </View>
        
        </View>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  imglogo: {
    width: '100%',
    height: '100%',
    right: '5%',
    opacity: 1,
    zIndex: 3
  },
  textField: {
    fontFamily: 'Kodchasan',
    bottom: '8%',
    right: '25%'
  },
  textField2: {
    fontFamily: 'Kodchasan',
    bottom: '12%',
    right: '33%'
  },
  botaoEntrar:{
    backgroundColor:'#FA5F18',
    borderRadius:10,
    width: '35%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgfundo: {
    transform: [{rotate: '0deg'}],
    width: '100%',
    height: '100%',
    opacity: 0.9,
    zIndex: 1,
    bottom: '35%',
    left: '0%'
  },
  circuloLogo: {
    width: '50%',
    height: '20%',
    
    position: 'absolute',
    borderRadius: '100%',
    alignItems: 'center',
    zIndex: 5,
    bottom: '75%',
  },
  containerLogin: {
    flex: 1,
    width: '90%',
    height: '70%',
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute',
    margin: '5%',
  },
  retangLogin: {
    flex: 1,
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
    opacity: 1,
    zIndex: 1,
    borderRadius: '25px'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#beebff',
    padding: 8,
  },
  textTitulo: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Madimi-One',
    zIndex: 5,
    bottom: '68%'
  },
  textBotaoEntrar: {
    fontFamily: 'Kodchasan',
    color: '#FFF'
  }
});
