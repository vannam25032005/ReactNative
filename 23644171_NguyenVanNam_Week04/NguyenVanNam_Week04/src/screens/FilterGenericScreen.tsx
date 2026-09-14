import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { filterByName } from './filterByName';

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Le Van A',
    email: 'a@gmail.com',
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    email: 'b@gmail.com',
  },
  {
    id: 3,
    name: 'Tran Van C',
    email: 'c@gmail.com',
  },
];

export default function FilterGenericScreen() {
  const filteredUsers =
    filterByName(users, 'nguyen');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Bài 13 - Filter Generic
      </Text>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              {item.email}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});