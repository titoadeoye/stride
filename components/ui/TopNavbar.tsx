import LogoutIcon from "@/assets/icons/logout.svg";
import { useThemeContext } from "@/providers/ThemeProvider";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TopNavbar() {
  const { theme } = useThemeContext();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <TouchableOpacity onPress={() => console.log("Logout pressed")}>
        <Text>Logo</Text>
      </TouchableOpacity>
      {/* <Image
        source={require("@/assets/logo.png")} // replace with your own logo
        style={styles.logo}
        resizeMode="contain"
      /> */}

      {/* Logout Button */}
      <TouchableOpacity onPress={() => console.log("Logout pressed")}>
        <LogoutIcon width={20} height={20} fill={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logo: {
    width: 100,
    height: 30,
  },
});
