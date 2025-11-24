import ColorCard from "../Cards/ColorCard"
import { useEffect } from "react"

function Colors ({addDeck}) {
  function displayer (backText, hexColor, next, reset) {
    return <ColorCard backText={backText} hexColor={hexColor} next={next} reset={reset}/>
  }
  const Deck = {
    name: "Colors",
    included: false,
    cards: [
      {
        backText: "Rot",
        hexColor: "#F81300",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Bloh",
        hexColor: "#0002FD",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Grien",
        hexColor: "#1A7403",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Gehl",
        hexColor: "#FDFC01",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Aarensch",
        hexColor: "#DF610D",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Burpel",
        hexColor: "#020087",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Pinkscht",
        hexColor: "#E9BDBC",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Groh",
        hexColor: "#ABABAB",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Weiss",
        hexColor: "#FFFFFF",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      {
        backText: "Schwatz",
        hexColor: "#000000",
        display (next, reset) { return displayer(this.backText, this.hexColor, next, reset)}
      },
      
    ]
  }
  useEffect(()=>{
    addDeck(Deck)
  },[])

  return (
    <></>
  )
}

export default Colors