
export function OrganizationSection(props){

    return (
        <div id="organizationSection" className="w-full h-[750px] delimitationred flex justify-center items-center px-[140px] overflow-hidden">
            <div className="bg-[hsl(67,23%,55%)] h-[600px] w-[900px] p-[3%] flex flex-col items-center rounded-2xl relative" >
                <h2  className=" text-[hsl(0,0%,100%)] font-bold mb-[5%]">Organization</h2>
                <div className="delimitationgreen flex flex-row  justify-around">
                    <div className="delimitationred w-[42%] bg-[hsl(67,33%,78%)] p-[3%] rounded-2xl">
                        <h3 className="text-[hsl(11,39%,57%)]  font-bold mb-6 delimitationyellow">For-Profit</h3>
                        <p className="= mb-[5%] w-[85%] delimitationpurple">
                        Come into the event to create the ideal program to not only do social good, but learn about the ROI of enacting corporate responsibility.
                         While developing the program, they can assure that there are effective ways of measuring success, evident benefits to their employees’ productivity, 
                         and assist with developing a program from scratch. Additionally, they’ll learn how to work with nonprofits more efficiently in the future.
                        </p>
                    </div>

                    <div className="delimitationred w-[42%] bg-[hsl(67,33%,78%)] p-[3%] rounded-2xl">
                        <h3 className="text-[hsl(11,39%,57%)]  font-bold mb-6 delimitationyellow">Non-Profit</h3>
                        <p className=" mb-[5%] w-[85%] delimitationpurple">
                        Connect with students to further develop their mission and impact, learn from for-profit professionals how to best produce a program, 
                        and offer insights on specifics for-profits are looking for in partnership. By the end of the event, you will have a new program laid 
                        out and ready to launch!
                        </p>
                    </div>
                </div>
                <img src="/blobType3.svg" className="absolute -left-[10%] top-[80%]"/>
                <img src="/blobType4.svg" className="absolute left-[80%] -top-[10%]"/>
                <img src="/puzzleJoining.svg" height="2000px" className=" absolute left-[0%] top-[45%]"/>
            </div>
        </div>
    );
}