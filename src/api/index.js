import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        // saving error
        console.error(e)
    }
}


const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
}
export default {
    storeData,
    getData,
}