import { ReactNode } from "react";
import { View } from "react-native";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <View className="px-5 py-5">
            {children}
        </View>
    )
}