export interface ErrorMessages {
  [key: string]: string
}

const firebaseErrorFormatter = (errorMessage: string): string => {
  const errorMessages: ErrorMessages = {
    'auth/app-deleted': 'The Firebase project has been deleted or disabled.',
    'auth/app-not-authorized':
      'App not authorized to use Firebase Authentication.',
    'auth/argument-error':
      'Invalid argument passed to a Firebase Authentication function.',
    'auth/invalid-api-key':
      'Invalid API key. Please check the Firebase project settings.',
    'auth/invalid-user-token': 'Invalid user token. Please log in again.',
    'auth/network-request-failed':
      'Network request failed. Check your connection and try again.',
    'auth/operation-not-allowed':
      'The operation is not allowed. Please check the Firebase project settings.',
    'auth/requires-recent-login':
      'The operation requires the user to log in again before being executed.',
    'auth/too-many-requests':
      'Too many requests sent to the server. Please try again later.',
    'auth/unauthorized-domain':
      'Unauthorized domain to use Firebase Authentication.',
    'auth/user-disabled':
      'The user account has been disabled by an administrator.',
    'auth/user-token-expired':
      'The user authentication token has expired. Please log in again.',
    'auth/web-storage-unsupported':
      'The browser does not support web storage or the user has disabled this feature.',
    'auth/email-already-in-use':
      'The email address is already in use. Please use another email.',
    'auth/invalid-email': 'The email address provided is invalid.',
    'auth/weak-password': 'The password must be at least 6 characters long.',
    default:
      'An error occurred while trying to perform the operation. Please try again later.',
  }

  const errorCode: string = errorMessage.split(':')[1]
  return errorMessages[errorCode] || errorMessages.default
}

export default firebaseErrorFormatter
