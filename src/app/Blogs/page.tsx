import { AllBlogsAction } from '@/actions/action'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

async function BlogsPage() {

  const totalblogs = await AllBlogsAction()

  return (
    <div className='mt-[75px] w-full h-fit max-lg:flex max-lg:justify-center'>
      <div className='w-full h-fit pt-6 pb-10 flex justify-center flex-wrap gap-10 max-lg:w-[90%] max-md:w-full'>
        {
          totalblogs?.data?.map((blog :any , index : number) => {
            
            return (
              <div key={index} className="w-[20%] relative  h-[340px] bg-secondary rounded-lg p-3 shadow-xl max-lg:w-[28%] max-md:w-[40%] max-sm:w-[70%]">
                <h1 className="truncate text-sm font-bold">{blog.title}</h1>
                <div className="w-full h-[130px] mt-3 rounded-lg overflow-hidden">
                  <img className="w-full h-full" src={blog.image} alt="" />
                  <h1 className='absolute top-12 right-5 bg-blue-500 p-1.5 font-bold rounded-md text-xs truncate'>{blog.category}</h1>
                </div>
                <p className="w-full h-12 overflow-hidden text-xs text-neutral-500 mt-3">{blog.content}</p>
                <div className="w-full h-fit flex items-end flex-col">
                  <p className="text-xs mt-2 font-bold pr-3 truncate w-full">-- created by {blog.userId.name} </p>
                  <p className="text-xs mt-0.5 font-bold pr-3 truncate">{blog.category}</p>
                </div>
                <Link href={`/Blogs/${blog._id}`}><Button className="w-full mt-3">View</Button></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BlogsPage