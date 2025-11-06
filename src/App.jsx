import NavBar from "./NavBar"
import SelectDecks from "./Pages/SelectDecks"
import Dictionary from "./Pages/Dictionary"
import AboutUs from "./Pages/AboutUs"
import Practice from "./Pages/Practice"
import cards from "./Database/Decks"
import { useState } from "react"

function App() {
  const [page, setPage] = useState(3)
  const [start, setStart] = useState(false)
  const [cards, setCards] = useState([])
  return (
    <>
      <header>
        <div className="headerDiv">
          <img src="/miniLogo.png" alt="traditional Pennsylvania Dutch flower logo"/>
          <h1>SchwetzDeitsch.org</h1>
          <img src="/miniLogo.png" alt="traditional Pennsylvania Dutch flower logo"/>
        </div>
        <NavBar setPage={setPage}/>
      </header>
      {page === 2 ? <Dictionary/> : <div/>}
      {page === 3 ? <AboutUs/> : <div/>}
      {page === 1 && start === true ? <Practice cards={cards} setStart={setStart}/> : <div/>}
      {page === 1 && start === false ? <SelectDecks setCards={setCards} setStart={setStart}/> : <div/>}
    </>
  )
}

export default App
