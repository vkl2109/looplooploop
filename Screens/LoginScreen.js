import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen () {
    return(
    <SafeAreaView style={styles.container}>
        <Text>Login Screen</Text>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: '100%'
  },
});