import { DecodedUser, GetDashBoardAction, GetUserComment } from "@/actions/action";
import CommentPage2 from "@/components/pages/Comment";  
import { DashBoard } from "@/components/pages/DashBoardPage";
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardIcon } from '@radix-ui/react-icons'
import { MessageCircle } from "lucide-react"

async function DashboardPage() {

  const ProfileInfo: any = await DecodedUser();
  const userId = ProfileInfo?.userInfo?.user_id
  const GettingDashBoard = await GetDashBoardAction(userId)
  const data = await GetUserComment(userId)

  return (
    <>
      <Tabs defaultValue='DashBoard' className='w-full h-full flex flex-col mt-[75px] px-40 max-sm:px-5'>
        <TabsList className="flex h-[50px]">
          <TabsTrigger value="DashBoard">
            <div className='flex items-center gap-2'>
              <DashboardIcon className='size-5' />
              <p className='text-sm'>DashBoard</p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="Comment">
            <div className='flex items-center gap-2'>
              <MessageCircle className='size-5' />
              <p className='text-sm'>Comments</p>
            </div>
          </TabsTrigger>
        </TabsList>
        <Separator className="bg-black dark:bg-white" />
        <div className='w-full h-[548px] mt-[2px] bg-accent rounded-md px-10 overflow-y-scroll hide-scrollbar overflow-hidden'>
          <TabsContent value="DashBoard">
            <DashBoard GettingDashBoard={GettingDashBoard} />
          </TabsContent>
          <TabsContent value="Comment">
            <CommentPage2  GetUserComment = {data}/>
          </TabsContent>
        </div>
      </Tabs>
    </>
  )
}

export default DashboardPage