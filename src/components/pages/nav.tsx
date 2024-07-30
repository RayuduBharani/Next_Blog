"use client"

import { ModeToggle } from "@/components/toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logs } from "lucide-react"
import { LogoutAction } from "@/actions/action"

export default function Nav() {

  async function logout() {
    await LogoutAction()
  }

  return (
    <nav className='w-full h-[75px] flex pr-36 pl-24 max-lg:pr-24 max-lg:pl-16 max-md:pl-0 max-md:pr-0 max-sm:pl-0 max-sm:pr-0 fixed top-0 bg-background z-50'>
      <Sheet>
        <div className="w-[20%] h-full flex justify-center items-center max-md:w-full max-md:justify-between max-md:pl-10 max-md:pr-5 max-sm:w-[100%] max-sm:justify-between max-sm:pl-7">
          <SheetTrigger><Logs className="mt-0 hidden max-md:block max-sm:block" /></SheetTrigger>
          <h1 className="font-bold text-[25px] max-sm:text-center max-md:text-center">Blogify</h1>
          <div className="hidden max-md:block max-sm:block  -mt-3 mr-3">
            <ModeToggle/>
          </div>
        </div>

        <div className="w-[75%] h-full flex justify-between pl-32 items-center max-lg:pl-10 max-md:hidden max-sm:hidden ">
          <ul className="flex justify-around w-[60%] h-full items-center max-lg:w-[70%]">
            <li className="cursor-pointer text-sm text-neutral-400 font-semibold"><Link href={"/"}>Home</Link></li>
            <li className="cursor-pointer text-sm text-neutral-400 font-semibold"><Link href={"/NewPost"}>Post</Link></li>
            <li className="cursor-pointer text-sm text-neutral-400 font-semibold"><Link href={"/Dashboard"}>Dashboard</Link></li>
            <li className="cursor-pointer text-sm text-neutral-400 font-semibold"><Link href={"Blogs"}>Blogs</Link></li>
          </ul>

          <Button onClick={logout}>Logout</Button>
        </div>
        <div className="w-[5%] h-full max-sm:hidden max-md:hidden">
          <ModeToggle />
        </div>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-start text-xl font-bold mt-10 mb-3">Hello Rayudu Bharani</SheetTitle>
            <SheetDescription asChild>
              <div className="w-[75%] h-full flex justify-start flex-col mt-6">
                <ul className="flex flex-col items-start w-[50%] font-semibold h-full gap-5">
                  <li className="cursor-pointer"><Link href={"/"}>Home</Link></li>
                  <li className="cursor-pointer"><Link href={"/NewPost"}>Post</Link></li>
                  <li className="cursor-pointer"><Link href={"/Dashboard"}>Dashboard</Link></li>
                  <li className="cursor-pointer"><Link href={"/Blogs"}>Blogs</Link></li>
                </ul>
                <Button className="mt-5" onClick={logout}>Logout</Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </nav>
  )
}