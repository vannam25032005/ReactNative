import React from "react";
import { ScrollView, View, Text } from "react-native";

export default function Exercise2() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View
        style={{
          padding: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ fontSize: 24, lineHeight: 34 }}>
          Đây là một đoạn văn bản rất dài để kiểm tra khả năng xuống dòng khi
          nội dung nhiều hơn và kích thước chữ lớn hơn.
        </Text>
      </View>
    </ScrollView>
  );
}
