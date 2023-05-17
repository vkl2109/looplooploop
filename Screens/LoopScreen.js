import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../Constants/colors";

import PlayGrid from "../Components/PlayGrid";
import PlayButton from "../Components/PlayButton";
import RecordButton from "../Components/RecordButton";
import ButtonBar from "../Components/ButtonBar";
import TitleDisplay from "../Components/TitleDisplay";
import ExportButton from "../Components/ExportButton";

export default function LoopScreen () {

    return(
    <SafeAreaView style={styles.container}>
        <ButtonBar>
          <TitleDisplay />
          <ExportButton />
        </ButtonBar>
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