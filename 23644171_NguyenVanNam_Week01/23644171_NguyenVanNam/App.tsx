import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>SmartCampus</Text>
    </View>
  );
}

function Avatar() {
  return (
    <Image
    source={{
      uri: 'https://pbs.twimg.com/media/G-UMRlYasAAh5Iv.jpg',
    }}
      style={styles.avatar}
      resizeMode="cover"
      accessibilityRole="image"
      accessibilityLabel="Ảnh đại diện Nguyễn Văn Nam"
    />
  );
}

function SearchField() {
  const [text, setText] = useState('');

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Tìm kiếm thông tin..."
      style={styles.input}
      accessibilityLabel="Ô tìm kiếm thông tin"
    />
  );
}

function ActionButton({ title, onPress, disabled = false }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}

export default function App() {
  const [saved, setSaved] = useState(false);

  const saveProfile = () => {
    setSaved(true);
    Alert.alert('Thông báo', 'Đã lưu hồ sơ sinh viên');
  };

  const viewProfile = () => {
    Alert.alert(
      'Thông tin',
      'Đang xem hồ sơ Nguyễn Văn Nam'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Header />
          <View style={styles.profile}>
            <Avatar />

            <View style={styles.profileInfo}>
              <Text style={styles.name}>
                Nguyễn Văn Nam
              </Text>

              <Text style={styles.studentId}>
                Mã SV: 23644171
              </Text>
            </View>
          </View>
          <SearchField />
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>
              Thông tin sinh viên
            </Text>

            <Text style={styles.infoText}>
              Email: 23644171.nguyenvannam@iuh.edu.vn
            </Text>

            <Text style={styles.infoText}>
              Lớp: DHKTPM19A
            </Text>
          </View>
          <ActionButton
            title={saved ? 'ĐÃ LƯU HỒ SƠ' : 'LƯU HỒ SƠ'}
            onPress={saveProfile}
            disabled={saved}
          />
          <ActionButton
            title="XEM HỒ SƠ"
            onPress={viewProfile}
          />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 2,
    borderColor: '#1e293b',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    paddingBottom: 20,
  },

  // Header
  header: {
    height: 55,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Profile
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#1976d2',
  },

  profileInfo: {
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  studentId: {
    marginTop: 5,
    fontSize: 13,
    color: '#777',
  },

  // TextInput
  input: {
    height: 45,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#b8c5d1',
    borderRadius: 7,
    backgroundColor: '#f5f7f9',
  },

  // Information
  infoBox: {
    marginHorizontal: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#a9cef3',
    borderRadius: 8,
    backgroundColor: '#edf6ff',
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 13,
    color: '#687888',
    marginTop: 3,
  },

  // Pressable
  button: {
    minHeight: 48,
    marginHorizontal: 35,
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPressed: {
    backgroundColor: '#07548a',
    transform: [{ scale: 0.96 }],
  },

  buttonDisabled: {
    backgroundColor: '#d3dbe5',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});