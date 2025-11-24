import ToLove from "./ToLove"
import Greetings from "./Greetings"
import Farewells from "./Farewells"
import {useState, useEffect} from "react"

function Decks ({setDecksState}) {
    
    const [allDecks, setAllDecks] = useState([])
    
    function addDeck (next) {
        setAllDecks((prev)=>{
            if (prev.includes(next)) {
                return [...prev]
            }
            return [...prev, next]
            
        })
    }
   
    useEffect(()=>{
        setDecksState(allDecks)
    },[allDecks])
    
    return (
        <>  
            {/* these components intentionaly don't display anything but they are rendered so that their functions run*/}
            <ToLove addDeck={addDeck}/>
            <Greetings addDeck={addDeck}/>
            <Farewells addDeck={addDeck}/>
        </>
    )

}

export default Decks