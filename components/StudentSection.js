
const studentProfile=[
{
    title:"Cs student",
    description:"You are able to op into the event with a template or some sort of “forkable” app that they can just adapt to the developed social good program; it would help create a compelling demo/providing necessary software, but we would not judge based on technical complexity.",
    order:"normal",
    imgSrc:"/csIllustration.jpg",
},
{
    title:"Business Students",
    description:"come into the event with “nothing” but their skills. These skills can range from straight business, to psychology, to finance. They’ll be tasked with helping to build the pitch, the strategy behind the developed social good program, assist with creating a road map, etc.",
    order:"inversed",
    imgSrc:"/businessIllustration.jpg",
}];


export function StudentSection(props)
{
    const studentProfileCards=studentProfile.map((element)=>{
        return (<li key={element.title} className="h-[45%]">
                <StudentProfileCard  img={element.imgSrc} order={element.order}title={element.title} description={element.description}/>
            </li>);
    });
    return(
        <div id="studentSection" className="h-[600px] delimitationgreen flex flex-row justify-between items-center py-[4%] px-[140px] bg-[hsl(35,46%,91%)]">
            <ul className="delimitationpurple flex flex-col justify-between w-[60%] h-full ">
                {studentProfileCards}
            </ul>
            <div className="w-[30%] delimitationpurple  px-[3%] flex flex-col justify-center h-full bg-[hsl(35,58%,81%)] rounded-xl">
                <h2  className=" text-[hsl(11,39%,57%)] font-bold mb-[10%]">Students</h2>
                <p className=" leading-6 mb-[10%] w-[85%] delimitationpurple">
                    Cause Hacks is an opportunity for student to distinguish themselve in a competition, 
                    work with industry professionals and expend your network at the same time.
                </p>
                <button className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  text-[hsl(0,0%,100%)] bg-[hsl(67,23%,55%)] rounded-xl">Register</button>
            </div>
        </div>
    );
}


function StudentProfileCard(props){

    const order=props.order=="normal"?" flex-row ":" flex-row-reverse ";
    const padding=props.order=="normal"? "":" pl-[5%] ";
    return (
        <div className={"delimitationred  justify-between flex  h-full w-full"+order}>
            <div className={"delimitationblue w-[55%] flex flex-col justify-center py-[3%]"+padding}>
                <h3 className="text-[hsl(67,23%,55%)]  font-bold mb-6 delimitationyellow">{props.title}</h3>
                <p className="w-[80%]  leading-6">{props.description}</p>
            </div>
            <div className="relative flex-1">
                <img src={props.img} className="w-full h-full rounded-lg"/>
                <div className="absolute w-full h-full bg-[hsla(35,83%,93%,43%)] left-[0%] top-[0%]"></div>
            </div>
        </div>
    );
}