import { Pressable, Text, View } from "react-native";
import { Student } from "../data/students";

interface StudentRowProps {
  student: Student;
  onPress: (student: Student) => void;
}

export default function StudentRow({ student, onPress }: StudentRowProps) {
  return (
    <Pressable onPress={() => onPress(student)}>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {student.fullName}
        </Text>

        <Text>Mã SV: {student.studentId}</Text>
        <Text>Lớp: {student.className}</Text>
        <Text>Trạng thái: {student.status}</Text>
      </View>
    </Pressable>
  );
}
