import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type InputProps = ComponentProps<'input'>

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'bg-[#121214] text-[#7C7C8A] text-ellipsis rounded-md drop-shadow',
        className,
      )}
      {...props}
    />
  )
}

export default Input
