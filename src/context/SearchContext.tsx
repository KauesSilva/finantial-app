'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextProps {
  searchedValue: string
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchedValue, setSearchedValue] = useState('')

  return (
    <SearchContext.Provider value={{ searchedValue, setSearchedValue }}>
      {children}
    </SearchContext.Provider>
  )
}
