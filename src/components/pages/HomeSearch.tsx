"use client"

import React, { ChangeEvent, useState } from 'react'
import { Button } from '../ui/button'
import { SearchPostAction } from '@/actions/action'
import { Input } from '../ui/input'
import { IsearchData } from '@/lib/types'
import { useRouter } from 'next/navigation'

function HomeSearch() {
  const router = useRouter()

  const [searchInputData, setSearchINputData] = useState<string>('')
  const [searchData, setSearchData] = useState<IsearchData[] | null>()

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchINputData(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data: IsearchData[] = await SearchPostAction(searchInputData)
    setSearchData(data)
    setSearchINputData('')
  }

  return (
    <div className="w-full h-fit mt-12 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-[60%] h-fit flex gap-8 max-sm:gap-2 max-sm:w-[90%]">
        <Input onChange={handleInput} value={searchInputData} className="border-foreground" placeholder="Search what do you want . . ." required />
        <Button>Search</Button>
      </form>
      {
        searchData != null ? (
          searchData.length > 0 ? (
            <div className="w-[60%] grid grid-cols-3 gap-6 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
              {searchData.sort((a, b) => a.title.localeCompare(b.title)).map((data, index) => (
                <div key={index} className="h-[320px] bg-secondary rounded-lg p-3">
                  <h1 className="truncate text-sm font-bold">{data?.title}</h1>
                  <div className="w-full h-[130px] mt-2 rounded-lg overflow-hidden">
                    <img className="w-full h-full" src={data.image} alt={data.title} />
                  </div>
                  <p className="w-full h-12 overflow-hidden text-xs text-neutral-500 mt-3">{data.content}</p>
                  <div className="w-full h-fit flex justify-end truncate">
                    <p className="text-xs mt-2 font-bold pr-3 truncate">-- created by {data.userId.name} </p>
                  </div>
                  <Button className="w-full mt-3" onClick={()=>{
                    router.push(`/Blogs/${data._id}`)
                  }}>View</Button>
                </div>
              ))}
            </div>
          ) : (
            <h1 className='mt-20 font-bold text-xl animate-pulse'>Posts are not found </h1>
          )
        ) : (
          <h1 className='mt-20 font-medium text-lg animate-pulse'>Search for New Blogs</h1>
        )
      }
    </div>
  )
}

export default HomeSearch
