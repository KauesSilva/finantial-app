import {
  getFirestore,
  DocumentData,
  getDocs,
  collection,
} from 'firebase/firestore'
import firebaseApp from './config'

const db = getFirestore(firebaseApp)

export default async function getAllData(collectionName: string, id: string) {
  let getAllDataResult = <DocumentData>[]
  let getAllDataError = null
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    querySnapshot.forEach((doc) => {
      if (doc.id === id) {
        getAllDataResult = doc.data()
      }
    })
  } catch (error: unknown) {
    getAllDataError = error
  }

  return { getAllDataResult, getAllDataError }
}
