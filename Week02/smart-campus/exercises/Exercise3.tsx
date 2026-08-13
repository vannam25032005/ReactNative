import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

export default function Exercise3() {
  const [error, setError] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          height: 150,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!error ? (
          <Image
            source={{ uri: "https://picsum.photos/300/150" }}
            style={{ width: "100%", height: "100%" }}
            onError={() => setError(true)}
          />
        ) : (
          <Text>No image</Text>
        )}
      </View>

      <Text style={{ fontSize: 20 }}>Test</Text>

      <Pressable
        style={{
          padding: 15,
          backgroundColor: "#222",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white" }}>Test</Text>
      </Pressable>
    </View>
  );
}
