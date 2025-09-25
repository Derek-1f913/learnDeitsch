
function NavBar({setPage}) {
  function clicked (page) {
    setPage(page)
  }
  
  return (
    <nav>
        <button onClick={()=>{clicked(3)}}>About Us</button>
        <button onClick={()=>{clicked(1)}}>Decks</button>
        <button onClick={()=>{clicked(2)}}>Dictionary</button>
    </nav>
  )
 }

export default NavBar