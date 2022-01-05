import Head from 'next/head';
import Link from "next/link";
import { Project } from "../components/Project"

function Projects() {
    return (
        <div>
        <Head>
          <title>Clemente Solorio</title>
          <meta name="description" content="Page with some of the projects I have worked on." />
          <link rel="icon" href="https://github.com/clxmente.png"/>
        </Head>
  
        <main>
          <div className="flex justify-center items-center h-screen">
            <div className="inline-block justify-center w-1/2">
              {/* Nav Bar Code */}
              <div className="h-24 flex justify-start px-5 sm:px-0">
                <nav className="font-mono text-lg text-gray-200 no-underline">
                  <div className="flex">
                    <div className="pr-10"><Link href={"/"}><a className="hover:text-mygreen-500">/home</a></Link></div>
                    <div className="pr-10"><Link href={"/projects"}><a className="hover:text-mygreen-500">/projects</a></Link></div>
                    <div className=""><Link href={"/skills"}><a className="hover:text-mygreen-500">/skills</a></Link></div>
                  </div>
                </nav>
              </div>
              {/* END Nav Bar */}
              <h1 className="font-mono text-gray-200 font-bold text-3xl sm:text-4xl flex justify-start px-5 sm:px-0">
                projects
              </h1>
              <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <p className='font-bold text-lg font-mono text-gray-200'>Python Password Manager</p>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>command-line password manager that stores encrypted passwords.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <p className='font-bold text-lg font-mono text-gray-200'>University Database</p>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>designed a university DB and user interface using MySQL, PHP, HTML, and CSS.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <p className='font-bold text-lg font-mono text-gray-200'>NBA Players API</p>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>API built with FastAPI to retrieve NBA player information.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <p className='font-bold text-lg font-mono text-gray-200'>This Website</p>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>This website was built with NextJS, React, and Tailwind.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}

export default Projects