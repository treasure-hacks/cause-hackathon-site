
const studentProfile=[
{
    title:"Computer Science Students",
    description:"You can come into the event to make your social good program more efficient. During the event, you will identify the program\u2019s needs, explain how you can help to ease the process, and plan how to do it. Following the event, you\u2019ll code up your plan and present it to your team.",
    order:"normal",
    imgSrc:"/csIllustration.webp",
},
{
    title:"Business Students",
    description:"Come into the event with “nothing but your skills”, which can range from straight business, to psychology, to finance. You\u2019ll help with tasks such as building the pitch, forming the strategy behind the developed social good program, and assisting with creating a road map.",
    order:"inversed",
    imgSrc:"/businessIllustration.webp",
}];


export function StudentSection(props)
{
    const studentProfileCards=studentProfile.map((element)=>{
        return (<li key={element.title} className="lg:h-[45%] lg:w-full md:w-[40%]">
                <StudentProfileCard  img={element.imgSrc} order={element.order}title={element.title} description={element.description}/>
            </li>);
    });
    return(
        <div id="students" className="xl:h-[600px] lg:h-[800px] delimitationgreen flex lg:flex-row md:flex-row-reverse md:flex-wrap-reverse flex-col-reverse md:justify-center lg:justify-between items-center xl:py-[2%] lg:py-[8%] md:py-[4%] py-[15%] xl:px-[140px] lg:px-[50px] md:px-[20px] px-[10%] bg-[hsl(35,46%,91%)]">
            <ul className="delimitationpurple flex lg:flex-col md:flex-row flex-col justify-between lg:w-[60%] h-full lg:px-0 md:px-[5%] ">
                {studentProfileCards}
            </ul>
            <div className="lg:w-[30%] lg:h-[70%] xl:h-full  md:w-[70%] lg:mb-[0] md:mb-[10%] mb-[10%] delimitationpurple  md:px-[3%] px-[5%] md:py-[2%] py-[15%] flex flex-col justify-center lg:items-start items-center h-full bg-[hsl(35,58%,81%)] rounded-xl">
                <h2  className=" text-[hsl(11,39%,57%)] font-bold lg:mb-[10%] md:mb-[5%] mb-[5%] ">Students</h2>
                <p className=" leading-6 lg:mb-[10%] md:mb-[5%] mb-[5%] md:w-[85%] w-full text-center lg:text-left delimitationpurple">
                    Cause Hacks is an opportunity for students to distinguish themselves in a competition,
                    work with industry professionals, and expand your network.
                </p>
                <a href="/register/" className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  text-[hsl(0,0%,100%)] bg-[hsl(67,23%,55%)] rounded-xl">Register</a>
            </div>
        </div>
    );
}


function StudentProfileCard(props){

    const order=props.order=="normal"?" lg:flex-row md:flex-col-reverse flex-col-reverse ":" lg:flex-row-reverse md:flex-col-reverse  flex-col-reverse  ";
    const padding=props.order=="normal"? "":" lg:pl-[5%] ";
    return (
        <div className={"delimitationred  md:bg-transparent bg-[hsl(35,58%,81%)] md:p-0 p-[7%] mb-[10%] md:mb-0 rounded-xl justify-between flex  h-full w-full"+order}>
            <div className={"delimitationblue lg:w-[55%] flex flex-col justify-center py-[3%]"+padding}>
                <h3 className="text-[hsl(67,23%,55%)]  font-bold mb-6 delimitationyellow">{props.title}</h3>
                <p className="lg:w-[90%]  leading-6">{props.description}</p>
            </div>
            <div className="relative flex-1">
                <img src={props.img} className="w-full h-full rounded-lg"/>
                <div className="absolute w-full h-full bg-[hsla(35,83%,93%,43%)] left-[0%] top-[0%]"></div>
            </div>
        </div>
    );
}
