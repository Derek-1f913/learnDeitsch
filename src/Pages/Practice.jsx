import Prompt from "../PracticeStates/Prompt"
import Answer from "../PracticeStates/Answer"
import { useState } from "react"
function Practice({cards, setStart}) {
  const [card, setCard] = useState(cards[Math.floor(Math.random() * cards.length)])
  const [front, setFront] = useState(true)
  function nextCard () {
    setCard(cards[Math.floor(Math.random() * cards.length)])
    setFront(true)
  }
  return (
    <div className="practiceDiv">
        {front ? <Prompt card={card} setFront={setFront}/> : <Answer card={card} nextCard={nextCard}/>}
    </div>
  )
 }

export default Practice