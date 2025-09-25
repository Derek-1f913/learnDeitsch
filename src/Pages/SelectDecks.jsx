import { useState } from "react"
import vDecks from "../Database/Decks"
function SelectDecks({setCards, setStart}) {
    const [decks, setDecks] = useState(vDecks)
    function handleClick (value, indx) {
        if (value.included === false) {
            setCards((prev) => {
                return [...prev, ...value.cards]
            })
            setDecks((prev) =>{
                let tempDecks = prev
                tempDecks[indx].included = true
                return tempDecks
            })
        }
    }
    function handleReset () {
        setDecks((prev) => {
            return prev.map((element) => {
                element.included = false
                return element
            })
        })
        setCards([])
    }
    function handleStart () {
        setCards((fCards) => {
           let result = fCards
            if (fCards.length === 0) {
                let allCards = []
                decks.forEach((thisDeck) => {
                    allCards = [...allCards, ...thisDeck.cards]
                })
                result = allCards
            }
            return result
        })
        setStart(true)
    }
    
    return (
        <>
            <ul>
                {decks.map((deck, indx) =>
                <li 
                key={deck.name} 
                style={deck.included === true ? {backgroundColor: "darkmagenta"} : {backgroundColor: "gray"}}
                value={deck}
                onClick={() => {
                    handleClick(deck, indx)
                }}
                >{deck.name}</li>
                )}
            </ul>
            <div className="resetAndStart">
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleStart}>Start</button>
            </div>
        </>
    )
}

export default SelectDecks