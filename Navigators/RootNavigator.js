import { auth, db } from "../firebase";
import AuthNavigator from "./AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./HomeNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={auth.currentUser ? "HomeNavigator" : "AuthNavigator"}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthNavigator"
        component={AuthNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeNavigator"
        component={HomeNavigator}
      />
    </Stack.Navigator>
  );
}
