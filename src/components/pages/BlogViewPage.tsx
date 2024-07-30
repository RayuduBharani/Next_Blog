"use client"

import { BlogViewPageProps, IPostComment } from '@/lib/types';
import React, { ChangeEvent, useState } from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { PostCommentAction } from '@/actions/action';
import CommentPage from './CommentPage';

function BlogViewPage(props: BlogViewPageProps) {
    
    const blogViewData = props.blogViewData
    const GetComments = props.GetComments
    const GetPresestUserData = props.GetPresestUserData
    
    // console.log('blogdata',blogViewData);
    // console.log('Getcomment' , GetComments)
    // console.log("GetPresestUserData" , GetPresestUserData);
    

    const router = useRouter()

    const [comment, setComment] = useState<IPostComment>({
        comment: '',
        userId: GetPresestUserData.userInfo.user_id,
        postId: blogViewData.data?. _id
    })

    // console.log("comment",comment);
    

    function handleComment(event: ChangeEvent<HTMLTextAreaElement>) {
        setComment((prev) => {
            return {
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    async function FetchPostComment() {
        PostCommentAction(comment, `Blogs/${blogViewData.data?.userId._id}`)
        setComment({
            comment: '',
            userId:  GetPresestUserData.userInfo.user_id,
            postId: blogViewData.data?._id
        })
    }

    return (
        <div className='w-full h-fit bg-background mt-[75px] flex justify-center'>
            <div className='w-full h-fit flex justify-center'>
                <div className='w-[45%] max-lg:w-[65%] max-md:w-[70%] max-sm:w-[90%]'>
                    <div className='flex'>
                        <div className='w-8 h-8 rounded-full overflow-hidden mt-2 flex'>
                            <img className='w-full h-full' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="Author avatar" />
                        </div>
                        <div className='w-[80%]'>
                            <p className='font-bold ml-3 mt-1'>{blogViewData.data?.userId.name}</p>
                            <p className='ml-2 text-xs font-semibold text-neutral-500'>{blogViewData.data?.category}</p>
                        </div>
                    </div>
                    <div>
                        <button className='border-b-2 border-black dark:border-white mt-7 ml-9' onClick={() => {
                            router.back()
                        }}>Back</button>
                    </div>
                    <div className='w-full h-fit mt-6 rounded-xl overflow-hidden'>
                        <img className='w-full object-contain' src={blogViewData.data?.image} alt="Blog image" />
                    </div>
                    <div className='w-full h-fit'>
                        <h1 className='mt-5 font-bold text-lg'>{blogViewData.data?.title}</h1>
                        <p className='py-5 text-neutral-500 w-full h-fit'>{blogViewData.data?.content}</p>
                        <p className='text-center pb-3 font-bold truncate'>Created By {blogViewData.data?.userId.name}</p>
                    </div>
                    <div>
                        <form className='w-full mb-5 flex flex-col items-center' action={FetchPostComment}>
                            <textarea onChange={handleComment} value={comment.comment} name="comment" className='w-full h-32 border-2 outline-none border-blue-400 rounded-lg p-2 ' placeholder='Leave a Comment . . .' required></textarea>
                            <Button className='mt-5'>Add Comment</Button>
                        </form>
                        <CommentPage GetComments={GetComments} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogViewPage;
