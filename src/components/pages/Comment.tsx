import { GetUserComment } from '@/actions/action'
import { Trash } from 'lucide-react'
import React from 'react'
import DeleteComment from '../ui/DeleteComment';

async function CommentPage2({ GetUserComment }: any) {

  console.log(GetUserComment);

  return (
    <div>
      <div className="w-full h-[100px] p-4 flex gap-2 flex-wrap">
        {
          GetUserComment.data.map((dat: any , index : number) => {
            return (
              <div key={index} className="w-[100%] bg-background h-full rounded-xl px-4 py-2 flex justify-between items-center">
                <h1 className='truncate'>{dat.comment}</h1>
                <DeleteComment id={dat._id}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CommentPage2
