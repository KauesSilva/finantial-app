'use client'

import { useState, useContext, useEffect, createContext } from 'react'
import { onAuthStateChanged, getAuth, Auth, User } from 'firebase/auth'
import firebaseApp from '@/firebase/config'
import Spinner from '@/components/Spinner'

export const auth: Auth = getAuth(firebaseApp)

interface AuthContextProps {
  currentUser: User | null
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser)
      } else {
        setCurrentUser(null)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {isLoading ? <Spinner /> : children}
    </AuthContext.Provider>
  )
}
