import AsyncStorage from '@react-native-async-storage/async-storage';

const setStringValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
      // save error
      console.error(e);
    }
}

const setObjectValue = async (key, value) => {
    try {
        await setStringValue(key, JSON.stringify(value));
    } catch (e) {
        // saving error
        console.error(e);
    }
}

const getData = async (key, defaultValue = null) => {
    try {
        return await AsyncStorage.getItem(key) || defaultValue;
       
    } catch (e) {
        // error reading value
        console.error(e);
    }
}

const getParsedData = async (key, defaultValue = null) => {
    try {
        const value =  await getData(key, defaultValue);
        
        return value !== undefined ? JSON.parse(value) : value;
    } catch (e) {
        // error reading value
        console.error(e);
    }
}

export default {
    getData,
    getParsedData,
    setObjectValue,
}