import React from "react";
import { SectionList, Text } from "react-native";

const sections = [
  {
    title: "Today",
    data: ["Exam", "Library"],
  },
  {
    title: "This Week",
    data: ["Scholarship"],
  },
  {
    title: "Earlier",
    data: ["Campus Event"],
  },
];

export default function Exercise6() {
  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => <Text style={{ padding: 20 }}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text
          style={{
            padding: 10,
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: "white",
          }}
        >
          {section.title}
        </Text>
      )}
      stickySectionHeadersEnabled
    />
  );
}
