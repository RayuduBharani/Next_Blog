'use client'

import { DeleteBlog } from '@/actions/action'
import { Trash } from 'lucide-react'
import React from 'react'
import { useToast } from '../ui/use-toast'

export default function DeleteIcon({blogId} : any) {
    const { toast } = useToast()
    async function deleteBlog() {
        await DeleteBlog(blogId , '/Dashboard')
        toast({title :'Post Sucessfully deleted'})
    }
  return (
    <Trash className="text-red-600 size-5 cursor-pointer" onClick={deleteBlog} />
  )
}
