import { DecodedUser, GetCommentAction, GettingTheParicularPost } from '@/actions/action';
import BlogViewPage from '@/components/pages/BlogViewPage';
import { Iparams, IPostComment } from '@/lib/types';
import React from 'react'

async function BlogpagewithID({ params }: Iparams) {
  console.log('params' ,params);
  
  const blogViewData = await GettingTheParicularPost(params.id);
  // console.log(blogViewData);


  const defaultComment: IPostComment = {
    comment: '',
    userId: '',
    postId: ''
  };

  const GetComment = await GetCommentAction(blogViewData.data._id) ?? { success: false, data: defaultComment };
  // console.log("Get comment",GetComment);
  
  const GetPresestUserData : any  = await DecodedUser();
  // console.log("getPresentuserData",GetPresestUserData);


  return (
    <BlogViewPage GetPresestUserData={GetPresestUserData} GetComments={GetComment} blogViewData={blogViewData} />
  );
}

export default BlogpagewithID;
