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
    useState<boolean>(true);

  const [refreshing, setRefreshing] =
    useState<boolean>(false);

  const fetchProducts = async (
    isRefreshing: boolean = false
  ): Promise<void> => {
    try {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response =
        await fetch(
          `${API_URL}&t=${Date.now()}`
        );

      if (!response.ok) {
        throw new Error(
          'Không thể lấy dữ liệu'
        );
      }

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
      if (isRefreshing) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  };

  const handleRefresh = (): void => {
    fetchProducts(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#2196F3"
        />

        <Text style={styles.loadingText}>
          Đang tải dữ liệu...
        </Text>
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
        {refreshing ? (
          <ActivityIndicator
            color="#fff"
          />
        ) : (
          <Text style={styles.buttonText}>
            Tải lại dữ liệu
          </Text>
        )}
      </TouchableOpacity>

      {refreshing && (
        <Text style={styles.refreshingText}>
          Đang làm mới dữ liệu...
        </Text>
      )}

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
    backgroundColor: 'white'
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  refreshButton: {
    height: 45,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  refreshingText: {
    textAlign: 'center',
    color: '#2196F3',
    marginBottom: 10,
  },

  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
});