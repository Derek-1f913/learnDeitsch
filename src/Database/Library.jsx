import ToLove from "./Decks/ToLove"
import Greetings from "./Decks/Greetings"
import Farewells from "./Decks/Farewells"
import ZeroToTen from "./Decks/ZeroToTen"
import {useState, useEffect} from "react"
import Subjects from "./Decks/Subjects"
import Colors from "./Decks/Colors"

function Library ({setDecksState}) {
    
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
            <Colors addDeck={addDeck}/>

        </>
    )

}

export default Library