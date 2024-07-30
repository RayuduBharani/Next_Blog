import HomeSearch from "@/components/pages/HomeSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div className="hide-scrollbar w-full h-fit">
      <div className="w-full h-fit pt-20 flex flex-col items-center mt-[75px] max-sm:pt-10">
        <h1 className="font-bold text-4xl text-center max-sm:text-2xl max-md:text-center max-md:text-4xl max-sm:text-center max-sm:w-[90%]">Read the most interesting articles</h1>
        <p className="pt-6 text-md w-[60%] text-neutral-500 text-center max-md:text-md max-sm:text-xs max-sm:w-[80%]">Discover expert insights and practical tips on technology, wellness, travel, and more. Dive into engaging articles that inspire and inform, with fresh content added regularly!</p>
        <Link href={"/Blogs"}><Button className="mt-6">Explore More</Button></Link>
      </div>
      <HomeSearch/>
    </div>
  );
}
