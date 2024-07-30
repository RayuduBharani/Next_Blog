"use server"

import { Database } from "@/lib/Database";
import commentModel from "@/lib/Models/commentModel";
import postModel from "@/lib/Models/postModal";
import userModel from "@/lib/Models/userModel";
import { IBlogsData, IfindOne, ILoginData, ILoginFunc, IPostComment, IPostData, IregisterFunc, type registerDataType } from "@/lib/types";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import { revalidatePath } from "next/cache";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// register 

export async function RegisterAction(registerData: registerDataType): Promise<IregisterFunc | undefined> {
    await Database()
    try {
        const response: IfindOne | null = await userModel.findOne({ email: registerData.email })
        if (response?.email == registerData.email) {
            console.log(response)
            return ({
                success: false,
                message: "user already exists"
            })
        }

        const salt: string = bcrypt.genSaltSync(10);
        const hash: string = bcrypt.hashSync(registerData.password, salt);

        const newRegisterData: registerDataType = {
            name: registerData.name,
            email: registerData.email,
            password: hash
        }

        const userData: registerDataType = await userModel.create(newRegisterData)
        if (userData) {
            return ({
                success: true,
                message: 'user Registered'
            })
        }
    }
    catch (error) {
        return ({
            success: false,
            message: 'some err happened'
        })
    }
}

// Login 

export async function LoginAction(loginData: ILoginData): Promise<ILoginFunc> {
    await Database()
    try {
        const FindUser: IfindOne | null = await userModel.findOne({ email: loginData.email })
        if (!FindUser) {
            return ({
                success: false,
                message: "user not found"
            })
        }

        const passwordCheck: boolean = bcrypt.compareSync(loginData.password, FindUser.password)
        if (!passwordCheck) {
            return ({
                success: false,
                message: "Password inncorrect"
            })
        }

        const token: string | null = jwt.sign({ email: FindUser.email, user_name: FindUser.name, user_id: FindUser._id }, "blog");
        if (token) {
            const getcookie = cookies();
            getcookie.set("token", token)
            return ({
                success: true,
                message: "Login Success",
                token: token
            })
        }
        else {
            return {
                success: false,
                message: "Token not generated"
            };
        }
    }
    catch (err) {
        return ({
            success: true,
            message: 'user logined'
        })
    }

}

//logout

export async function LogoutAction(){
    const getcookie = cookies()
    getcookie.delete("token")
    redirect('/sign-in')
}

// decode jwt

export async function DecodedUser() {

    const getcookie: ReadonlyRequestCookies = cookies();
    const token: string = getcookie.get("token")?.value || ""

    const decoded: jwt.JwtPayload | string = jwt.verify(token, 'blog');
    return ({
        userInfo: decoded
    })
}

// post blog

export async function PostAction(postdata: any, pathTorevalidate: string): Promise<IregisterFunc | undefined> {
    await Database()
    try {
        const data = await postModel.create(postdata)
        revalidatePath(pathTorevalidate)
        if (data) {
            return ({
                success: true,
                message: "post created"
            })
        }
    }
    catch (err) {
        return ({
            success: false,
            message: "post can't created"
        })
    }
}

// Getting All the Blogs

export async function AllBlogsAction(){
    await Database()
    try {
        const data: IBlogsData[] = await postModel.find().populate("userId")
        if (data) {
            return ({
                success: true,
                message: "You get All the blogs",
                data: data
            })
        }
    }
    catch (err) {
        return ({
            success: false,
            message: "Can't get blogs"
        })
    }
}

// Getting Particular post for view the post 

export async function GettingTheParicularPost(id: string) {
    await Database()
    const data = await postModel.findOne({ _id: id }).populate("userId")
    if (data) {
        return ({
            success: true,
            data: JSON.parse(JSON.stringify(data))
        })
    }
    else {
        return ({
            success: false,
            message: "some err happened in the getting the post"
        })
    }
}

// search posts using title

export async function SearchPostAction(search: string) {
    await Database()
    const data = await postModel.find({title : {$regex:search , $options:'i'}}).populate("userId")
    if(data){
        return JSON.parse(JSON.stringify(data))
    }
}

// Post comments 

export async function PostCommentAction(comment : IPostComment , pathTorevalidate : string) {
    await Database()
    await commentModel.create(comment)
    revalidatePath(pathTorevalidate)
    return {
        sucess : true
    }
}

// Get Comment 

export async function GetCommentAction(PostId : string): Promise<{ success: boolean; data:IPostComment ;} | undefined>
 {
    await Database()
    const data = await commentModel.find({postId : PostId}).populate("userId").populate("postId")
    if(data){
        return ({
            success : true,
            data : JSON.parse(JSON.stringify(data))
        })
    }
}

// to get particular user POSTs 

export async function GetDashBoardAction(userId : string) {
    await Database()
    const data = await postModel.find({userId : userId}).populate("userId")
    if(data){
        return({
            data : JSON.parse(JSON.stringify(data))
        })
    }
}

export async function DeleteBlog(postId : string , pathTorevalidate : string) {
    await Database()
    await postModel.deleteOne({_id : postId})
    revalidatePath(pathTorevalidate)
}


export async function GetUserComment(userId : string) {
    await Database();
    const GetComments = await commentModel.find({userId : userId}).populate("userId").populate("postId")
    if(GetComments){
        return({
            data : GetComments
        })
    }
}

export async function DeleteUserComment(commentId : string , pathTorevalidate : string) {
    await Database()
    await commentModel.deleteOne({_id : commentId})
    revalidatePath(pathTorevalidate)
}