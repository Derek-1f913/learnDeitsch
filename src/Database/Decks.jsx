import ToLove from "./ToLove"
import Greetings from "./Greetings"
import Farewells from "./Farewells"
import ZeroToTen from "./ZeroToTen"
import {useState, useEffect} from "react"
import Subjects from "./Subjects"

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
            <Greetings addDeck={addDeck}/>
            <Farewells addDeck={addDeck}/>
            <ZeroToTen addDeck={addDeck}/>
            <Subjects addDeck={addDeck}/>
            <ToLove addDeck={addDeck}/>

        </>
    )

}

export default Decks