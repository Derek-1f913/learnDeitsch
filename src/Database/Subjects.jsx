import AudioTranslate from "../Cards/AudioTranslate"
import { useEffect } from "react"

function Subjects ({addDeck}) {
  function displayer (english, deitsch, pic, audio, next, reset) {
    let oneAudio = audio[Math.floor(Math.random() * audio.length)]
    return <AudioTranslate english={english} deitsch={deitsch} next={next} reset={reset} pic={pic} audio={oneAudio}/>
  }
  const Deck = {
    name: "Subject Pronouns",
    included: false,
    cards: [
      {
        english: "I",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/I/Ich1-xysjmp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/I/Ich2-p3n7yk.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/I/Ich3-vxo5je.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/I/Ich4-bia3ir.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/I/Ich5-tskx9d.mp3"
        ],
        deitsch: "Ich",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "You",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/You/Du1-o2c4d9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/You/Du2-7hzbty.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/You/Du3-ufb1bg.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/You/Du4-o14s1z.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/You/Du5-%0A52b5e0.mp3",
        ],
        deitsch: "Du",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "He",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/He/Er1-%0Awgonza.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/He/Er2-h1vuy0.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/He/Er3-gnzj69.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/He/Er4-vcuezc.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/He/Er5-6t8hza.mp3"
        ],
        deitsch: "Er",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "She",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie1-4plgml.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie2-urprvc.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie3-i9meht.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie4-0gk1hf.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie5-53g43w.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/She/Sie6-zwm036.mp3"
        ],
        deitsch: "Sie",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "It",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/It/Es1-swotqj.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/It/Es2-c8isyp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/It/Es3-ywky2n.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/It/Es4-f8f1py.mp3"
        ],
        deitsch: "Es",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "We",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir1-jmm1ls.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir2-ikm886.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir3-ikm886.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir4-zewaa9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir5-p3qbpf.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir6-2qmp11.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/We/Mir7-vur5xw.mp3",
        ],
        deitsch: "Mir",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "Y'all",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/Y%27all/Dihr1-tn1160.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/Y%27all/Dihr2-2fag3g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/Y%27all/Dihr3-dqakg4.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/Y%27all/Dihr4-m32vam.mp3"
        ],
        deitsch: "Dihr",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "They",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%231-4plgml.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%232-urprvc.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%233-i9meht.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%234-j24e7p.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%235-97dclm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/Pronouns/Subjects/They/Sie%236-lc5gg4.mp3",
        ],
        deitsch: "Sie",
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

export default Subjects