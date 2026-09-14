import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_URL =
  'https://jsonplaceholder.typicode.com/posts';

export default function NewsFeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] =
    useState<boolean>(false);

  const fetchPosts = async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      const data: unknown =
        await response.json();

      const postsData = data as Post[];

      setPosts(postsData);
    } catch (error) {
      console.log(
        'Fetch posts error:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Bài 9 - News Feed
      </Text>

      <FlatList
        data={posts}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.title}
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

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});