import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Bai1_UseState from "./src/exercises/Bai1_UseState";
import Bai2_UseEffect from "./src/exercises/Bai2_UseEffect";
import Bai3_UseContext from "./src/exercises/Bai3_UseContext";
import Bai4_UseReducer from "./src/exercises/Bai4_UseReducer";
import Bai5_UseMemo from "./src/exercises/Bai5_UseMemo";
import Bai6_TodoApp from "./src/exercises/Bai6_TodoApp";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("MENU");

  const renderScreen = () => {
    switch (currentScreen) {
      case "BAI1":
        return <Bai1_UseState />;
      case "BAI2":
        return <Bai2_UseEffect />;
      case "BAI3":
        return <Bai3_UseContext />;
      case "BAI4":
        return <Bai4_UseReducer />;
      case "BAI5":
        return <Bai5_UseMemo />;
      case "BAI6":
        return <Bai6_TodoApp />;
      default:
        return (
          <ScrollView contentContainerStyle={styles.menuContainer}>
            <Text style={styles.title}>BÀI TẬP THỰC HÀNH CHƯƠNG 3</Text>

            <View style={styles.buttonWrapper}>
              <Button
                title="Bài 3.1.1: useState (Form Họ Tên)"
                onPress={() => setCurrentScreen("BAI1")}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Bài 3.1.2: useEffect (Kết nối)"
                onPress={() => setCurrentScreen("BAI2")}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Bài 3.1.3: useContext (User info)"
                onPress={() => setCurrentScreen("BAI3")}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Bài 3.1.4: useReducer (Form Login)"
                onPress={() => setCurrentScreen("BAI4")}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Bài 3.1.5: useMemo & useCallback"
                onPress={() => setCurrentScreen("BAI5")}
              />
            </View>
            <View style={[styles.buttonWrapper, { marginTop: 20 }]}>
              <Button
                color="green"
                title=" BÀI TỔNG HỢP: TODO APP (10đ)"
                onPress={() => setCurrentScreen("BAI6")}
              />
            </View>
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen !== "MENU" && (
        <View style={styles.header}>
          <Button
            title="⬅ Trở về Menu"
            color="gray"
            onPress={() => setCurrentScreen("MENU")}
          />
        </View>
      )}

      {/* Hiển thị màn hình */}
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: 40 },
  header: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "flex-start",
  },
  menuContainer: { flexGrow: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  buttonWrapper: { marginBottom: 15 },
});
