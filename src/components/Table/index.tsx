import { useAuthContext } from '@/context/AuthContext'
import { useTransactionContext } from '@/context/TransactionContext'
import getAllData from '@/firebase/getAllData'
import { ITransaction } from '@/types/ITransactions'
import { useCallback, useEffect } from 'react'

function Table() {
  const { currentUser } = useAuthContext()
  const { setTransactions, transactions } = useTransactionContext()

  const fetchTransactions = useCallback(async () => {
    if (currentUser) {
      const { getAllDataResult } = await getAllData(
        'transactions',
        currentUser.uid,
      )
      const data = getAllDataResult.transactions
      setTransactions(data)
    }
  }, [currentUser, setTransactions, transactions])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <div className="flex flex-col justify-between gap-2">
      {transactions &&
        transactions.map((transaction: ITransaction, index: number) => (
          <div
            key={index}
            className="flex bg-[#29292E] rounded-md px-8 py-5 justify-between items-center"
          >
            <p className="text-base font-normal text-[#C4C4CC]">
              {transaction.description}
            </p>
            <p
              className={`text-base font-normal
              ${transaction.price >= 0 ? 'text-[#00B37E]' : 'text-[#F75A68]'}`}
            >
              {transaction.price}
            </p>
            <p className="text-base font-normal text-[#C4C4CC]">
              {transaction.category}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Table
