import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import NewsFeedScreen from './src/screens/NewsFeedScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import ProductSearchScreen from './src/screens/ProductSearchScreen';
import ApiErrorScreen from './src/screens/ApiErrorScreen';
import FilterGenericScreen from './src/screens/FilterGenericScreen';
import PaginationScreen from './src/screens/PaginationScreen';
import PullToRefreshScreen from './src/screens/PullToRefreshScreen';

type ScreenName =
  | 'menu'
  | 'bai9'
  | 'bai10'
  | 'bai11'
  | 'bai12'
  | 'bai13'
  | 'bai14'
  | 'bai15';

export default function App() {
  const [screen, setScreen] =
    useState<ScreenName>('menu');

  if (screen === 'bai9') {
    return <NewsFeedScreen />;
  }

  if (screen === 'bai10') {
    return <UserProfileScreen />;
  }

  if (screen === 'bai11') {
    return <ProductSearchScreen />;
  }

  if (screen === 'bai12') {
    return <ApiErrorScreen />;
  }

  if (screen === 'bai13') {
    return <FilterGenericScreen />;
  }

  if (screen === 'bai14') {
    return <PaginationScreen />;
  }

  if (screen === 'bai15') {
    return <PullToRefreshScreen />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.menu}
    >
      <Text style={styles.header}>
        BookStore
      </Text>

      <Text style={styles.subHeader}>
        TypeScript - API & Async
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai9')}
      >
        <Text style={styles.buttonText}>
          Bài 9 - News Feed
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai10')}
      >
        <Text style={styles.buttonText}>
          Bài 10 - User Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai11')}
      >
        <Text style={styles.buttonText}>
          Bài 11 - Product Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai12')}
      >
        <Text style={styles.buttonText}>
          Bài 12 - API Error
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai13')}
      >
        <Text style={styles.buttonText}>
          Bài 13 - Filter Generic
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai14')}
      >
        <Text style={styles.buttonText}>
          Bài 14 - Pagination
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('bai15')}
      >
        <Text style={styles.buttonText}>
          Bài 15 - Pull To Refresh
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});