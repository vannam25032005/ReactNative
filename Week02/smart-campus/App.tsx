import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

import Exercise1 from "./exercises/Exercise1";
import Exercise2 from "./exercises/Exercise2";
import Exercise3 from "./exercises/Exercise3";
import Exercise4 from "./exercises/Exercise4";
import Exercise5 from "./exercises/Exercise5";
import Exercise6 from "./exercises/Exercise6";
import Exercise7 from "./exercises/Exercise7";
import Exercise8 from "./exercises/Exercise8";
import Exercise9 from "./exercises/Exercise9";
import Exercise10 from "./exercises/Exercise10";

export default function App() {
  const [page, setPage] = useState(0);

  const screens = [
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    Exercise7,
    Exercise8,
    Exercise9,
    Exercise10,
  ];

  if (page !== 0) {
    const Screen = screens[page - 1];

    return (
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => setPage(0)}>
          <Text style={{ padding: 20 }}>← Back</Text>
        </Pressable>
        <Screen />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>10 Exercises</Text>

      {screens.map((_, index) => (
        <Pressable
          key={index}
          onPress={() => setPage(index + 1)}
          style={{
            padding: 20,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          <Text>Exercise {index + 1}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
