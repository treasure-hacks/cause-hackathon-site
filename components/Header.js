


export function Header(props){

    const bgHero=" bg-[url('/heroBackground.jpg')] bg-auto bg-no-repeat ";
    return (
        <header className={"w-full delimitationred xl:px-[140px] flex flex-row justify-between items-center h-[150px] text-[hsla(67,23%,55%,100%)] bg-[hsla(36,76%,91%,36%)] "}>
            <div className="flex flex-row justify-between items-center delimitationgreen w-full px-[2%] bg-[hsla(37,75%,95%,50%)] xl:rounded-2xl">
                <img src="/logo.svg" className="h-full"/>
                <Navbar/>
            </div>
            
        </header>
    );
}


export function Navbar(props){

    return (
        <ul className="md:flex justify-between items-center delimitationpurple lg:w-[40%] md:w-[55%] font-bold  text-[16px] hidden  ">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#goals">Goals</a>
            </li>
            <li>
                <a href="#students">Students</a>
            </li>
            <li>
                <a href="#organization">Organization</a>
            </li>
            <li>
                <a href="#schedule">Schedule</a>
            </li>
        </ul>
    );
}