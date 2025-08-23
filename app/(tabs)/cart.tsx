import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <ThemedText>Open cart</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
