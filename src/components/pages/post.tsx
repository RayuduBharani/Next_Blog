"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { PostContentProps } from "@/lib/types";
import { PostAction } from "@/actions/action";

export default function PostContent({ DecodedUser }: PostContentProps) {
    const router = useRouter()

    async function handleSubmit(event : FormEvent<HTMLFormElement>): Promise<void> {
        event?.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const data: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            data[key] = value as string;
        });
        data.userId =  DecodedUser?.userInfo?.user_id
        console.log(data)
        const PostData = await PostAction(data, '/Blogs')
        console.log(PostData);
        if (PostData?.success == true) {
            router.push('/Dashboard')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-[35%] h-[485px] border-2 px-6 py-10 flex flex-col gap-10 rounded-md max-lg:w-[50%] max-md:w-[65%] max-sm:w-[100%]">
            <Input name="title" placeholder="Type your title . . ." />
            <textarea name="content" className="bg-transparent border-2 rounded-md p-3 text-sm" placeholder="Type your Content . . ." />
            <Input  name="image" placeholder="Paste your Image link . . ." />
            <select  name="category" className="p-2.5 bg-background border-2 rounded-md text-sm text-neutral-500">
                <option>Select Category</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Technology">Technology</option>
                <option value="News">News</option>
            </select>

            <Button type="submit">Post</Button>
        </form>
    );
}
