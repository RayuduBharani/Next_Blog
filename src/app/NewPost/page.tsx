import { DecodedUser } from '@/actions/action'
import PostContent from '@/components/pages/post'


async function NewPost() {

    const Decoded = await DecodedUser();
  
  return (
    <div className='w-full h-fit mt-[75px] flex justify-center items-center p-10 max-sm:px-6'>
      <PostContent DecodedUser={Decoded}/>
    </div>
  )
}

export default NewPost