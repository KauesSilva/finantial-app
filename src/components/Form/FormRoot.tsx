import { ReactNode, FormEvent } from 'react'

interface FormRootProps {
  children: ReactNode
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function FormRoot({ children, onSubmit }: FormRootProps) {
  return (
    <form
      className="flex flex-col gap-6 p-6 bg-[#202024] rounded-md w-full max-w-[439px] z-10"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default FormRoot
