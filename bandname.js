const button = document.querySelector("#generate")
const placeHolder = document.querySelector("#placeholder")

const DATA = {
  one: [
    "Abnormally Big",
    "Anal",
    "Pestilent",
    "Satanic",
    "Sadistic",
    "Savage",
    "Bloody",
    "Cannibal",
    "Morbid",
    "Iron",
    "Purulent",
    "Penis",
    "Sublime",
    "Extreme",
    "Black",
    "Dark",
    "Putric",
    "Ripped",
    "Deadly",
    "Sweet",
    "Gorgious",
    "Funny",
    "Laughable",
    "Cute",
    "Rotten",
    "Mercyless",
    "Critical",
    "Brutal",
    "Dying",
    "Idiot",
    "Smart",
  ],
  two: [
    "Cunt",
    "Penetrator",
    "Vomit",
    "Circoncision",
    "Shit",
    "Cum",
    "Boil",
    "Viscera",
    "Guts",
    "Corpse",
    "Angel",
    "Demon",
    "Skin",
    "President",
    "Rhapsody",
    "Dog",
    "Wolf",
    "Sodomizer",
    "Ebola",
    "Covid",
    "Psoriasis",
    "Torture",
    "Death",
    "Ice",
    "Penis",
    "Gonorrhea",
    "Flesh",
    "Daughter",
    "Son",
    "Nephew",
    "Call",
    "Game",
    "Map",
    "Rape",
    "Bride",
    "Man",
    "Garden",
    "Paradize",
    // Because programming languages are awful!
    "Rust",
    "Python",
    "Javascript",
    "Antechrist",
    "Ataraxia",
  ],
  three: [
    "of Jesus",
    "of Satan",
    "from Hell",
    "of Taxes",
    "of my Boss",
    "of God",
    "of Death",
    "of Steel",
    "of Fire",
    "of Chaos",
    "of Cock",
    "of Vagina",
    "from Space",
    "of Torture",
    "of Valhalla",
    "of Penis",
    "in Putrefaction",
    "of Belzebuth",
    "of Neverland",
    "of Soul",
    "of the Internet",
    "from Cloud",
    "of Testicle",
  ],
}

const FONTS = [
    "Bogarts Metal",
    "Dark Metal Institute",
    "Horrors Metal",
    "METAC___",
    "Metal-Demo",
    "MetalChakra",
    "MetalClash",
    "MetalEvent",
    "MetalMacabre",
    "MetalMania-Regular",
    "MetalShard",
    "MetalShow",
    "MetalShred",
    "MetalWitch",
    "XXII Ultimate-Black-Metal",
    "sketchvetica",
]

const PICS = [
  {url: "/pics/anatomia_phto1_nihilistic-webzine.jpg", alt: "Anatomia - Nihilistic Webzine"},
  {url: "/pics/beastpetrify_phto5_nihilistic_webzine.jpg", alt: "Beast Petrify - Nihilistic Webzine"},
  {url: "/pics/critic_phto_nihilistic_webzine.jpg", alt: "Critic Nihilistic Webzine"},
  {url: "/pics/death_decline.jpg", alt: "Death Decline"},
  {url: "/pics/death-metal.webp", alt: "Unknown"},
  {url: "/pics/fallofseraphs_phto1_nihilistic_webzine.jpg", alt: "Fall of Seraph - Nihilistic Webzine"},
  {url: "/pics/Heavingearth_phto2.jpg", alt: "Heaving Earth - Nihilistic Webzine"},
  {url: "/pics/matterhorn_phto5_nihilistic_webzine.jpg", alt: "Matterhorn - Nihilistic Webzine"},
  {url: "/pics/metastasis_phto5_nihilistic_webzine.jpg", alt: "Metastasis - Nihilistic Webzine"},
  {url: "/pics/pazuzu_phto_nihilistic_webzine.jpg", alt: "Pazuzu - Nihilistic Webzine"},
  {url: "/pics/putrefiancephto_nihilistic_webzine.jpg", alt: "Putrefiance - Nihilistic Webzine"},
  {url: "/pics/rotten_phto2_nihilistic_webzine.jpg", alt: "Rotten - Nihilistic Webzine"},
  {url: "/pics/vomitory.jpg", alt: "vomitory"},
]

const bandShow = document.querySelector("div#band-show")

button.onclick = generate 

function generate() {
  const bandName = getBandName()
  placeHolder.innerHTML = bandName
  placeHolder.style.fontFamily = FONTS[getRandomInt(FONTS.length)]
  const pic = PICS[getRandomInt(PICS.length)]
  const i = document.createElement("img")
  i.src = pic.url
  i.alt = pic.alt
  i.title = pic.alt
  const existing = bandShow.querySelector("img")
  if (existing) {
    bandShow.removeChild(existing)
  }
  bandShow.appendChild(i)
  bandShow.style.display = "inherit"
}

function getRandomInt(max) {
  return Math.floor(Math.random()*max)
}

function getBandName() {
  const one = DATA.one[getRandomInt(DATA.one.length)]
  const two = DATA.two[getRandomInt(DATA.two.length)]
  const three = DATA.three[getRandomInt(DATA.three.length)]

  switch(getRandomInt(3)) {
    case 0: return `${one} ${two} ${three}`
    case 1: return `${one} ${two}`
    case 2: return `${two} ${three}`
  }
}

generate()

// vim: fdm=indent
