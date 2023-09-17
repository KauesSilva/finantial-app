'use client'

import Card from '@/components/Card'
import { Form } from '@/components/Form'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table'
import { useAuthContext } from '@/context/AuthContext'
import addData from '@/firebase/addData'
import { ITransaction } from '@/types/ITransactions'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCurrencyDollar,
} from 'react-icons/bs'

function Home() {
  const { currentUser } = useAuthContext()
  const router = useRouter()
  const [formData, setFormData] = useState<ITransaction>({
    description: '',
    price: 0,
    category: '',
  })
  useEffect(() => {
    if (!currentUser) {
      router.push('/SignIn')
    }
  }, [currentUser, router])

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'price') {
      const nummericPrice = parseFloat(value)
      return setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: nummericPrice,
      }))
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentUser) {
      const { addDataError } = await addData(
        'transactions',
        currentUser.uid,
        formData,
      )
      if (!addDataError) {
        setFormData({
          description: '',
          price: 0,
          category: '',
        })
      }
    }
  }

  return (
    <main className="flex flex-col w-full h-screen items-center bg-[#202024] py-8">
      <Modal>
        <Form.Root onSubmit={handleForm}>
          <Form.Title value={'New transaction'} />
          <Form.Fields>
            <Input
              type="text"
              name="description"
              placeholder="Description"
              className="p-4 max-w-[439px]"
              onChange={handleFormData}
              value={formData.description}
              maxLength={50}
              required={true}
            />
            <Input
              type="number"
              name="price"
              placeholder="Price"
              className="p-4 max-w-[439px]"
              maxLength={8}
              onChange={handleFormData}
              required={true}
            />
            <Input
              type="text"
              name="category"
              placeholder="Category"
              className="p-4 max-w-[439px]"
              onChange={handleFormData}
              value={formData.category}
              maxLength={50}
              required={true}
            />
          </Form.Fields>
          <Form.Button type={'Register'} />
        </Form.Root>
      </Modal>
      <div className="flex flex-col w-4/5 sm:w-5/6">
        <Navbar />
        <div className="flex gap-4 overflow-x-scroll mt-8 lg:justify-between justify-center no-scrollbar">
          <Card
            icon={<BsArrowUpCircle className="text-[#00B37E] text-3xl" />}
            type={'Income'}
          />
          <Card
            icon={<BsArrowDownCircle className="text-[#F75A68] text-3xl" />}
            type={'Withdraws'}
          />
          <Card
            icon={<BsCurrencyDollar className="text-white text-3xl" />}
            type={'Total'}
          />
        </div>
        <div className="mt-12">
          <SearchBar />
        </div>
        <div className="mt-6">
          <Table />
        </div>
      </div>
    </main>
  )
}

export default Home
