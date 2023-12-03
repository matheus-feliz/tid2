import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/screen/Home";
import Result from "./app/screen/Result";
import TelaIncial from "./app/screen/telaInicial";
import { LogBox } from "react-native";
const Stack = createStackNavigator();
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs()
export default function App() {
  return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen
            name="TelaInicial"
            component={TelaIncial}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
