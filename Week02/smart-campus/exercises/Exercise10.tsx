import React from "react";
import { View, Text, Pressable, Image } from "react-native";

export default function Exercise10() {
  return (
    <View style={{ padding: 20 }}>
      <Text accessibilityRole="header" style={{ fontSize: 25 }}>
        Accessibility Demo
      </Text>

      <Image
        source={{
          uri: "https://picsum.photos/300/150",
        }}
        style={{
          width: "100%",
          height: 150,
          marginTop: 20,
        }}
        accessible
        accessibilityLabel="Course image"
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open course"
        accessibilityState={{ disabled: false }}
        style={{
          minHeight: 48,
          backgroundColor: "black",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Open Course</Text>
      </Pressable>

      <Pressable
        disabled
        accessibilityRole="button"
        accessibilityLabel="Submit"
        accessibilityState={{ disabled: true }}
        style={{
          minHeight: 48,
          backgroundColor: "gray",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
