import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
  Platform,
} from "react-native";

export default function Exercise8() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 25 }}>Student Form</Text>

        <TextInput
          placeholder="Name"
          style={{ borderWidth: 1, padding: 15, marginTop: 15 }}
        />

        <TextInput
          placeholder="Student ID"
          style={{ borderWidth: 1, padding: 15, marginTop: 15 }}
        />

        <TextInput
          placeholder="Email"
          style={{ borderWidth: 1, padding: 15, marginTop: 15 }}
        />

        <TextInput
          placeholder="Summary"
          multiline
          style={{
            borderWidth: 1,
            padding: 15,
            marginTop: 15,
            height: 150,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
