import { Auth, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import firebaseErrorFormatter, {
  ErrorMessages,
} from '@/utils/firebaseErrorFormatter'
import firebaseApp from './config'

const auth: Auth = getAuth(firebaseApp)

async function signIn(email: string, password: string) {
  let signInResult = null
  const signInError = null
  try {
    signInResult = await signInWithEmailAndPassword(auth, email, password)
  } catch (error: unknown) {
    signInResult = firebaseErrorFormatter((error as ErrorMessages).code)
  }
  return { signInResult, signInError }
}

export default signIn
