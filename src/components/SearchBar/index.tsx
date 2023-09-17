'use client'

import { ChangeEvent, useState } from 'react'
import Input from '@/components/Input'
import { useSearchContext } from '@/context/SearchContext'
import { HiMagnifyingGlass } from 'react-icons/hi2'

function SearchBar() {
  const { setSearchedValue } = useSearchContext()
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearch = () => {
    setSearchedValue(inputValue)
  }

  return (
    <div className="flex gap-3 w-full">
      <Input
        placeholder="Search for income"
        className="p-4 w-full"
        onChange={handleInput}
        value={inputValue}
      />
      <button
        className="inline-flex font-bold items-center gap-3 drop-shadow rounded-md transition-all border border-[#00B37E] text-[#00B37E] px-8 py-3 hover:scale-105"
        onClick={handleSearch}
      >
        <HiMagnifyingGlass className="text-xl" />
        Search
      </button>
    </div>
  )
}

export default SearchBar
