'use client'

import { useState } from 'react'
import signUp from '@/firebase/signUp'
import addData from '@/firebase/addData'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Input from '@/components/Input'
import { Form } from '@/components/Form'

function SignUp() {
  const { currentUser } = useAuthContext()
  const router = useRouter()

  if (currentUser) {
    router.push('/')
  }

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
    const { signUpResult, signUpError } = await signUp(
      formData.email,
      formData.password,
    )
    if (signUpError) {
      return console.log(signUpError)
    }
    if (!signUpResult?.user.uid) {
      console.log('An error ocurred while trying to get user ID')
      return
    }
    const colletionFormData = {
      uid: signUpResult.user.uid,
      email: formData.email,
      password: formData.password,
    }
    addData('users', colletionFormData.uid, colletionFormData)
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-[#121214] p-6">
      <Form.Root onSubmit={handleSubmit}>
        <Form.Title value={'Sign Up'} />
        {/* <div className="flex gap-4">
          <button className=" drop-shadow rounded-md transition-all w-full bg-[#29292E] py-4 px-6 text-[#C4C4CC] text-base flex gap-2 items-center justify-center hover:bg-[#29292ed3]">
            <BsGoogle className="text-[#00B37E]" />
            Sign Up with Google
          </button>
        </div> */}
        <Form.Fields>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 max-w-[439px]"
            onChange={handleFormData}
            value={formData.email}
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
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-4 max-w-[439px] bg-[#121214] text-[#7C7C8A] text-ellipsis rounded-md drop-shadow"
            onChange={handleFormData}
            value={formData.confirmPassword}
            minLength={6}
            required={true}
          />
        </Form.Fields>
        <Form.Button type={'Register'} />
        <p className="text-base text-[#E1E1E6] drop-shadow text-center">
          Already have an account?
          <Link href={'SignIn'} className="underline">
            Sign In
          </Link>
        </p>
      </Form.Root>
    </section>
  )
}

export default SignUp
