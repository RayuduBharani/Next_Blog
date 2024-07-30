import SignInForm from '@/components/pages/SignInForm'
import { ModeToggle } from '@/components/toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SignIn() {
  return (
    <div className='w-full h-screen'>
      <nav className='w-full h-20 flex justify-center'>
        <div className='h-full w-[70%] flex justify-between items-center pl-12 max-sm:pl-0'>
          <h1 className='font-bold text-2xl'>NextBlog</h1>
          <Button><Link href={"/sign-up"}>Sign In</Link></Button>
        </div>
        <ModeToggle />
      </nav>

      <div className='w-full h-[598px] flex justify-center items-center'>
        <div className='w-[30%] h-[60%] border-2 border-neutral-300 bg-card  px-5 rounded-lg shadow-inner max-lg:w-[50%] max-md:w-[60%] max-sm:w-[89%]'>
          <h1 className='font-bold text-center text-xl pt-8'>Sign In</h1>
          <SignInForm/>
          <p className='font-semibold mt-5 text-center'>Don&apos;t have an accoount ?<Link href={"/sign-up"} className='text-blue-600'> Register Now</Link></p>
        </div>
      </div>
    </div>
  )
}
