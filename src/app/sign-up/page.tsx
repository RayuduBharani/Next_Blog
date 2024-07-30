import SignUPForm from '@/components/pages/SignUpForm'
import { ModeToggle } from '@/components/toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

async function SignUp() {
  return (
    <div className='w-full h-screen'>
      <nav className='w-full h-20 flex justify-center'>
        <div className='h-full w-[70%] flex justify-between items-center pl-12 max-sm:pl-0'>
          <h1 className='font-bold text-2xl'>NextBlog</h1>
          <Button type='button'><Link href={"/sign-in"}>Sign In</Link></Button>
        </div>
        <ModeToggle />
      </nav>

      <div className='w-full h-[598px] flex justify-center items-center'>
        <div className='w-[30%] h-[69%] border-2 border-neutral-300 bg-card  px-5 rounded-lg shadow-inner max-lg:w-[50%] max-md:w-[60%] max-sm:w-[89%]'>
          <h1 className='font-bold text-center text-xl pt-8'>Sign Up</h1>
          <SignUPForm />
          <p className='font-semibold mt-5 text-center'>Already have an account ?<Link href={"/sign-in"} className='text-blue-600'> Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp