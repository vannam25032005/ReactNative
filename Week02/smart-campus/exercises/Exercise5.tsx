import React from "react";
import { FlatList, View, Text } from "react-native";

const data = [
  { id: "1", title: "Test1" },
  { id: "2", title: "Test2" },
  { id: "3", title: "Test3" },
  { id: "4", title: "Test4" },
  { id: "5", title: "Test5" },
  { id: "6", title: "Test6" },
  { id: "7", title: "Test7" },
  { id: "8", title: "Test8" },
  { id: "9", title: "Test9" },
  { id: "10", title: "Test10" },
];

export default function Exercise5() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 20 }}>
          <Text>{item.title}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
      ListHeaderComponent={<Text style={{ fontSize: 25 }}>Announcements</Text>}
      ListFooterComponent={<Text>End</Text>}
      ListEmptyComponent={<Text>No announcements</Text>}
    />
  );
}
