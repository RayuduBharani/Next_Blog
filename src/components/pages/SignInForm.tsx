"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ILoginData, ILoginFunc } from '@/lib/types'
import { LoginAction } from '@/actions/action'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

export default function SignInForm() {
    const router = useRouter();

    const [loginData, setLoginData] = useState<ILoginData>({
        email: '',
        password: ''
    })

    function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setLoginData((prev) => {
            return {
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(): Promise<void> {
        const data: ILoginFunc = await LoginAction(loginData)
        
        if (data.success) {
            router.push("/")
            toast({
                title : 'Your Are logined'
            })
        }
        else{
            toast({
                title: 'Password incorrect'
            })
        }
    }

    return (
        <form action={handleSubmit} className='w-full flex flex-col gap-5 px-7 max-sm:px-0'>
            <Input onChange={handleInput} name="email" type='email' placeholder='Enter your Email' className='mt-10 border-neutral-400' />
            <Input onChange={handleInput} name="password" type='password' placeholder='Enter your Password' className='border-neutral-400' />
            <Button>Login</Button>
        </form>
    )
}
