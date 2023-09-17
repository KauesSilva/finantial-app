'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextProps {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export function useModalContext() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const contextValue: ModalContextProps = {
    isModalOpen,
    openModal,
    closeModal,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}
