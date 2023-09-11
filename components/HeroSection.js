

export function HeroSection(props){

    return (
        <div className="delimitationpurple  xl:px-[140px]  w-full h-[700px] bg-[hsla(36,76%,91%,36%)]">
            <div className="delimitationred  md:ml-[10%] mt-[10%] lg:w-[50%] md:w-[70%] w-[90%] m-auto lg:p-[50px] md:p-[40px] md:py-0 py-[6%] p-[2%] bg-[hsla(35,83%,93%,72%)] rounded-2xl">
                <h1 className=" delimitationgreen font-bold mb-[10px] text-[hsl(67,23%,55%)] md:text-[57px] text-[50px] ">CAUSE HACKS</h1>
                <h3 className="font-bold mb-[30px] text-[hsl(11,39%,57%)] ">October 13th, VentureX San Diego</h3>
                <p className=" mb-[30px] text-[hsl(0,0%,0%)] text-[20px] font-bold leading-8">
                  Collaborate with ambitious students and progressive organizations to create a framework that addresses pressing social issues.</p>
                <a href="/register/" className=" w-[110px] h-[50px]  flex justify-center items-center font-bold  text-[hsl(0,0%,100%)] bg-[hsl(11,39%,57%)] rounded-xl">Register</a>
            </div>
        </div>
    );
}
