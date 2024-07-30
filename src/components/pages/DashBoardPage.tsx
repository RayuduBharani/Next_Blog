import { EditIcon } from 'lucide-react'
import React from 'react'
import EyeButton from './EyeButton'
import DeleteIcon from './DeleteIcon'

export async function DashBoard({ GettingDashBoard }: any) {

    return (
        <div>
            {
                GettingDashBoard?.data.length > 0 ? (
                    GettingDashBoard?.data.map((blog: any, index: number) => {
                        return (
                            <div key={index} className="w-full h-[210px] p-4 flex gap-2">
                                <div className="w-[22%] bg-background h-full rounded-xl bg-contain overflow-hidden">
                                    <img className="w-full h-full " src={blog.image} alt="" />
                                </div>
                                <div className="w-[77%] bg-background h-full rounded-xl p-4">
                                    <p className="font-bold truncate text-lg">{blog.title}  <span className="font-normal text-sm text-blue-600"> ({blog.category})</span> </p>
                                    <p className='w-full h-[68px] text-sm text-neutral-500 pt-1 overflow-hidden'>{blog.content}</p>
                                    <div className="w-full flex justify-around pt-5">
                                        <EyeButton blogId = {blog._id}/>
                                        <DeleteIcon blogId={blog._id}/>
                                        <EditIcon className="text-blue-600 size-5 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) :
                    <div className="w-full h-fit">
                        <h1 className="font-blod animate-pulse text-center pt-24">Can&apos;t find Your Blogs</h1>
                    </div>
            }
        </div>
    )
}
