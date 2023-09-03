

export function GoalSection(props){
    
    return(
       <div id="goalSection" className="delimitationgreen w-full h-[550px] bg-[hsl(35,58%,81%)] flex items-center px-[140px] relative overflow-hidden">
            <div className="bg-[hsl(22,72%,63%)] w-[400px] h-[300px] p-6 rounded-xl ">
                <h2  className="text-white mb-4 ">What are the goals?</h2>
                <p className="text-white text-[16px] leading-6">
                With your team of a student, non-profit, and for-profit, together you will design and develop a social good program that tackles 
                current issues in San Diego. Below are examples of past programs that were executed.
                </p>
            </div>
            <img src="/environmentPuzzle.svg" className="absolute w-[350px] z-20 left-[28%] top-[0%]"/>
            <img src="/housingPuzzle.svg" className="absolute z-30 w-[250px] left-[50%] top-[4%]"/>
            <img src="/healthPuzzle.svg" className="absolute z-40  w-[250px] left-[10%] top-[55%]"/>
            <img src="/equalityPuzzle.svg" className="absolute z-50 left-[80%] top-[%]"/>
            <img src="/educationPuzzle.svg" className="absolute z-60 w-[200px] left-[70%] top-[4%]"/>
            <img src="/handsPuzzle.svg" className="absolute z-10 top-[25%] left-[0%] left-[%] top-[%]"/>
       </div>
    );
}