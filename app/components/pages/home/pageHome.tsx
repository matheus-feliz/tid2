/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Linking,
  Image,
  LogBox,
  ScrollView
} from "react-native";
import Tts from "react-native-tts";
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs()

function PageHome({ navigation }: any): JSX.Element {
  const [isTts, setTts] = useState(true);
  var data = [
    { id: 1, titulo: "Como usar o status do whatsapp" },
    { id: 2, titulo: "Como encontrar contatos no whatsapp" },
    { id: 3, titulo: "Como  adicionar contatos" },
    { id: 4, titulo: "Como enviar arquivo no whatsapp" },
    { id: 5, titulo: "Como Atualizar perfil no whatsapp" },
  ];
  function openUrl(){
    const url = 'https://tutor3idade.agenciex.com.br'
    Linking.openURL(url)
  }
 
  const pressTts = async (titulo: string) => {
    await Tts.speak(titulo);
  };
  const pressStop = () => {
    setTts(false);
    Tts.stop();
  };
  const aperta = (item: any) => {
    let titulo = item.titulo;
    pressStop();
    navigation.navigate("Result", {
      titulo: titulo,
    });
  };
   const TtsInicio = async () => {
      setTts(true);
      data.forEach(async (d) => {
        await pressTts(`assunto ${d.id} ${d.titulo}`);
      });
      await pressTts("Para repetir aprete o botao verde redondo");
      const timeoutId = setTimeout(() => {
        setTts(false)
      }, 21800);
    }
  useEffect(() => {
    Tts.setDefaultLanguage("pt-BR");
    TtsInicio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = ({ item }: any) => (
    <TouchableOpacity onPress={() => aperta(item)} style={styles.p}>
      <View style={styles.itemContainer}>
        <Text style={styles.textList}>{item.titulo}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.fundo}>
        <ScrollView style={styles.scroll} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic">
        <View style={styles.lista}>
          <FlatList
            data={data}
            renderItem={renderList}
            keyExtractor={(item: any) => item.id}
          />
        </View>
          </ScrollView>
        <TouchableOpacity style={styles.saibaMais} onPress={()=>openUrl()}>
          <Text style={styles.textB}>Click e Saiba mais</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.voz}
            onPress={() => (isTts ? pressStop() : TtsInicio())}
          >
            <Image
              source={
                isTts
                  ? require("../../images/x.png")
                  : require("../../images/falando.png")
              }
              style={styles.img}
            />
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{
    top: 50,
  },
  textB:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  fundo: {
    height: "100%",
    backgroundColor: "lightgrey",
    justifyContent: 'center',
    alignItems: 'center'
  },
  busca: {
    flexDirection: "row",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
  },
  img: {
    width: 35,
    height: 35,
  },
  voz: {
    position: "absolute",
    left: 20,
    top: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center",
  },
  saibaMais:{
      position: "absolute",
      right: 30,
      top: 10,
      width: 220,
      height: 50,
      borderRadius: 10,
      backgroundColor: "seagreen",
      justifyContent: "center",
      alignItems: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    height: 40,
    width: 355,
  },
  lista: {
    backgroundColor:'coral',
    marginTop: "-0.2%",
    height: "100%",
    width: '95%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
    left: 9
  },
  textList: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
  },
  p: {
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default PageHome;
