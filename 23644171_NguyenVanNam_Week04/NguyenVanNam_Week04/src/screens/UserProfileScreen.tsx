import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const API_URL =
  'https://jsonplaceholder.typicode.com/users/1';

export default function UserProfileScreen() {
  const [user, setUser] =
    useState<User | null>(null);

  const fetchUser = async (): Promise<void> => {
    try {
      const response = await fetch(API_URL);

      const data: unknown =
        await response.json();

      const userData = data as User;

      setUser(userData);
    } catch (error) {
      console.log(
        'Fetch user error:',
        error
      );
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return (
      <View style={styles.container} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Bài 10 - User Profile
      </Text>

      <Text style={styles.name}>
        {user?.name}
      </Text>

      <Text style={styles.info}>
        Username: {user?.username}
      </Text>

      <Text style={styles.info}>
        Email: {user?.email}
      </Text>

      <Text style={styles.info}>
        Phone: {user?.phone}
      </Text>

      <Text style={styles.info}>
        Website: {user?.website}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  info: {
    fontSize: 16,
    marginBottom: 12,
  },
});