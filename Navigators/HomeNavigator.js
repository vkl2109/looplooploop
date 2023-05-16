import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoopScreen from "../Screens/LoopScreen";
import SettingScreen from "../Screens/SettingScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoopScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoopScreen"
        component={LoopScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SettingScreen"
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
}