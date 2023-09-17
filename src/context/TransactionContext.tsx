'use client'

import { ITransaction } from '@/types/ITransactions'
import { ReactNode, createContext, useContext, useState } from 'react'

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextProps {
  transactions: ITransaction[]
  setTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>
}

const TreansactionContext = createContext<TransactionContextProps | undefined>(
  undefined,
)

export function useTransactionContext() {
  const context = useContext(TreansactionContext)
  if (!context) {
    throw new Error(
      'useTransactionContext must be used within a TransactionContextProvider',
    )
  }
  return context
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  return (
    <TreansactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TreansactionContext.Provider>
  )
}
