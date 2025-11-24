import PicAudioTranslate from "../Cards/PicAudioTranslate"
import { useEffect } from "react"

function Farewells ({addDeck}) {
  function displayer (english, deitsch, pic, audio, next, reset) {
    let oneAudio = audio[Math.floor(Math.random() * audio.length)]
    return <PicAudioTranslate english={english} deitsch={deitsch} next={next} reset={reset} pic={pic} audio={oneAudio}/>
  }
  const Deck = {
    name: "Farewells",
    included: false,
    cards: [
      {
        english: "Farewell",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/farewells/Mach%27sGut-kct14p.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/Mach%27sGut1-oBHmKIAnN1sx9HaX5SZlZKleMlMcp1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/Mach%27sGut2-MsBiE0zxon56bAJD569DfOBAkQjloo.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/Mach%27sGut3-DNGlrQDv3j9xr0OYJVC66rCUTzneHj.mp3"
        ],
        deitsch: "Mach's Gut",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "See you later",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/farewells/SehnDichSchpeeder-aewvjl.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/SehnDichSchpeeder1-bvnBQ0wyRqRwIsOSi3ZOdXliNoIcVL.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/SehnDichSchpeeder2-o7m9fGnmdX8JzU1PuvR8w999KSxcJN.mp3"
        ],
        deitsch: "Sehn dich schpeeder",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "Good night",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/farewells/GutiNacht-854r8z.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/farewells/GutiNacht1-TqBSGfwIaSLkS6cjymyCmo6lnw9sAQ.mp3"
        ],
        deitsch: "Guti Nacht",
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

export default Farewells