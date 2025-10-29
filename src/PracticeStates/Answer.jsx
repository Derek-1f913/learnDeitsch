function Answer({card, nextCard}) {
  
  function handleNext () {
    nextCard()
  }

  return (
    <div className="aDiv">
        <audio autoPlay={true} controls={true} preload="auto" src={card.answerAudio[Math.floor(Math.random() * card.answerAudio.length)]}></audio>
        <p>{card.answerText}</p>
        <img src={card.promptImage} alt="" />
        <button onClick={handleNext}>flip</button>
    </div>
  )
 }

export default Answer