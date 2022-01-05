import Head from 'next/head';
import Link from "next/link";

function Skills() {
    return (
        <div className="bg-neutral-900">
        <Head>
          <title>Clemente Solorio</title>
          <meta name="description" content="20 year old student studying Computer Science at CSUF." />
          <link rel="icon" href="https://github.com/clxmente.png"/>
        </Head>
  
        <main>
          <div className="flex justify-center items-center h-screen">
            <div className="inline-block justify-center">
              {/* Nav Bar Code */}
              <div className="h-24 flex justify-start px-5 sm:px-0">
                <nav className="font-mono text-lg text-gray-200 no-underline">
                  <div className="flex">
                    <div className="pr-6"><Link href={"/"}><a className="hover:text-mygreen-500">/home</a></Link></div>
                    <div className="pr-6"><Link href={"/projects"}><a className="hover:text-mygreen-500">/projects</a></Link></div>
                    <div className=""><Link href={"/skills"}><a className="hover:text-mygreen-500">/skills</a></Link></div>
                  </div>
                </nav>
              </div>
              {/* END Nav Bar */}
              <h1 className="font-mono text-gray-200 font-bold text-3xl sm:text-6xl flex justify-start px-5 sm:px-0">
                Work In Progress...
              </h1>
            </div>
          </div>
        </main>
      </div>
    )
}

export default Skills