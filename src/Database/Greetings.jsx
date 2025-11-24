import PicAudioTranslate from "../Cards/PicAudioTranslate"
import { useEffect } from "react"

function Greetings ({addDeck}) {
  function displayer (english, deitsch, pic, audio, next, reset) {
    let oneAudio = audio[Math.floor(Math.random() * audio.length)]
    return <PicAudioTranslate english={english} deitsch={deitsch} next={next} reset={reset} pic={pic} audio={oneAudio}/>
  }
  const Deck = {
    name: "Greetings",
    included: false,
    cards: [
      {
        english: "Good Day",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/greetings/GuderDaag-t8zcfd.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderDaag1-oaHC0HxKisgtWjgQAlTh2UmyWEvTDO.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderDaag2-74C3ZI81HwHLbJ4wjiUIfJYRlyany9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderDaag3-wS1uhXHZa5B0Vdbk5u8n8PiZK35aOn.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderDaag4-4tzGJ8nDKG476A8AIVDkcIgFcAaMfI.mp3"

        ],
        deitsch: "Guder Daag",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "Good morning",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/greetings/GuderMariye-txnkec.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderMariye1-gcsCwZv9mZiiNTmj6c4GKID82RGUnl.mp3",
        ],
        deitsch: "Guder Mariye",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "Good afternoon",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/greetings/GuderNuumidaag-qxld2h.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderNummidaag1-5K01g9rxgkgnzvnyXI4qo8cdXW7NAV.mp3"
        ],
        deitsch: "Guder Nummidaag",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "Good evening",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/greetings/GuderOwed-ws3w1c.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/greetings/GuderOwed1-FO7lP2VsWgIk37blR7JpwRUSv8IAMe.mp3"
        ],
        deitsch: "Guder Owed",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
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

export default Greetings