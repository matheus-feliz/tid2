import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, LogBox, ScrollView} from 'react-native';
import axios  from 'axios';
import Tts from 'react-native-tts';
import { useNavigation } from '@react-navigation/native';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs()

function PageResult({ route}:any): JSX.Element {
    const [isTts, setTts ] = useState(true);
    const [part1, SetPart1] = useState<string>('')
    const [part2, SetPart2] = useState<string>('')
    const [part3, SetPart3] = useState<string>('')
    const navigation = useNavigation();

    const TtsInicio =  ()=>{
      setTts(true)
      pressTts(route.params.titulo)
      pressTts(part1)
      pressTts(part2)
      pressTts(part3)
      const timeoutId = setTimeout(() => {
        setTts(false)
      }, 5000);
    };  
    useEffect(() => {
    const busca:any = async ()=>{
     const  response =  await axios.post('https://backtid2.fly.dev/busca',{
        titulo : route.params.titulo
      })
      SetPart1(response.data[0])
      SetPart2(response.data[1])
      SetPart3(response.data[2])
    }
    busca();
    Tts.setDefaultLanguage('pt-BR')
    const timeoutId = setTimeout(() => {
      TtsInicio();
    }, 1000);
    setTts(false)
   return()=>(
     pressStop()
   )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const pressTts = (titulo: string)=>{
    Tts.speak(titulo);
  };
  const pressStop = ()=>{
    setTts(false)
    Tts.stop();
  };
  const voltar=()=>{
    pressStop()
    navigation.goBack();
  }
  

  return (
   <>
    <View>
    <TouchableOpacity style={styles.voz} onPress={() => isTts ? pressStop() : TtsInicio()}>
        <Image source={isTts ? require('../../images/x.png') : require('../../images/falando.png')} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saibaMais} onPress={() => voltar()}>
        <Image source={require('../../images/voltar.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
    <View style={styles.center}>
        <Text style={styles.text}>{route.params.titulo}</Text>
          <ScrollView style={styles.viw} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.textP}> {part1} 
            {part2} {part3} </Text>
          </ScrollView>
      </View>
   </>    
  );
}


const styles = StyleSheet.create({
  textB:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  saibaMais:{
    position: "absolute",
    right: 30,
    top: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center",
},
  viw:{
    width:350,
    height: '68%',
    bottom:10
  },
  text:{
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold'
   
  },
  textP:{
    fontSize: 18,
    textAlign: 'justify'
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
    busca:{
      flexDirection:'row',
     },
    button:{
      width: 40,
      height:40,
      backgroundColor: 'white',
    },
    img:{
      width: 35,
      height:35,
    },
    voz:{
      elevation:8,
      left: 20,
      top: 5,
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: "seagreen",
      justifyContent: "center",
      alignItems: "center",
    },
    input:{
      backgroundColor: '#ffffff',
      height:40,
      width: 355,
    },
    lista:{
      backgroundColor:'crimson',
      height: '100%',
    },
    textList:{
      fontSize:25,
      fontWeight: 'bold',
      color:'#ffffff',
    },
   itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#ffffff',
    },
    p: {
      padding: 5,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
    },
  });
  
export default PageResult;