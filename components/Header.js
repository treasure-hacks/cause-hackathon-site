


export function Header(props){

    const bgHero=" bg-[url('/heroBackground.jpg')] bg-auto bg-no-repeat ";
    return (
        <header className={"w-full delimitationred px-[140px] flex flex-row justify-between items-center h-[150px] text-[hsla(67,23%,55%,100%)] bg-[hsla(36,76%,91%,36%)] "}>
            <div className="flex flex-row justify-between items-center delimitationgreen w-full px-[2%] bg-[hsla(37,75%,95%,50%)] rounded-2xl">
                <img src="/logo.svg" className="h-full"/>
                <Navbar/>
            </div>
            
        </header>
    );
}


export function Navbar(props){

    return (
        <ul className="flex justify-between items-center delimitationpurple w-[40%] font-bold  text-[16px] ">
            <li>
                <a href="#aboutSection">About</a>
            </li>
            <li>
                <a href="#goalSection">Goals</a>
            </li>
            <li>
                <a href="#studentSection">Students</a>
            </li>
            <li>
                <a href="#organizationSection">Organization</a>
            </li>
            <li>
                <a href="#scheduleSection">Schedule</a>
            </li>
        </ul>
    );
}