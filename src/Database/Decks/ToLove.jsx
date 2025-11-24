import Translate from "../Cards/Translate"
import { useEffect } from "react"

function ToLove ({addDeck}) {
  function displayer (english, deitsch, next, reset) {
    return <Translate english={english} deitsch={deitsch} next={next} reset={reset}/>
  }
  const Deck = {
    name: "To love",
    included: false,
    cards: [
      {
        english: "I love myself",
        deitsch: "Ich lieb mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love you",
        deitsch: "Ich lieb dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love him",
        deitsch: "Ich lieb en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love her",
        deitsch: "Ich lieb sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love it",
        deitsch: "Ich lieb es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love us",
        deitsch: "Ich lieb uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love y'all",
        deitsch: "Ich lieb eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "I love them",
        deitsch: "Ich lieb sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love me",
        deitsch: "Du liebscht mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love yourself",
        deitsch: "Du liebscht dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love him",
        deitsch: "Du liebscht en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love her",
        deitsch: "Du liebscht sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love it",
        deitsch: "Du liebscht es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love us",
        deitsch: "Ich liebscht uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "You love them",
        deitsch: "Ich liebscht sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves me",
        deitsch: "Er liebt mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves you",
        deitsch: "Er liebt dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves himself",
        deitsch: "Er liebt sich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves him",
        deitsch: "Er liebt en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves her",
        deitsch: "Er liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves it",
        deitsch: "Er liebt es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves us",
        deitsch: "Er liebt uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves y'all",
        deitsch: "He liebt eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "He loves them",
        deitsch: "Er liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves me",
        deitsch: "Sie liebt mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves you",
        deitsch: "Sie liebt dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves him",
        deitsch: "Sie liebt en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves herself",
        deitsch: "Sie liebt sich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves her",
        deitsch: "Sie liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves it",
        deitsch: "Sie liebt es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves us",
        deitsch: "Sie liebt uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves y'all",
        deitsch: "Sie liebt eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "She loves them",
        deitsch: "Sie liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves me",
        deitsch: "Es liebt mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves you",
        deitsch: "Es liebt dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves him",
        deitsch: "Es liebt en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves her",
        deitsch: "Es liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves itself",
        deitsch: "Es liebt sich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves it",
        deitsch: "Es liebt es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves us",
        deitsch: "Es liebt uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves y'all",
        deitsch: "Es Liebt eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "It loves them",
        deitsch: "Es liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love me",
        deitsch: "Mir liewe mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love you",
        deitsch: "Mir liewe dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love him",
        deitsch: "Mir liewe en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love her",
        deitsch: "Mir liewe sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love it",
        deitsch: "Mir liewe es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love ourselves",
        deitsch: "Mir liewe uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love y'all",
        deitsch: "Mir liewe eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "We love them",
        deitsch: "Mir liewe sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love me",
        deitsch: "Dihr liebt mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love him",
        deitsch: "Dihr liebt en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love her",
        deitsch: "Dihr liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love it",
        deitsch: "Dihr liebt es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love us",
        deitsch: "Dihr liebt uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love yourselves",
        deitsch: "Dihr liebt eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "Y'all love them",
        deitsch: "Dihr liebt sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love me",
        deitsch: "Sie liewe mich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love you",
        deitsch: "Sie liewe dich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love him",
        deitsch: "Sie liewe en",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love her",
        deitsch: "Sie liewe sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love it",
        deitsch: "Sie liewe es",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love us",
        deitsch: "Sie liewe uns",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love y'all",
        deitsch: "Sie liewe eich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love themselves",
        deitsch: "Sie liewe sich",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
      },
      {
        english: "They love them",
        deitsch: "Sie liewe sie",
        display (next, reset) { return displayer(this.english, this.deitsch, next, reset)}
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

export default ToLove