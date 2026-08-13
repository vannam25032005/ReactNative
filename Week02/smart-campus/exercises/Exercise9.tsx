import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function Exercise9() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (!name.trim()) {
      setError("Vui lòng nhập họ và tên.");
      return;
    }

    if (!/^\d{10}$/.test(id)) {
      setError("Mã sinh viên phải gồm 10 chữ số.");
      return;
    }

    if (!email.includes("@")) {
      setError("Email không hợp lệ.");
      return;
    }

    if (summary.length > 300) {
      setError("Tóm tắt không quá 300 ký tự.");
      return;
    }

    setError("");
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 15, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Student ID"
        value={id}
        onChangeText={setId}
        style={{ borderWidth: 1, padding: 15, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 15, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Summary"
        value={summary}
        onChangeText={setSummary}
        multiline
        style={{
          borderWidth: 1,
          padding: 15,
          height: 120,
        }}
      />

      {error !== "" && <Text style={{ marginTop: 10 }}>{error}</Text>}

      <Pressable
        onPress={validate}
        style={{
          marginTop: 15,
          padding: 15,
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>
    </View>
  );
}
