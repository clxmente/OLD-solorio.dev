import Head from 'next/head';
import Link from "next/link";
import { Project } from "../components/Project";
import { FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFastapi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiPhp, DiHtml5, DiCss3 } from "react-icons/di";

function Projects() {
    return (
        <div>
        <Head>
          <title>Clemente Solorio</title>
          <meta name="description" content="Page with some of the projects I have worked on." />
          <link rel="icon" href="https://github.com/clxmente.png"/>
        </Head>
  
        <main>
          <div className="flex justify-center items-center sm:h-screen overflow-auto">
            <div className="inline-block justify-center w-4/5 2xl:w-1/2 pt-12 sm:pt-0">
              {/* Nav Bar Code */}
              <div className="h-12 sm:h-24 flex justify-start">
                <nav className="font-mono text-lg text-gray-200 no-underline">
                  <div className="flex">
                    <div className="pr-10"><Link href={"/"}><a className="hover:text-mygreen-500">/home</a></Link></div>
                    <div className="pr-10"><Link href={"/projects"}><a className="hover:text-mygreen-500">/projects</a></Link></div>
                    <div className=""><Link href={"/skills"}><a className="hover:text-mygreen-500">/skills</a></Link></div>
                  </div>
                </nav>
              </div>
              {/* END Nav Bar */}
              <h1 className="font-mono text-gray-200 font-bold text-3xl sm:text-4xl flex justify-start">
                projects
              </h1>
              <div className="py-10 grid grid-cols-1 xl:grid-cols-2 gap-8"> {/* grid container */}
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                <div className="flex items-center justify-between">
                  <p className='font-bold text-lg font-mono text-gray-200'>Python Password Manager</p>
                  <FaPython size={"20"} color={"white"}/>
                </div>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>command-line password manager that stores encrypted passwords.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <div className="flex items-center justify-between">
                    <p className='font-bold text-lg font-mono text-gray-200'>University Database</p>
                    <div className='flex items-center'>
                      <div className='pr-2 sm:pr-7'><GrMysql size={"20"} color={"white"} /></div>
                      <div className='pr-2 sm:pr-7'><DiPhp size={"30"} color={"white"} /></div>
                      <div className='pr-2 sm:pr-7'><DiHtml5 size={"20"} color={"white"} /></div>
                      <DiCss3 size={"20"} color={"white"} />
                    </div>
                  </div>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>designed a university DB and user interface using MySQL, PHP, HTML, and CSS.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <div className="flex items-center justify-between">
                    <p className='font-bold text-lg font-mono text-gray-200'>NBA Players API</p>
                    <div className="flex items-center">
                      <div className="pr-4 sm:pr-7"><SiFastapi size={"20"} color="white" /></div>
                      <FaPython size={"20"} color={"white"}/>
                    </div>
                  </div>
                  <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>API built with FastAPI to retrieve NBA player information.</p>
                </div>
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-2xl hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <div className="flex items-center justify-between">
                    <p className='font-bold text-lg font-mono text-gray-200'>This Website</p>
                    <div className="flex items-center">
                      <div className="pr-7"><FaReact size={"20"} color={"white"} /></div>
                      <SiTailwindcss size={"20"} color={"white"} />
                    </div>
                  </div>
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