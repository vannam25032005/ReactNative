import React from "react";
import { View, Text } from "react-native";

function CourseCard() {
  return (
    <View style={{ borderWidth: 1, padding: 10 }}>
      <Text>Mobile Development</Text>
    </View>
  );
}

export default function Exercise1() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Campus Dashboard</Text>

      <CourseCard />
      <CourseCard />

      <View style={{ height: 20 }} />

      <Text>Test</Text>
    </View>
  );
}
