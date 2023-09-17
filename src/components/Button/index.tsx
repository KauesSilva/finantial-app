import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = ComponentProps<'button'>

function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'drop-shadow rounded-md transition-all w-full bg-[#00875F] text-white font-bold text-base hover:bg-[#00875ec5]',
        className,
      )}
      {...props}
    />
  )
}

export default Button
