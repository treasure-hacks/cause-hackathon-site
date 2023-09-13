

export function GoalSection(props){
    
    return(
       <div id="goals" className="delimitationgreen w-full lg:h-[550px] md:h-[500px] h-[650px] bg-[hsl(35,58%,81%)] flex md:flex-row flex-col items-center md:py-0 py-[15%] md:items-center xl:px-[140px] lg:px-[50px] md:px-[20px] relative overflow-hidden ">

            <div className="bg-[hsl(22,72%,63%)] lg:w-[400px] md:w-[350px] w-[80%] md:h-[300px] h-[300px]  p-6 rounded-xl ">
                <h2  className="text-white mb-4 ">What Are the Goals?</h2>
                <p className="text-white text-[16px] leading-6">
                With your team of 2 students, 1 non-profit, and 1 for-profit, you will design and develop a social good program that tackles 
                current issues in San Diego. Need inspiration? Take a look at the <a href="https://www.youtube.com/watch?v=qZDURaCYj6w" target="_blank" className="underline">Starbucks FoodShare Program</a>!
                </p>
            </div>
            <img src="/environmentPuzzle.svg" className="absolute lg:w-[350px] md:w-[250px] w-[120px] z-20 xl:left-[28%] md:left-[35%] md:top-[0%] top-[70%]"/>
            <img src="/housingPuzzle.svg" className="absolute z-30 lg:w-[250px] md:w-[200px] w-[100px] xl:left-[50%] lg:left-[55%] xl:top-[2%] md:top-[18%] md:left-[50%] top-[70%] left-[60%]"/>
            <img src="/healthPuzzle.svg" className="absolute z-40  lg:w-[250px] md:w-[200px] w-[100px] left-[10%] md:top-[55%] top-[75%]"/>
            <img src="/equalityPuzzle.svg" className="absolute z-50 lg:w-[200px] md:w-[175px] w-[120px] xl:left-[85%] md:left-[80%] md:top-[%] left-[50%] top-[50%]"/>
            <img src="/educationPuzzle.svg" className="absolute z-60 lg:w-[200px] md:w-[150px] w-[100px] md:left-[70%] md:top-[4%] top-[60%] left-[20%]"/>
            <img src="/handsPuzzle.svg" className=" delimitationred lg:w-full lg:h-full md:w-full md:h-full absolute z-10 xl:top-[10%]   lg:top-[20%] lg:left-[0%] md:left-[0px]  md:top-[20%] top-[81%] left-[-15%] pointer-events-none"/>
       </div>
    );
}
