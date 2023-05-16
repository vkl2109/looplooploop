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

import PlayGrid from "../Components/PlayGrid";
import PlayButton from "../Components/PlayButton";
import RecordButton from "../Components/RecordButton";
import ButtonBar from "../Components/ButtonBar";
import { colors } from "../Constants/colors";

export default function LoopScreen () {

    return(
    <SafeAreaView style={styles.container}>
        <Text>Hi Vincent</Text>
        <PlayGrid />
        <ButtonBar>
          <RecordButton />
          <PlayButton />
        </ButtonBar>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: '100%',
    backgroundColor: colors.grey
  },
});