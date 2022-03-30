import Head from 'next/head';
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFastapi, SiMongodb, SiNextdotjs, SiSupabase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiPhp, DiHtml5, DiCss3 } from "react-icons/di";

function Projects() {
    return (
        <div className='bg-neutral-900'>
        <Head>
          <title>Clemente Solorio</title>
          <meta name="description" content="Page with some of the projects I have worked on." />
          <link rel="icon" href="https://github.com/clxmente.png"/>
        </Head>

        <main className='mb-10 bg-neutral-900 sm:mb-0'>
          <div className="flex justify-center items-center sm:h-screen overflow-auto">
            <div className="inline-block justify-center w-4/5 2xl:w-1/2 pt-12 sm:pt-0">
              {/* Nav Bar Code */}
              <Navbar />
              {/* END Nav Bar */}
              <h1 className="font-mono text-gray-200 font-bold text-3xl sm:text-4xl flex justify-start">
                projects
              </h1>
              {/* PW Manager */}
              <div className="py-10 grid grid-cols-1 xl:grid-cols-2 gap-8"> {/* grid container */}
                {/* NBA-Game */}
                <Link href={"https://nba-game.solorio.dev/"}>
                  <a>
                  <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-lg hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <div className="flex items-center justify-between">
                    <p className='font-bold text-lg font-mono text-gray-200'>NBA Players Game</p>
                    <div className="flex items-center">
                        <div className="pr-4 sm:pr-7"><SiNextdotjs size={"20"} color="white" /></div>
                        <div className="pr-4 sm:pr-7"><SiSupabase size={"20"} color="white" /></div>
                        <FaPython size={"20"} color={"white"}/>
                      </div>
                  </div>
                    <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>Fun web-app to see how many NBA Players a user can guess withing a time limit. Built with Next.js, tailwindcss, and Supabase.</p>
                  </div>
                  </a>
                </Link>
                {/* END NBA-Game */}
                {/* PW Manager */}
                <Link href={"https://github.com/clxmente/Python-Password-Manager"}>
                  <a>
                  <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-lg hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                  <div className="flex items-center justify-between">
                    <p className='font-bold text-lg font-mono text-gray-200'>Python Password Manager</p>
                    <FaPython size={"20"} color={"white"}/>
                  </div>
                    <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>command-line password manager that stores AES encrypted passwords protected by a SHA256 hashed master password.</p>
                  </div>
                  </a>
                </Link>
                {/* END PW Manager */}
                {/* University DB */}
                {/* NOT allowed to upload code or proj to internet bc it was for a class. */}
                <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-lg hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
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
                {/* END University DB */}
                {/* NBA Players API */}
                <Link href={"https://github.com/clxmente/NBA-Players-API"}>
                  <a>
                  <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-lg hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                    <div className="flex items-center justify-between">
                      <p className='font-bold text-lg font-mono text-gray-200'>NBA Players API</p>
                      <div className="flex items-center">
                        <div className="pr-4 sm:pr-7"><SiMongodb size={"20"} color="white" /></div>
                        <div className="pr-4 sm:pr-7"><SiFastapi size={"20"} color="white" /></div>
                        <FaPython size={"20"} color={"white"}/>
                      </div>
                    </div>
                    <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>API built with FastAPI to retrieve NBA player information.</p>
                  </div>
                  </a>
                </Link>
                {/* END NBA Players API */}
                {/* Personal Website */}
                <Link href={"https://github.com/clxmente/nextjs-solorio.dev"}>
                  <a>
                  <div className="border-2 border-solid border-black bg-black rounded-md px-7 py-7 shadow-lg hover:scale-105 hover:transition-all hover:ease-out hover:duration-500 transition-all ease-out duration-500">
                    <div className="flex items-center justify-between">
                      <p className='font-bold text-lg font-mono text-gray-200'>This Website</p>
                      <div className="flex items-center">
                        <div className="pr-7"><FaReact size={"20"} color={"white"} /></div>
                        <SiTailwindcss size={"20"} color={"white"} />
                      </div>
                    </div>
                    <p className='text-sm font-mono text-neutral-500 pt-4 text_flicker'>This website was built with next.js, react, and tailwindcss.</p>
                  </div>
                  </a>
                </Link>
                {/* END Personal Website */}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}

export default Projects