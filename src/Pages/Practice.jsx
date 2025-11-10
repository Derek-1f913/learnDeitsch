import {useState, useEffect} from "react"
import Decks from "../Database/Decks"
function Practice() {
    const [decksState, setDecksState] = useState([])
    const [oddsArr, setOddsArr] = useState([])
    const [gameDeck, setGameDeck] = useState([])
    const [currentCard, setCurrentCard] = useState({})

    function handleReset () {
        setDecksState((prevDecks)=> {
            let temp = [...prevDecks]
            temp.forEach(elementDeck => {
                elementDeck.included = false
            })
            setCurrentCard({})
            setGameDeck([])
            return temp
        })
    }

    function handleStart () {
        setDecksState((prevDecks) => {
            let decksCopy = [...prevDecks]
            let gameCards = []
            decksCopy.forEach(singleDeck => {
                singleDeck.included && (gameCards = [...gameCards, ...singleDeck.cards])
            });
            !gameCards.length && decksCopy.forEach(element => {gameCards = [...gameCards, ...element.cards]});
            setGameDeck(gameCards)
            return prevDecks
        })
    }

    function displaySelector () {
        return (
            <>
                <ul>
                    {decksState.map((deck, indx) =>
                    <li 
                        key={deck.name} 
                        style={deck.included === true ? {backgroundColor: "darkmagenta"} : {backgroundColor: "gray"}}
                        onClick={() => {
                            setDecksState((prev) => {
                                let temp = [...prev]
                                temp[indx].included = true
                                return temp
                            }) 
                        }} 
                    >{deck.name}</li> )
                    }
                </ul>
                <div className="resetAndStart">
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleStart}>Start</button>
                </div>
            </>
        )
    }
    
    useEffect(()=>{
        if((gameDeck.length > 0 && oddsArr.length > 0) && Object.keys(currentCard).length === 0) {
            setCurrentCard(()=>{
                const index = Math.floor(Math.random() * oddsArr.length)
                console.log(index)
                console.log(gameDeck)
                console.log(oddsArr)
                let temp = gameDeck[oddsArr[index]]
                console.log(temp)
                temp.index = index
                return temp
            })
        }
        if(gameDeck.length > 0 && oddsArr.length === 0){
            setOddsArr(()=>{
                let progressDeck = []
                gameDeck.forEach((element, i) => {
                    for (let index = 0; index < 10; index++) {
                        progressDeck.push(i)
                    }
                });
                return progressDeck
            })
        }
    }, [currentCard, setCurrentCard, gameDeck, setGameDeck, oddsArr, setOddsArr])

    function handleNext (score) {
        if(Object.keys(currentCard).length === 0){
            return
        }
        if(score < 0){
            setOddsArr((prev)=>{
                let temp = prev
                temp.splice(currentCard.index, 1)
                return temp
            })
        } else {
            for (let i = 0; i < score; i++) {
                setOddsArr((prev)=>{
                    return [...prev, currentCard.index]
                })  
            }
        }
        setCurrentCard({})
    }
    return (
        <>
            {Object.keys(currentCard).length === 0 ? displaySelector() : currentCard.display(handleNext, handleReset)}
            {/* Decks intentionaly doesn't display anything, it's rendered so that the functions run*/}
            <Decks setDecksState={setDecksState}/>
        </>
    )
}

export default Practice