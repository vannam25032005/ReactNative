import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
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
  'https://dummyjson.com/products/search';

export default function ProductSearchScreen() {
  const [keyword, setKeyword] =
    useState<string>('');

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState<boolean>(false);

  const fetchProducts = async (
    keyword: string,
    limit: number
  ): Promise<void> => {
    try {
      setLoading(true);

      const url =
        `${API_URL}?q=${encodeURIComponent(
          keyword
        )}&limit=${limit}`;

      const response = await fetch(url);

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

  const handleSearch = (): void => {
    fetchProducts(keyword, 10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Bài 11 - Product Search
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm"
        value={keyword}
        onChangeText={setKeyword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>
          Tìm kiếm
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="small"
          style={styles.loading}
        />
      )}

      <FlatList
        data={products}
        keyExtractor={(item) =>
          item.id.toString()
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
    backgroundColor:'white'
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  loading: {
    marginVertical: 10,
  },

  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});