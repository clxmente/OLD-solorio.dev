export function Project(props) {
    return (
        // border-2 border-solid border-black bg-black rounded-md px-5 py-5
        <div className="border-2 border-solid border-black bg-black rounded-md px-5 py-5">
            <p className="font-bold text-lg font-mono text-gray-200">{props.title}</p>
            <p className="font-mono text-neutral-500">{props.description}</p>
        </div>
    )
}
/* 
<Project title={"Python Password Manager"} description={"command-line password manager that stores encrypted passwords."} />
<Project title={"University Database"} description={"designed a university DB and user interface using MySQL, PHP, HTML, CSS."} />
<Project title={"NBA Players API"} description={"API built on FastAPI to retrieve NBA player information."} />
<Project title={"This Website"} description={"This website was built with NextJS, React, and Tailwind."} />
*/