import React from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  Platform,
} from 'react-native';

type CustomError = {
  message: string;
  status?: number;
};

const WRONG_API_URL =
  'https://jsonplaceholder.typicode.com/wrong-api';

function isCustomError(
  error: unknown
): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as CustomError).message === 'string'
  );
}

export default function ApiErrorScreen() {
  const showError = (
    message: string
  ): void => {
    if (Platform.OS === 'web') {
      window.alert(message);
      return;
    }

    Alert.alert(
      'API Error',
      message
    );
  };

  const fetchWrongApi = async (): Promise<void> => {
    try {
      const response =
        await fetch(WRONG_API_URL);

      if (!response.ok) {
        const error: CustomError = {
          message: 'API request failed',
          status: response.status,
        };

        throw error;
      }

      await response.json();
    } catch (error: unknown) {
      if (isCustomError(error)) {
        showError(
          `${error.message}\nStatus: ${error.status}`
        );
      } else {
        showError(
          'Đã xảy ra lỗi không xác định'
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Gọi API lỗi"
        onPress={fetchWrongApi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});