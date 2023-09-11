
const schedule=[
    {
        title:"Team building",
        time:"4:30",
        duration:"15 min",
        description:"In this activity, you will have to complete those tasks"
    },
    {
        title:"Team building",
        time:"4:30",
        duration:"15 min",
        description:"In this activity, you will have to complete those tasks"
    },
    {
        title:"Team building",
        time:"4:30",
        duration:"15 min",
        description:"In this activity, you will have to complete those tasks"
    },
    {
        title:"Team building",
        time:"4:30",
        duration:"15 min",
        description:"In this activity, you will have to complete those tasks"
    },
    {
        title:"Team building",
        time:"4:30",
        duration:"15 min",
        description:"In this activity, you will have to complete those tasks"
    },
    
];

export function ScheduleSection(props){

    return (
        <div className="delimitationred xl:px-[180px] lg:px-[50px] md:px-[20px] relative flex lg:flex-row flex-col items-center   lg:justify-between lg:items-center bg-[hsl(190,37%,55%)]">
            <div className="bg-[hsl(190,63%,25%)] text-white h  lg:w-[370px] md:w-[350px] w-[80%] md:h-[300px] h-[300px]  p-6 rounded-xl mt-8  flex flex-col lg:items-start items-center">
                <h2 className="text-white mb-8 text-center lg:text-left ">Schedule</h2>
                <p className="text-white text-[16px] leading-6 mb-2 text-center lg:text-left"><em>Place:</em> VentureX san diego</p>
                <p className="text-white text-[16px] leading-6 mb-2 text-center lg:text-left"><em>Date:</em> October 15th</p>
                <p className="text-white text-[16px] leading-6 mb-6 text-center lg:text-left"><em>Time:</em> 2PM</p>
                <button className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  text-[hsl(0,0%,100%)] bg-[hsl(67,23%,55%)] rounded-xl">Register</button>
            </div>
            <TimeTree/>
        </div>
    );
}


export function TimeTree(props){

    const leafs=schedule.map((element,index)=>{
        return (
            <Leaf key={element.title} title={element.title} time={element.time} description={element.description} duration={element.duration} index={index} />
        )
    });

    return (
        <ul className="delimitationgreen   md:w-[500px] w-[400px] ">

            <LayoutLeaf  key="topSpace" height="50px"/>

            {leafs}

            <LayoutLeaf key="bottomSpace" height="50px"/>
        </ul>
    );
}

export function Leaf(props){

    const textAlign=(props.index%2)==0?" text-right ": " text-left ";
    const flexAlign=(props.index%2)==0?" flex-row ": " flex-row-reverse ";
    const descriptionDefinedBorder=(props.index%2)==0?" border-r-8 ": " border-l-8 ";
    const timeDefinedBorder=(props.index%2)==0?" border-l-8 ": " border-r-8 ";
    

    return (
        <>
            <li  key={props.key} className={"delimitationpurple flex  w-full text-white "+flexAlign}>
                <div className={"delimitationblue w-[50%] flex border-white"+flexAlign+descriptionDefinedBorder}>

                    <div className={"delimitationyellow font-normal w-[60%]"+textAlign}>
                        <p className="font-normal mb-[2%]">{props.duration}</p>
                        <p className="text-[16px] mb-[2%]">{props.title}</p>
                        <p className="font-normal  ">{props.description}</p>
                    </div>

                    <div className={"delimitationred flex flex-row items-center flex-1 justify-end"+flexAlign}>
                        <div className="delimitationblue w-[30%] aspect-square rounded-full bg-white "></div>
                        <div className="delimitationyellow w-[50%] border border-solid border-t-8 border-white"></div>
                    </div>

                </div>

                <div className={"delimitationgreen  px-[6%] flex flex-col justify-center border-white"+timeDefinedBorder}>

                    <p className="text-[20px]">{props.time+" PM"}</p>

                </div>
            </li>
            <LayoutLeaf key={props.title+"bottomspace"} height="20px"/>
        </>
    );
}

export function LayoutLeaf(props){

    const height=" h-["+props.height+"] ";
    return (
        <li  key={props.key} className={"delimitationpurple flex  w-full "+height}>
                <div className="w-[50%] h-full  border-white border-r-8"></div>
                <div className="w-[50%] h-full   border-white border-l-8"></div>
        </li>
    );
}