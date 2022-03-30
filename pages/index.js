import Head from 'next/head';
import { Social } from "../components/Social";
import { Navbar } from "../components/Navbar";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clemente Solorio</title>
        <meta name="description" content="20 year old student studying Computer Science at CSUF." />
        <meta name="og:image" content="https://github.com/clxmente.png" />
        <link rel="icon" href="https://github.com/clxmente.png"/>
      </Head>

      <main className="px-10">
        <div className="flex justify-center items-center h-screen">
          <div className="inline-block justify-center">
            {/* Nav Bar Code */}
            <Navbar />
            {/* END Nav Bar */}
            <h1 className="font-mono text-gray-200 font-bold text-3xl sm:text-6xl flex justify-start sm:px-0">
              {"hello, i'm clem."}
            </h1>
            <div className='w-full'>
              <p className="font-mono text-neutral-500 text-lg leading-8 pt-8 sm:px-0">
                {"I'm Clemente Solorio, a 20 year old student enrolled "}<br className='hidden sm:block'/>
                <a 
                  className="text-mygreen-100 hover:text-mygreen-500 hover:cursor-pointer"
                  href="https://www.fullerton.edu/">
                  @CSUF
                </a>{". I'm currently in my 3rd year of university,"}<br className="hidden sm:block"/>{"completing my Bachelors of Science in Computer Science."}
              </p>
            </div>
            <div className="flex pt-8 space-x-8 justify-start items-end">
              <Social href={"https://github.com/clxmente"} icon={<AiOutlineGithub size={42} />} />
              <Social href={"https://www.linkedin.com/in/clementesolorio/"} icon={<AiOutlineLinkedin size={42} />} />
              <Social href={"mailto:clem@solorio.dev"} icon={<AiOutlineMail size={42} />} />
              <Social href={"https://twitter.com/clxmente"} icon={<AiOutlineTwitter size={42} />} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
