

export function GoalSection(props){
    
    return(
        <div className="delimitationyellow px-[140px] h-[600px] mt-[120px] flex">
            <div className=" flex flex-col  bg-[hsl(113,79%,26%)] px-[8%] pt-[10%] align-center w-[45%] delimitationred">
                <h2 className="font-bold mb-[8%] text-white text-[32px]">What are the goals?</h2>
                <p className="text-[hsla(0,0%,82%,100%)] text-[16px]">
                Form a team with a fellow student, a non-profit and a profit member to build an app in the course of 3 hours. 
                You will have to communicate with your team member , brief an idea and put together a demo that you will have to present if front of the other team.
                Many socials issue currently plague san diego and it will be your task to tackle them with innovative idea. 
                Winner take all, life included. A battle to the death to make the world a better place
                </p>
            </div>
            <ul className="w-[55%] h-full delimitationgreen text-white font-bold text-[22px]">
                <li className="delimitationblue h-[20%] w-full flex items-center pl-[22%]">Housing</li>
                <li className="delimitationblue h-[20%] w-full flex items-center pl-[50%]">Public Health</li>
                <li className="delimitationblue h-[20%] w-full flex items-center pl-[12%]">Equality</li>
                <li className="delimitationblue h-[20%] w-full flex items-center pl-[60%]">Environment</li>
                <li className="delimitationblue h-[20%] w-full flex items-center pl-[40%]">Education</li>
            </ul>
        </div>
    );
}