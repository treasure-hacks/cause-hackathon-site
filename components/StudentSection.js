

export function StudentSection(props)
{
    return(
        <div className=" px-[140px] delimitationred mt-[120px] h-[600px] w-full flex">
            <div className="delimitationyellow w-[50%] bg-[hsla(11,45%,38%,100%)] relative">
                <div className="delimitationblue z-10 top-[10%] right-[20%] w-[90%] aspect-video bg-[hsl(196,31%,14%)] absolute"></div>
                <div className="delimitationpurple z-20 top-[40%] left-[20%] w-[90%] aspect-video  bg-[hsl(196,31%,14%)] absolute"></div>
            </div>
            <div  className="delimitationyellow w-[50%] pt-[10%] px-[8%] text-white">
                <h2 className=" font-bold mb-[5%] text-[hsl(11,63%,57%)] text-[32px]">Who is the event for?</h2>
                <p className="text-[hsla(0,0%,82%,100%)] text-[16px]" >
                    Hackaton are place to expand your horizon, embark on journey by meeting people, work in a teams and discover new possibilities. 
                    The nature of the tasks in this one will mainly focus on two distinct related majors. <br/><br/>
                    </p>

                <p className="text-[hsla(0,0%,82%,100%)] text-[16px]">
                    <em className="font-bold text-[hsl(11,63%,57%)]">Business Students</em>: Pitch and use your analytical skill to formulate a viable roadmap using the ressources of the nonprofit and 
                for-profit organizations.<br/><br/>
                </p>

                <p className="text-[hsla(0,0%,82%,100%)] text-[16px]">
                    <em className="font-bold text-[hsl(11,63%,57%)]">CS Students</em>: Use your programming background to bring to life a demo representing the solution you and your team came up with. 
                A perfec t opportunity for you to put theoric knowledge into practise with a real case studies. 
                </p>
            </div>
        </div>
    );
}