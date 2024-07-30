import React from 'react'

export default function CommentPage({ GetComments }: any) {
    
    return (
        <div className='w-full truncate'>
            <p className='font-bold text-lg mb-3'>See All Comments</p>
            {
                GetComments.data.map((com : any , index : number) => {       
                    console.log(com.userId);
                              
                    
                    return (
                        <div key={index} className='w-full h-fit mb-2'>
                            <div className='w-full h-fit p-2 flex'>
                                <div className='w-8 h-8 rounded-full overflow-hidden mt-0.5'>
                                    <img className='w-full h-full' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="Author avatar" />
                                </div>
                                <div>
                                    
                                    <p className='text-xs font-bold ml-2'>{com.userId?.name}</p>
                                    <p className='text-xs font-bold text-neutral-500 ml-2'>{new Date(com.postId.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                            <div className='w-full h-fit px-12 py-1 mb-5'>
                                <p className=' text-neutral-500'>{com.comment} </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
