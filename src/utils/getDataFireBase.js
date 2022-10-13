import { collection, getDocs } from "firebase/firestore";
import { db } from "_config";

export const getDataFromFireBase = async (collectionQuery) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = []
            const colRef = collection(db, collectionQuery);
            const docsSnap = await getDocs(colRef);
            docsSnap.forEach((doc) => {
                const payload = doc.data();
                data.push(payload);
            });
            resolve(data)
        } catch (err) {
            reject(err)
        }
    })

}