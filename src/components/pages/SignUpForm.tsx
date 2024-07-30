"use client"

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { type registerDataType } from '@/lib/types'
import { RegisterAction } from '@/actions/action'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

export default function SignUPForm(): React.JSX.Element {

    const router = useRouter();

    const [FormData, setFormData] = useState<registerDataType>({
        name:"",
        email:"",
        password:""
    })

    function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setFormData((prev : registerDataType) => {
            return {
                ...prev, [event.target.name]: event.target.value
            }
        })
        console.log(FormData)        
    }

    async function handleSubmit() : Promise<void>{
        const data = await RegisterAction(FormData)
        console.log(data);
        
        console.log(data)
        if(data?.success){
            router.push("/sign-in")
            toast({
                title : 'Regiater success Lets login'
            })
        }
    }

    return (
        <form action={handleSubmit} className='w-full flex flex-col gap-5 px-7 max-sm:px-0'>
            <Input onChange={handleInput} name='name' type='text' placeholder='Enter your Name' className='mt-10 border-neutral-400' />
            <Input onChange={handleInput} name='email' type='email' placeholder='Enter your Email' className='border-neutral-400' />
            <Input onChange={handleInput} name='password' type='password' placeholder='Enter your Password' className='border-neutral-400' />
            <Button type='submit'>Register</Button>
        </form>
    )
}
