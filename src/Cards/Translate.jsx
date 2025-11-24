import { useState} from "react"
function Translate({english, deitsch, next, reset}) {    
    const [showFront, setShowFront] = useState(true)
    const [input, setInput] = useState("")
    const handleFlip = () => {
        setShowFront((prev) => {
            if (prev===false){
                setInput("")
            }
            return !prev
        })
    }
    return (
        <>
            {showFront === true ?
                <div className="flashCard">
                    <div className="front">
                        <h2>{english}</h2>
                        <input className={"promptInput"} value={input} onKeyDown={(event)=>{(event.key === "Enter") && (handleFlip())}} onChange={(event)=>{setInput(event.target.value)}}></input>
                    </div>
                    <div className="flipReset">
                        <button className="resetButton" onClick={reset}>Reset</button>
                        <div className="space"></div>
                        <button onClick={handleFlip}>Flip</button>
                    </div>
                </div>
                :
                <div className="flashCard">
                    <div className="back">
                        <h2 className="deitsch">{deitsch}</h2>
                        {input ? <h2 className={"deitsch userAnswer"}>{input}</h2>: ""}
                    </div>
                    <div className="flipReset">
                        <button className="resetButton" onClick={reset}>Reset</button>
                        <div className="space"></div>
                        <button className="score" onClick={()=>{next(8)}}>❌</button>
                        <button className="score" onClick={()=>{next(4)}}>❎</button>
                        <button className="score" onClick={()=>{next(-1)}}>✅</button>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Translate