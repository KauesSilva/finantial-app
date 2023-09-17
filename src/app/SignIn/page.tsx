'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'
import signIn from '@/firebase/signIn'
import { Form } from '@/components/Form'
import Input from '@/components/Input'
import Link from 'next/link'

function SignIn() {
  const { currentUser } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    }
  }, [currentUser, router])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signIn(formData.email, formData.password)
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-[#121214] p-6">
      <Form.Root onSubmit={handleSubmit}>
        <Form.Title value={'Sign In'} />
        <Form.Fields>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 max-w-[439px]"
            onChange={handleFormData}
            value={formData.email}
            minLength={6}
            required={true}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="p-4 max-w-[439px]"
            onChange={handleFormData}
            value={formData.password}
            minLength={6}
            required={true}
          />
        </Form.Fields>
        <Form.Button type={'Sign In'} />
        <p className="text-base text-[#E1E1E6] drop-shadow text-center">
          Do not have an account?
          <Link href={'SignUp'} className="underline">
            Sign Up
          </Link>
        </p>
      </Form.Root>
    </section>
  )
}

export default SignIn
