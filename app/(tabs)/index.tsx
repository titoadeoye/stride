import PageWrapper from "@/components/PageWrapper";
import Input from "@/components/ui/form/Input";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <ScrollView>
      <PageWrapper>
        <View className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Input
            className="bg-[red]"
            placeholder="Product Search"
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
      </PageWrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
