

export function HeroSection(props){

    return (
        <div className="delimitationpurple  px-[140px]  w-full h-[700px] bg-[hsla(36,76%,91%,36%)]">
            <div className="delimitationred  ml-[10%] mt-[10%] w-[50%]  p-[50px] bg-[hsla(35,83%,93%,72%)] rounded-2xl">
                <h1 className="font-bold mb-[10px] text-[hsl(67,23%,55%)] text-[57px]">CAUSE HACKS</h1>
                <h3 className="font-bold mb-[30px] text-[hsl(11,39%,57%)] ">October 10th, San Diego Coliseum</h3>
                <p className=" mb-[30px] text-[hsl(0,0%,0%)] text-[20px] font-bold leading-8">An unparalleled chance to unite with ambitious students and progressive organizations, 
                    creating solutions for pressing social issues.</p>
                <button className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  text-[hsl(0,0%,100%)] bg-[hsl(11,39%,57%)] rounded-xl">Register</button>
            </div>
        </div>
    );
}