import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeCharacter = async (id:string, character:object) => {
    return new Promise(async (resolve, reject) => {
        try {
            const jsonValue = JSON.stringify(character)
            
            await AsyncStorage.setItem(id, jsonValue)
            .then(() => {
                resolve(character)
            })
          } catch (e) {
            console.log(e)
          }
    })
}

export const getData = async (id:string) => {
    return new Promise(async (resolve, reject) => {
        try {
            await AsyncStorage.getItem(id)
            .then((item) => {
                resolve(JSON.parse(item))
        
            })
            .catch((error) => {
                console.log(error)
            })
    
        } catch (e) {
            console.log(e)
        }
    })
}