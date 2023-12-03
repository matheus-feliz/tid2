import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
  LogBox
} from "react-native";
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs()

function TelaIncial({ navigation }: any): JSX.Element {
  const navegar = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground
      source={require("../components/images/veios.jpg")} // Substitua pelo caminho real da sua imagem
      style={styles.image}
    >
      <View style={styles.porcima}>
        <TouchableOpacity style={styles.inicioB} onPress={() => navegar()}>
          <Text style={styles.textIncio}> Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textIncio: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inicioB: {
    elevation: 9,
    top: 30,
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(46, 139, 87, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  porcima: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default TelaIncial;
