import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-background flex justify-center items-center flex-col gap-2">
      <h1 className="font-bold text-2xl">404 | Not Found</h1>
      <p className="text-sm text-blue-600"><Link href={"/"}>Return to Home</Link></p>
    </div>
  )
}