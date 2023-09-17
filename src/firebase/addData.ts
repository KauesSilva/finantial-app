import {
  getFirestore,
  doc,
  setDoc,
  DocumentData,
  updateDoc,
  getDoc,
  arrayUnion,
} from 'firebase/firestore'
import firebaseErrorFormatter, {
  ErrorMessages,
} from '@/utils/firebaseErrorFormatter'
import firebaseApp from './config'

const db = getFirestore(firebaseApp)

export default async function addData(
  collectionName: string,
  id: string,
  data: DocumentData,
) {
  let addDataResult = null
  let addDataError = null
  try {
    const docRef = doc(db, collectionName, id)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      await setDoc(docRef, {})
    }
    addDataResult = await updateDoc(docRef, {
      transactions: arrayUnion(data),
    })
  } catch (error: unknown) {
    addDataError = firebaseErrorFormatter((error as ErrorMessages).code)
  }

  return { addDataResult, addDataError }
}
