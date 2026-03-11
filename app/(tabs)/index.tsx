<<<<<<< HEAD
import { StyleSheet, Text } from "react-native";
=======
import PageWrapper from "@/components/PageWrapper";
import Input from "@/components/ui/form/Input";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
>>>>>>> c1a94acdce95b6193a58c2c002931b658b5a6daf

import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <ScrollView>
<<<<<<< HEAD
      <Text className="text-[blue]">yo</Text>
=======
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
>>>>>>> c1a94acdce95b6193a58c2c002931b658b5a6daf
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
