import { Auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import firebaseErrorFormatter, {
  ErrorMessages,
} from '@/utils/firebaseErrorFormatter'
import firebaseApp from './config'

const auth: Auth = getAuth(firebaseApp)

async function signUp(email: string, password: string) {
  let signUpResult = null
  let signUpError = null
  try {
    signUpResult = await createUserWithEmailAndPassword(auth, email, password)
  } catch (error: unknown) {
    signUpError = firebaseErrorFormatter((error as ErrorMessages).code)
  }
  return { signUpResult, signUpError }
}

export default signUp
