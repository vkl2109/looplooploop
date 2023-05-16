import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PlayGrid from "../Components/PlayGrid";

import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoopScreen () {

  const tempLoopArray = [
    {color: "green"},
    {color: "green"},
    {color: "green"},
    {color: "green"},
    {color: "green"},
    {color: "yellow"},
    {color: "red"},
    {color: "white"},
    {},
    {},
    {},
    {},
    {},
  ]

    return(
    <SafeAreaView style={styles.container}>
        <Text>Loop Screen</Text>
        <PlayGrid loopArray={tempLoopArray} />
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