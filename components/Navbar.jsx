import Link from "next/link";

export function Navbar() {
    return (
        <div className="h-24 flex justify-start px-5 sm:px-0">
        <nav className="font-mono text-lg text-gray-200 no-underline">
          <div className="flex">
            <div className="pr-10"><Link href={"/"}><a className="hover:text-mygreen-500">/home</a></Link></div>
            <div className="pr-10"><Link href={"/projects"}><a className="hover:text-mygreen-500">/projects</a></Link></div>
            <div className=""><Link href={"/skills"}><a className="hover:text-mygreen-500">/skills</a></Link></div>
          </div>
        </nav>
      </div>
    )
}