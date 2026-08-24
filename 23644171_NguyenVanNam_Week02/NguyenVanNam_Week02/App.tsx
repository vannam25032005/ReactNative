import { useState } from 'react';

import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import { Course, courses } from './src/data/courses';
import CourseRow from './src/components/CourseRow';

export default function App() {
  const [query, setQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    `${course.title} ${course.instructor} ${course.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  const openCourse = (course: Course) => {
    if (typeof window !== 'undefined') {
      window.alert(
        `${course.title}\n\nGiảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`
      );
    } else {
      Alert.alert(
        course.title,
        `Giảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.screenTitle}>
              Courses
            </Text>

            <Text style={styles.subtitle}>
              Find the course you want to learn
            </Text>

            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              value={query}
              onChangeText={setQuery}
            />

            <Text style={styles.resultText}>
              {filteredCourses.length} courses found
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CourseRow
            course={item}
            onPress={openCourse}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No courses found
            </Text>

            <Text style={styles.emptyText}>
              Please try another keyword.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  listContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  screenTitle: {
    color: '#182035',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#697080',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 20,
  },
  searchInput: {
    minHeight: 52,
    color: '#182035',
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE1E8',
    borderRadius: 14,
    paddingHorizontal: 16,
  },
  resultText: {
    color: '#4E5665',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E1E5EC',
  },
  courseCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  courseTitle: {
    color: '#182035',
    fontSize: 18,
    fontWeight: '700',
  },
  instructor: {
    color: '#686F7D',
    fontSize: 14,
    marginTop: 7,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  category: {
    overflow: 'hidden',
    color: '#3157A4',
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: '#E8F0FF',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  studentCount: {
    color: '#596171',
    fontSize: 13,
  },
  separator: {
    height: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    color: '#182035',
    fontSize: 19,
    fontWeight: '700',
  },
  emptyText: {
    color: '#747B88',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});