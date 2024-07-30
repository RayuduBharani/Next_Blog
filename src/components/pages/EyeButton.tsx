"use client"

import { Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function EyeButton({blogId} : any) {
    const router = useRouter()
    return (
        <Eye onClick={
            () => {
                router.push(`/Blogs/${blogId}`)
            }
        } className="text-green-600 size-5 cursor-pointer" />
    )
}
