import MyTabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";

const _layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            borderBottomWidth: 0,
            borderTopWidth: 0,
            elevation: 0,
          },
          headerShadowVisible: false,
          headerStyle: {
            paddingHorizontal: "15%",
            borderBottomWidth: 0,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
        tabBar={(props) => {
          return <MyTabBar {...props} />;
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
};

export default _layout;
