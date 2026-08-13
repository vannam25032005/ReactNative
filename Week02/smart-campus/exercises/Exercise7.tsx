import React from "react";
import { View, Text, ScrollView } from "react-native";

const courses = [
  "Test1",
  "Test2",
  "Test3",
  "Test4",
  "Test5",
  "Test6",
  "Test7",
  "Test8",
  "Test9",
  "Test10",
];

export default function Exercise7() {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          padding: 10,
        }}
      >
        {courses.map((course) => (
          <View
            key={course}
            style={{
              flexBasis: 200,
              minWidth: 180,
              maxWidth: 400,
              flexGrow: 1,
              padding: 20,
              borderWidth: 1,
            }}
          >
            <Text>{course}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
