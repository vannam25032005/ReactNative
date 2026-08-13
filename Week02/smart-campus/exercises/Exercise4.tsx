import React from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

export default function Exercise4() {
  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Pressable
        style={({ pressed }) => ({
          minHeight: 48,
          backgroundColor: pressed ? "gray" : "black",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>

      <Pressable
        disabled
        style={{
          minHeight: 48,
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Disabled</Text>
      </Pressable>

      <View
        style={{
          minHeight: 48,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    </View>
  );
}
