function Prompt({card, setFront}) {
  function handleFlip () {
    setFront(false)
  }
  
  return (
    <div className="pDiv" style={{backgroundColor: "gray"}}>
        <audio controls={true} preload="auto" src={card.promptAudio[Math.floor(Math.random() * card.promptAudio.length)]}></audio>
        <p>{card.promptText}</p>
        <img src={card.promptImage} alt="" />
        <button onClick={handleFlip}>flip</button>
    </div>
  )
 }

export default Prompt