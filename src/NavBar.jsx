
function NavBar({setPage}) {
  function clicked (page) {
    setPage(page)
  }
  
  return (
    <nav>
        <button onClick={()=>{clicked(3)}} className="english">About Us</button>
        <button onClick={()=>{clicked(1)}} className="english">Decks</button>
        <button onClick={()=>{clicked(2)}} className="english">Dictionary</button>
    </nav>
  )
 }

export default NavBar