function NavBar({setPage}) {
  
  function handleClick (pageNumber) {
    setPage(pageNumber)
  }

  return (
    <nav>
        <button onClick={ ()=>{handleClick(1)} } className="english">About Us</button>
        <button onClick={ ()=>{handleClick(2)} } className="english">Decks</button>
        <button onClick={ ()=>{handleClick(3)} } className="english">Dictionary</button>
    </nav>
  )
 }

export default NavBar