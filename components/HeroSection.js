

export function HeroSection(props){

    return (
        <div className="delimitationpurple  px-[140px]  w-full h-[700px]">
            <div className="delimitationred  ml-[10%] mt-[10%] w-[50%] h-[60%] p-[50px] bg-[hsla(209,2%,11%,80%)]">
                <h1 className="font-bold mb-[10px] text-[hsl(113,79%,37%)] text-[57px]">CAUSE HACKS</h1>
                <h3 className="font-bold mb-[30px] text-[hsl(11,50%,52%)] text-[22px]">October 10th, San Diego Coliseum</h3>
                <p className=" mb-[30px] text-[hsl(0,0%,100%)] text-[16px]">An unparalleled chance to unite with ambitious students and progressive organizations, 
                    creating solutions for pressing social issues.</p>
                <button className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  bg-[hsl(11,45%,38%)] text-[hsl(0,0%,100%)] rounded-xl">Register</button>
            </div>
        </div>
    );
}