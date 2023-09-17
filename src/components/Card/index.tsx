import { useTransactionContext } from '@/context/TransactionContext'
import { ReactNode, useCallback, useEffect, useState } from 'react'

interface CardProps {
  type: 'Income' | 'Withdraws' | 'Total'
  icon: ReactNode
}

function Card({ icon, type }: CardProps) {
  const { transactions } = useTransactionContext()
  const [value, setValue] = useState<number>(0)

  const handleValue = useCallback(() => {
    if (type === 'Income') {
      const positiveIncome = transactions
        .filter((transaction) => transaction.price > 0)
        .reduce((total, transaction) => total + transaction.price, 0)
      setValue(positiveIncome)
    } else if (type === 'Withdraws') {
      const negativeWithdraws = transactions
        .filter((transaction) => transaction.price < 0)
        .reduce((total, transaction) => total + transaction.price, 0)
      setValue(negativeWithdraws)
    } else if (type === 'Total') {
      const positiveIncome = transactions
        .filter((transaction) => transaction.price)
        .reduce((total, transaction) => total + transaction.price, 0)
      setValue(positiveIncome)
    }
  }, [transactions, type])

  useEffect(() => {
    if (transactions) {
      handleValue()
    }
  }, [handleValue, transactions])

  return (
    <div className="min-w-[352px] min-h-[137px] pl-8 pr-6 py-6 bg-[#323238] rounded-md flex flex-col gap-3 drop-shadow hover:scale-95 transition-all">
      <div className="flex justify-between">
        <p className="drop-shadow text-[#C4C4CC]">{type}</p>
        {icon}
      </div>
      <div>
        <p className="drop-shadow text-[#E1E1E6] font-bold text-4xl">
          {value.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Card
