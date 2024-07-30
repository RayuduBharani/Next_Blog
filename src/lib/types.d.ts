import { Dispatch, SetStateAction } from "react"

export type registerDataType = {
    name: string,
    email: string,
    password: string
}

export interface IfindOne {
    _id: string
    name: string
    email: string
    password: string
}

export interface IregisterFunc {
    success: boolean;
    message: string;
}

export interface ILoginFunc {
    success: boolean;
    message: string;
    token?: string
}

export interface ILoginData {
    email: string,
    password: string
}

export interface IPost {
    userId: string
    title: string;
    content: string;
    image: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPostData {
    userId: string
    title: string;
    content: string;
    image: string;
    category: string;
}

export interface IBlogsData {
    title: string;
    content: string;
    image: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface MyProviderProps {
    children: ReactNode;
}

export interface Iparams {
    params: {
        id: string
    }
}


interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    __v?: number;
}

interface IBlog {
    _id: string;
    userId: IUser;
    title: string;
    content: string;
    image: string;
    category: string;
    createdAt: string
    updatedAt: string;
    __v?: number;
}

interface IBlogViewData {
    success: boolean;
    message?: string;
    data?: IBlog;
}

export interface IsearchData {
    category: string
    content: string
    createdAt: string
    image: string
    title: string
    updatedAt: string
    userId: {
        _id: string
        name: string
        email: string
        password: string
    }
    __v?: any
    _id: string
}

export interface IPostComment {
    comment: string,
    userId: string | undefined,
    postId: string | undefined
    createdAt?: string
    updatedAt?: string
}

export interface BlogViewPageProps {
    blogViewData: IBlogViewData;
    GetComments: {
        success: boolean;
        data: IPostComment;
    }
    GetPresestUserData:{
        userInfo : {
            email: string,
            user_name: string,
            user_id: string,
            iat: any
        }
    }
}

export interface PostContentProps {
    DecodedUser: {
        userInfo: {
            email: string,
            user_name: string,
            user_id: string,
            iat: any
        }
    } | JwtPayload;
}