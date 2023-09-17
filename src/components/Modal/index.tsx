import { useModalContext } from '@/context/ModalContext'
import { ReactNode } from 'react'
import { BsXLg } from 'react-icons/bs'

interface ModalProps {
  children: ReactNode
}

function Modal({ children }: ModalProps) {
  const { isModalOpen, closeModal } = useModalContext()

  if (!isModalOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/75 bg-opacity-70 flex items-center justify-center z-10 transition-all p-8">
      <div className="flex flex-col bg-[#202024] rounded-md w-full max-w-[439px]">
        <div className="px-6 pt-6">
          <BsXLg
            className="text-white hover:cursor-pointer "
            onClick={closeModal}
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
