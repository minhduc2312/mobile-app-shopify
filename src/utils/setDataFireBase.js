import { doc, collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "_config";

export const setDataFireBase = async (collectionQuery, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await setDoc(doc(db, collectionQuery, token.slice(token.indexOf('[') + 1, token.indexOf(']'))), {
                token
            });
            resolve(docRef)
        } catch (error) {
            reject(error)
        }
    })

}