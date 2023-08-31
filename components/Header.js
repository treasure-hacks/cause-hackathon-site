


export function Header(props){


    return (
        <header className="w-full delimitationred px-[140px] flex flex-row justify-between items-center h-[150px]">
            <div>
                <img/>
                <h3 className="font-bold text-[hsl(122,74%,25%)]">CAUSE <br/>HACKS</h3>
            </div>
            <Navbar/>
        </header>
    );
}


export function Navbar(props){

    return (
        <ul className="flex justify-between items-center delimitationpurple w-[40%] font-bold text-[hsl(113,79%,26%)] text-[16px] ">
            <li>About</li>
            <li>Goals</li>
            <li>Students</li>
            <li>Organization</li>
            <li>Schedule</li>
        </ul>
    );
}