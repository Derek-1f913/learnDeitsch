import PicAudioTranslate from "../Cards/PicAudioTranslate"
import { useEffect } from "react"

function ZeroToTen ({addDeck}) {
  function displayer (english, deitsch, pic, audio, next, reset) {
    let oneAudio = audio[Math.floor(Math.random() * audio.length)]
    return <PicAudioTranslate english={english} deitsch={deitsch} next={next} reset={reset} pic={pic} audio={oneAudio}/>
  }
  const Deck = {
    name: "Numbers 0-10",
    included: false,
    cards: [
      {
        english: "0",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/0-atyFdexYVkkc33sveLHuu9yjCteFsc.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null1-002xnzta.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null2-v7km7ep6.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null3-787qxlg5.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null4-0vtnnkmz.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null5-gau9d6zq.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null6-dbb8ybm7.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null7-l18a8eqi.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null8-8ulnm8yc.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/zero/Null9-6o70ub0d.mp3",
        ],
        deitsch: "Null",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "1",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/1-HyqDbCflixqTBOr1kI6oFvhvmWLdIR.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens1-x4n3q3nm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens2-w728wfan.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens3-jju2fnv1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens4-fkieaqdh.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens5-tonr2j8g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens6-w7icy6xp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens7-koe26fm1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens8-58ldxw3r.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/one/Eens9-84o1aui4.mp3",
        ],
        deitsch: "Eens",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "2",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/2-cD2OgXqqTpFdNbzwHmcU3z9yvdA8Qs.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee1-7j37yc50.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee2-78vemz4g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee3-32a0bo9c.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee4-r1vffl0g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee5-lcsxpxf8.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee6-pkyhg5ub.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee7-f7f6gctj.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee8-v0akfg39.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee9-bqheajex.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee10-wrzxmwon.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee11-mnp16duw.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee12-38q5qyvi.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee13-vrmgrg57.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/two/Zwee14-cvedzi74.mp3",
        ],
        deitsch: "Zwee",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "3",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/3-RLZVg2jlrHFK4tt4GxyNJkYxtTW0ag.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei1-75ojgr83.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei10-rp9seitq.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei11-u4ern9gi.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei2-4c14bu8d.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei3-t0yl6ur8.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei5-s9reeixe.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei4-yft6taa9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei6-blzfluhi.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei7-39axkila.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei8-1zumav4r.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/three/Drei9-srv3hi85.mp3",
        ],
        deitsch: "Drei",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "4",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/4-BAh1ciw7kH80TV91AX3vBQglgbPVxM.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier1-3h2bdyny.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier10-fg424vm9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier2-u5bb8vvp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier3-5esoa9th.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier4-58y1q8ic.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier5-djhrwvbb.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier6-1xtb9kma.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier7-2mf1sc1o.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier8-i2g3br0q.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/five/Vier9-hwsgcfsr.mp3",
        ],
        deitsch: "Vier",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "5",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/5-5bOMg0kYsRtBtqpfe9TRScyksqq1kV.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf1-rip8pbhw.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf10-b3qop9c1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf11-80r87z3m.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf12-0xzgcu4q.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf2-obyruejg.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf3-natumffj.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf4-eacvss86.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf5-ulwz1fgd.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf6-5dzb7bas.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf7-bq5ety1r.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf8-og016ls3.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/four/Fimf9-loig1c0p.mp3",
        ],
        deitsch: "Fimf",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "6",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/6-8bUoyggh7kOSg6n1uXAN2eNYRqmItn.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex10-s29xig0c.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex11-7j282rkj.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex12-sfjhg54j.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex13-42ktp5gq.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex14-v51viyxq.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex15-0tm5bq84.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex2-b0i3yxmz.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex3-b0i3yxmz.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex4-d44lrd9c.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex5-yzvbkpwm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex7-7t9dttzp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex8-35q5yprm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex6-az8wdpm9.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/six/Sex9-gcfc1hxj.mp3",
        ],
        deitsch: "Sex",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "7",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/7-qSuY6WDX8I9aI5a4E3KaecwilVXCOH.png",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe1-sykr4r89.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe10-q9zq63z2.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe11-8tjhrujj.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe12-yqo11ue4.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe13-g2ex2k7n.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe2-t8foxcfr.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe14-23qcgdo2.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe3-vsd6hhfn.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe4-gau9d6zq.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe5-aseujh35.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe8-sztxt6yb.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe9-9vpaqlmz.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe6-knxa4lck.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/seven/Siwwe7-avn6563g.mp3",
        ],
        deitsch: "Siwwe",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "8",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/8-daEVCB9UWSHRcwKyT8fpJEqJ1hGX0j.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht1-274slcoc.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht10-787qxlg5.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht2-amaarwp3.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht3-2ydrmd93.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht4-35q5yprm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht5-aq8qszuv.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht6-ao89c826.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht7-4l58mhtp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht8-6py7hyl1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/eight/Acht9-v7km7ep6.mp3",
        ],
        deitsch: "Acht",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "9",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/9-o2r3fTVswYjbnmYupo7szi1BXlJTDw.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein1-0vtnnkmz.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein10-w7icy6xp.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein11-koe26fm1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein2-dbb8ybm7.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein4-6o70ub0d.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein3-l18a8eqi.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein5-x4n3q3nm.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein6-w728wfan.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein7-jju2fnv1.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein8-fkieaqdh.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/nine/Nein9-tonr2j8g.mp3",
        ],
        deitsch: "Nein",
        display (next, reset) { return displayer(this.english, this.deitsch, this.pic, this.audio, next, reset)}
      },
      {
        english: "10",
        pic: "https://n19huqbctshx4yio.public.blob.vercel-storage.com/images/OnetoTen/10-X7u4rsnOKmcLBDet1STIVF5TOJeUJP.jpg",
        audio: [
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe1-58ldxw3r.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe2-84o1aui4.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe3-7j37yc50.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe4-78vemz4g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe5-32a0bo9c.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe6-r1vffl0g.mp3",
          "https://n19huqbctshx4yio.public.blob.vercel-storage.com/audio/ZeroToTen/ten/Zehe7-lcsxpxf8.mp3"
        ],
        deitsch: "Zehe",
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

export default ZeroToTen