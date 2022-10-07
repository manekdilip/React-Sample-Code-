// This file contains all the local storage management fuctions

import AsyncStorage from '@react-native-async-storage/async-storage';

// Save to local storage
export const setStorageValue = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

// Get from local storage
export const getStorageValue = async key => {
  return await AsyncStorage.getItem(key);
};

// Clear storage
export const clearStorage = async () => {
  await AsyncStorage.clear();
};

// Clear particular entry from storage
export const clearStorageByKey = async key => {
  await AsyncStorage.removeItem(key);
};
