import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const API_URL =
  'https://dummyjson.com/products?limit=10';

export default function PullToRefreshScreen() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState<boolean>(false);

  const [refreshing, setRefreshing] =
    useState<boolean>(false);

  const fetchProducts = async (): Promise<void> => {
    try {
      setLoading(true);

      const response =
        await fetch(API_URL);

      const data: unknown =
        await response.json();

      const result =
        data as ProductResponse;

      setProducts(result.products);
    } catch (error) {
      console.log(
        'Fetch products error:',
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async (): Promise<void> => {
    try {
      setRefreshing(true);

      const response =
        await fetch(API_URL);

      const data: unknown =
        await response.json();

      const result =
        data as ProductResponse;

      setProducts(result.products);
    } catch (error) {
      console.log(
        'Refresh products error:',
        error
      );
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (
    loading &&
    products.length === 0
  ) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Bài 15 - Pull To Refresh
      </Text>

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={handleRefresh}
        disabled={refreshing}
      >
        <Text style={styles.refreshText}>
          {refreshing
            ? 'Đang tải lại...'
            : 'Tải lại dữ liệu'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) =>
          item.id.toString()
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text>
              Giá: ${item.price}
            </Text>

            <Text>
              Danh mục: {item.category}
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

  refreshButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  refreshText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
});