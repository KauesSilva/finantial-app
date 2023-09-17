import { ReactNode } from 'react'

interface FormFooterProps {
  chidlren: ReactNode
}

function FormFooter({ chidlren }: FormFooterProps) {
  return <div>{chidlren}</div>
}

export default FormFooter
