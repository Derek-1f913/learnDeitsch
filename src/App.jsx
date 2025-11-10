import NavBar from "./NavBar"
import Dictionary from "./Pages/Dictionary"
import AboutUs from "./Pages/AboutUs"
import Practice from "./Pages/Practice"
import { useState} from "react"

function App() {
  const [page, setPage] = useState(1)
  return (
    <>
      <header>
        <div className="headerDiv">
          <img src="/miniLogo.png" alt="traditional Pennsylvania Dutch flower logo"/>
          <h2 className="deitsch">SchwetzDeitsch.org</h2>
          <img src="/miniLogo.png" alt="traditional Pennsylvania Dutch flower logo"/>
        </div>
        <NavBar setPage={setPage}/>
      </header>
      {page === 3 ? <Dictionary/> : <div/>}
      {page === 1 ? <AboutUs/> : <div/>}
      {page === 2 ? <Practice/> : <div/>}
    </>
  )
}

export default App
