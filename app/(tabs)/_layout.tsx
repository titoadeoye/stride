import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// icons
import CartIcon from "@/assets/icons/cart.svg";
import HomeIcon from "@/assets/icons/home.svg";
import OrdersIcon from "@/assets/icons/orders.svg";

// theme
import TopNavbar from "@/components/ui/TopNavbar";
import { useThemeContext } from "@/providers/ThemeProvider";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useThemeContext();

  return (
    <>
      <TopNavbar />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {
              backgroundColor: theme.colors.primary,
            },
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ size, focused }) => (
              <TabIcon size={size} focused={focused} Icon={HomeIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "",
            tabBarIcon: ({ size, focused }) => (
              <TabIcon size={size} focused={focused} Icon={CartIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "",
            tabBarIcon: ({ size, focused }) => (
              <TabIcon size={size} focused={focused} Icon={OrdersIcon} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

type TabIconProps = {
  focused: boolean;
  Icon: React.FC<{ width?: number; height?: number; fill?: string }>;
  size: number;
};

export function TabIcon({ focused, Icon, size }: TabIconProps) {
  const { theme } = useThemeContext();

  return (
    <View
      style={{
        backgroundColor: focused ? "white" : "transparent",
        paddingBlock: 4,
        paddingInline: 7,
        borderRadius: 7,
      }}
    >
      <Icon
        width={size}
        height={size}
        fill={focused ? theme.colors.primary : "#FFFFFF"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
