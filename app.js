const option = document.querySelector("#zodiac-option");
const result = document.querySelector(".result-container");
const optionValue = document.querySelectorAll("option");

const aries = {
  sign: "Aries",
  element: "Fire",
  polarity: "Positive",
  quality: "Cardinal",
  rulingPlanet: "Mars",
  rulingHouse: "First",
  spiritColor: "Red",
  luckyGem: "Diamond",
  flower: "Thistle & Honeysuckle",
  loveMatch: "Sagittarius",
  img: "images/aries.png",
  symbol: "svg/aries.png",
  dsc: "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life."
};

const libra = {
  sign: "Libra",
  element: "Air",
  polarity: "Positive",
  quality: "Cardinal",
  rulingPlanet: "Mars",
  rulingHouse: "Seventh",
  spiritColor: "Blue",
  luckyGem: "Sapphire",
  flower: "Rose",
  loveMatch: "Gemini",
  img: "images/libra.png",
  symbol: "svg/libra.png",
  dsc: "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count."
};

const taurus = {
  sign: "Taurus",
  element: "Earth",
  polarity: "Negative",
  quality: "Fixed",
  rulingPlanet: "Venus",
  rulingHouse: "Second",
  spiritColor: "Pink",
  luckyGem: "Emerald",
  flower: "Rose, Poppy, & Foxglove",
  loveMatch: "Cancer & Virgo",
  img: "images/taurus.png",
  symbol: "svg/taurus.png",
  dsc: "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart."
};

const scorpio = {
  sign: "Scorpio",
  element: "Water",
  polarity: "Negative",
  quality: "Fixed",
  rulingPlanet: "Pluto, Mars",
  rulingHouse: "Eight",
  spiritColor: "Black",
  luckyGem: "Topaz & Opal",
  flower: "Hisbiscus & Geraniums",
  loveMatch: "Cancer",
  img: "images/scorpio.png",
  symbol: "svg/scorpio.png",
  dsc: "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty."
};

const gemini = {
  sign: "Gemini",
  element: "Air",
  polarity: "Positive",
  quality: "Mutable",
  rulingPlanet: "Mercury",
  rulingHouse: "Third",
  spiritColor: "Yellow",
  luckyGem: "Tiger's Eye & Emerald",
  flower: "Lavender & Lily of the Valley",
  loveMatch: "Aries & Leo",
  img: "images/gemini.png",
  symbol: "svg/gemini.png",
  dsc: "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world.Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive.While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs."
};

const sagittarius = {
  sign: "Sagittarius",
  element: "Fire",
  polarity: "Positive",
  quality: "Mutable",
  rulingPlanet: "Jupiter",
  rulingHouse: "Ninth",
  spiritColor: "Light Blue",
  luckyGem: "Topaz",
  flower: "Carnations & Crocuses",
  loveMatch: " Aries",
  img: "images/sagittarius.png",
  symbol: "svg/sagittarius.png",
  dsc: "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie."
};

const cancer = {
  sign: "Cancer",
  element: "Water",
  polarity: "Negative",
  quality: "Fixed",
  rulingPlanet: "Moin",
  rulingHouse: "Fourth",
  spiritColor: "Violet",
  luckyGem: "Ruby & Pearl",
  flower: "Orchid and White Rose",
  loveMatch: "Taurus & Pisces",
  img: "images/cancer.png",
  symbol: "svg/cancer.png",
  dsc: "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life."
};

const capricorn = {
  sign: "Capricorn",
  element: "Earth",
  polarity: "Negative",
  quality: "Cardinal",
  rulingPlanet: "Saturn",
  rulingHouse: "Tenth",
  spiritColor: "Dark Blue",
  luckyGem: "Lapis lazulimerald",
  flower: "Pansy",
  loveMatch: "Virgo",
  img: "images/capricorn.png",
  symbol: "svg/capricorn.png",
  dsc: "Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave."
};

const leo = {
  sign: "Leo",
  element: "Fire",
  polarity: "Positive",
  quality: "Fixed",
  rulingPlanet: "Sun",
  rulingHouse: "Fifth",
  spiritColor: "Gold",
  luckyGem: "Carnelian",
  flower: "Sunflower & Marigold",
  loveMatch: "Libra",
  img: "images/leo.png",
  symbol: "svg/leo.png",
  dsc: "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader."
};

const aquarius = {
  sign: "Aquarius",
  element: "Air",
  polarity: "Positive",
  quality: "Fixed",
  rulingPlanet: "Uranus",
  rulingHouse: "Eleventh",
  spiritColor: "Sky blue",
  luckyGem: "Amethys",
  flower: "Orchid",
  loveMatch: "Sagittarius",
  img: "images/aquarius.png",
  symbol: "svg/aquarius.png",
  dsc: "Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the same people they were when they were born."
};

const virgo = {
  sign: "Virgo",
  element: "Earth",
  polarity: "Negative",
  quality: "Mutable",
  rulingPlanet: "Mercury",
  rulingHouse: "Sixth",
  spiritColor: "Silver",
  luckyGem: "Peridot",
  flower: "Sunflower & Marigold",
  loveMatch: "Cancer",
  img: "images/virgo.png",
  symbol: "svg/virgo.png",
  dsc: "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure."
};

const pisces = {
  sign: "Pisces",
  element: "Water",
  polarity: "Negative",
  quality: "Mutable",
  rulingPlanet: "Neptune",
  rulingHouse: "Twelfth",
  spiritColor: "Sea green",
  luckyGem: "Moonstone",
  flower: "Water lily",
  loveMatch: "Virgo",
  img: "images/pisces.png",
  symbol: "svg/pisces.png",
  dsc: "Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces knows things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?"
};

const template = sign => {
  result.innerHTML = `
  <div class="zodiac-sign-container">
  <div>
  <img src=${sign.img} class="sign-img"/> 
  </div>
  <div>
  <div class="sign-info">
  <div class="sign-name">
      <h2>${sign.sign}</h2> 
      <img src=${sign.symbol} class="symbol" />
    </div>
    <div class="sign-stat">
    <p>Element: ${sign.element}</p>
    <p>Polarity: ${sign.polarity}</p>
    <p>Quality: ${sign.quality}</p>
    <p>Ruling Planet: ${sign.rulingPlanet}</p>
    <p>Ruling House: ${sign.rulingHouse}</p>
    <p>Spirit Color: ${sign.spiritColor}</p>
    <p>Lucky Gem: ${sign.luckyGem}</p>
    <p>Flower: ${sign.flower}</p>
    </div>
    </div>
    </div>
    </div>
  <div class="zodiac-description">
  <h3 class="about-title">Personality</h3>
    <p>${sign.dsc}</p>
  </div>
`;
};

{
  /* <p>Love Match: ${sign.loveMatch}</p>; */
}
const selectSign = () => {
  if (option.value === "Libra") {
    template(libra);
  } else if (option.value === "Capricorn") {
    template(capricorn);
  } else if (option.value === "Leo") {
    template(leo);
  } else if (option.value === "Sagittarius") {
    template(sagittarius);
  } else if (option.value === "Virgo") {
    template(virgo);
  } else if (option.value === "Cancer") {
    template(cancer);
  } else if (option.value === "Pisces") {
    template(pisces);
  } else if (option.value === "Aries") {
    template(aries);
  } else if (option.value === "Gemini") {
    template(gemini);
  } else if (option.value === "Taurus") {
    template(taurus);
  } else if (option.value === "Aqurius") {
    template(aquarius);
  } else if (option.value === "Scorpio") {
    template(scorpio);
  }
};

optionValue.forEach(option => {
  option.addEventListener("click", () => {
    selectSign();
  });
});

alert("The horoscope function is not working on chrome... Please view the project on Mozilla while the developer is trying to fix the bug. Thank you!")