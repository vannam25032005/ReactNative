import { useMemo, useState } from "react";
import {
  Alert,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Student, studentSections } from "./src/data/students";

import StudentRow from "./src/components/StudentRow";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StudentDirectoryScreen />
    </SafeAreaView>
  );
}

function StudentDirectoryScreen() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("vi");

    if (!normalizedQuery) {
      return studentSections;
    }

    return studentSections
      .map((section) => ({
        ...section,
        data: section.data.filter((student) =>
          `${student.fullName} ${student.studentId} ${student.className}`
            .toLocaleLowerCase("vi")
            .includes(normalizedQuery),
        ),
      }))
      .filter((section) => section.data.length > 0);
  }, [query]);

  const totalStudents = filteredSections.reduce(
    (total, section) => total + section.data.length,
    0,
  );

  const openStudent = (student: Student) => {
    window.alert(
      `${student.fullName}\n\n` +
        `Mã sinh viên: ${student.studentId}\n` +
        `Lớp: ${student.className}\n` +
        `Trạng thái: ${student.status}`,
    );
  };

  return (
    <SectionList
      sections={filteredSections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StudentRow student={item} onPress={openStudent} />
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Student Directory</Text>

          <Text style={styles.subtitle}>Danh bạ sinh viên theo khoa</Text>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Tìm tên, mã sinh viên hoặc lớp"
            style={styles.searchInput}
          />

          <Text style={styles.resultText}>
            Tìm thấy {totalStudents} sinh viên
          </Text>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Không tìm thấy sinh viên</Text>

          <Text>Không có sinh viên phù hợp với "{query.trim()}".</Text>
        </View>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      stickySectionHeadersEnabled={false}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  listContent: {
    padding: 16,
  },

  header: {
    marginBottom: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  searchInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  resultText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionHeader: {
    backgroundColor: "#ddd",
    padding: 10,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  separator: {
    height: 8,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
