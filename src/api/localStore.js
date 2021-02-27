import AsyncStorage from '@react-native-async-storage/async-storage';


const setStringValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
      // save error
    //   console.error(e);
    }
}

const setObjectValue = async (key, value) => {
    try {
        await setStringValue(key, JSON.stringify(value));
    } catch (e) {
        // saving error
        // console.error(e);
    }
}

const getData = async (key, year, month) => {
    try {
        return await AsyncStorage.getItem(`${key}_${year}_${month}`);
    } catch (e) {
        // error reading value
        console.error(e);
    }
}

const getParsedData = async (key, defaultValue = []) => {
    try {
        const value = await getData(key);
        const existItem = !!value && (typeof value === 'string')

        return existItem ? JSON.parse(value) : defaultValue;
    } catch (e) {
        // error reading value
        console.error(e);
    }
}

export default {
    getData,
    getParsedData,
    setObjectValue,
    setStringValue,
}