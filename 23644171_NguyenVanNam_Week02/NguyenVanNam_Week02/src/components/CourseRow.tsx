import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Course } from '../data/courses';

interface CourseRowProps {
  course: Course;
  onPress: (course: Course) => void;
}

export default function CourseRow({
  course,
  onPress,
}: CourseRowProps) {
  return (
    <Pressable
      onPress={() => onPress(course)}
      style={({ pressed }) => [
        styles.courseCard,
        pressed && styles.courseCardPressed,
      ]}
    >
      <View>
        <Text style={styles.courseTitle}>
          {course.title}
        </Text>

        <Text style={styles.instructor}>
          Giảng viên: {course.instructor}
        </Text>

        <Text style={styles.instructor}>
          Danh mục: {course.category}
        </Text>

        <Text style={styles.studentCount}>
          {course.students} sinh viên
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E1E5EC',
  },

  courseCardPressed: {
    opacity: 0.7,
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

  studentCount: {
    color: '#596171',
    fontSize: 13,
    marginTop: 16,
  },
});