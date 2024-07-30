"use client"
import { DeleteUserComment } from '@/actions/action'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from './use-toast'

export default function DeleteComment({id}:any) {
    async function handleDelete() {
        await DeleteUserComment(id , '/Dashboard')
        toast({
            title:'Comment Deleted'
        })
    }
  return (
    <Trash onClick={handleDelete} className='text-red-600 cursor-pointer' />
  )
}
