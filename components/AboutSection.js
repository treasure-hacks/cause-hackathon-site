

export function AboutSection(props){

    return (
        <div id="aboutSection" className="w-full flex flex-row items-center delimitationpurple h-[600px] px-[140px] relative  overflow-hidden">
            <div className="flex flex-col w-[45%] delimitationblue">
                <h2  className=" text-[hsl(11,39%,57%)] font-bold mb-[5%]">What is the event about</h2>
                <p className="  mb-[5%] w-[85%] delimitationpurple">Welcome to Cause Hacks, in collaboration with Cause San Diego, a dedicated advocate for positive change for over two decades. 
                    In the span of 4.5 hours, 25 teams will be formed, each consisting of two students, a committed for-profit representative, 
                    and a visionary from a nonprofit. Working together, this diverse group will pool their creativity to develop 
                    innovative programs aimed at addressing important social issues.</p>
                <ul className="flex flex-row text-[hsl(67,23%,55%)] font-bold w-full delimitationblue">
                    <li className="flex flex-row items-center border-[hsl(67,23%,55%)] h-[50px] border-r-solid border-r-[5px] pr-4">
                        <p className="">4.5 hours</p>
                        
                    </li>
                    <li className="flex flex-row items-center  border-[hsl(67,23%,55%)] border-r-solid border-r-[5px] px-4">
                        <p>25 teams </p>
                        
                    </li>
                    <li className="flex flex-row items-center  border-[hsl(67,23%,55%)] border-r-solid border-r-[5px] px-4">
                        <p>50+ students</p> 
                        
                    </li>
                    <li className="flex flex-row items-center  border-[hsl(67,23%,55%)]  px-4">
                        <p className="">50+ organizations</p> 
                        
                    </li>
                </ul>
            </div>
            <img src="/woman.svg" className="w-[50%] " />
            <img src="/blobType1.svg" className="absolute  left-[50%] top-[0%]"/>
            <img src="/blobType2.svg" className="absolute left-[90%] top-[70%]"/>
        </div>
    );
}