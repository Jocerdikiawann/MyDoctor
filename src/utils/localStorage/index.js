import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    //ubah object menjadi string dengan json.stringify
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //kembalikan dari string ke objek dengan parser
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
