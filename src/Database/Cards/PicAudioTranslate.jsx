import { useState} from "react"
function PicAudioTranslate({english, deitsch, pic, audio, next, reset}) {    
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
                        <img className={"cardPic"} src={pic}/>
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
                        <audio autoPlay={true} style={{height: "2rem", backgroundColor: "gray"}} src={audio}/>
                        <h2 className="deitsch">{deitsch}</h2>
                        {input ? <h2 className={"deitsch userAnswer"}>{input}</h2>: ""}
                        <img className={"cardPic"} src={pic}/>
                    </div>
                    <div className="flipReset">
                        <button className="resetButton" onClick={reset}>Reset</button>
                        <div className="space"></div>
                        <button className="score" onClick={()=>{next(4)}}>❌</button>
                        <button className="score" onClick={()=>{next(2)}}>❎</button>
                        <button className="score" onClick={()=>{next(-1)}}>✅</button>
                    </div>
                </div>
            }
            
        </>
    )
}

export default PicAudioTranslate