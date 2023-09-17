import { ReactElement } from 'react'
import { InputProps } from '../Input'

type InputElement = ReactElement<InputProps>

interface FormFieldsProps {
  children: InputElement | InputElement[]
}

function FormFields({ children }: FormFieldsProps) {
  return <div className="flex flex-col gap-4">{children}</div>
}

export default FormFields
