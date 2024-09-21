let data = {
  A: {
    name: "Aeroplane",
    sound: "./audio/alpha/letter_a.wav",
    font: "fa-solid fa-plane",
  },
  B: {
    name: "Book",
    sound: "./audio/alpha/letter_b.wav",
    font: "fa-solid fa-book",
  },
  C: {
    name: "Cat",
    sound: "./audio/alpha/letter_c.wav",
    font: "fa-solid fa-cat",
  },
  D: {
    name: "Dog",
    sound: "./audio/alpha/letter_d.wav",
    font: "fa-solid fa-dog",
  },
  E: {
    name: "Egg",
    sound: "./audio/alpha/letter_e.wav",
    font: "fa-solid fa-egg",
  },
  F: {
    name: "Fish",
    sound: "./audio/alpha/letter_f.wav",
    font: "fa-solid fa-fish",
  },
  G: {
    name: "Guitar",
    sound: "./audio/alpha/letter_g.wav",
    font: "fa-solid fa-guitar",
  },
  H: {
    name: "House",
    sound: "./audio/alpha/letter_h.wav",
    font: "fa-solid fa-house",
  },
  I: {
    name: "Igloo",
    sound: "./audio/alpha/letter_i.wav",
    font: "fa-solid fa-igloo",
  },
  J: {
    name: "Jar",
    sound: "./audio/alpha/letter_j.wav",
    font: "fa-solid fa-jar",
  },
  K: {
    name: "Key",
    sound: "./audio/alpha/letter_k.wav",
    font: "fa-solid fa-key",
  },
  L: {
    name: "Lemon",
    sound: "./audio/alpha/letter_l.wav",
    font: "fa-solid fa-lemon",
  },
  M: {
    name: "Music",
    sound: "./audio/alpha/letter_m.wav",
    font: "fa-solid fa-music",
  },
  N: {
    name: "Newspaper",
    sound: "./audio/alpha/letter_n.wav",
    font: "fa-solid fa-newspaper",
  },
  O: {
    name: "Octopus",
    sound: "./audio/alpha/letter_o.wav",
    font: "fa-brands fa-octopus-deploy",
  },
  P: {
    name: "Pen",
    sound: "./audio/alpha/letter_p.wav",
    font: "fa-solid fa-pen",
  },
  Q: {
    name: "Queen",
    sound: "./audio/alpha/letter_q.wav",
    font: "fa-solid fa-chess-queen",
  },
  R: {
    name: "Robot",
    sound: "./audio/alpha/letter_r.wav",
    font: "fa-solid fa-robot",
  },
  S: {
    name: "Sun",
    sound: "./audio/alpha/letter_s.wav",
    font: "fa-solid fa-sun",
  },
  T: {
    name: "Television",
    sound: "./audio/alpha/letter_t.wav",
    font: "fa-solid fa-tv",
  },
  U: {
    name: "Umbrella",
    sound: "./audio/alpha/letter_u.wav",
    font: "fa-solid fa-umbrella",
  },
  V: {
    name: "Vault",
    sound: "./audio/alpha/letter_v.wav",
    font: "fa-solid fa-vault",
  },
  W: {
    name: "Watch",
    sound: "./audio/alpha/letter_w.wav",
    font: "fa-regular fa-clock",
  },
  X: {
    name: "X-ray",
    sound: "./audio/alpha/letter_x.wav",
    font: "fa-solid fa-x-ray",
  },
  Y: {
    name: "Youtube",
    sound: "./audio/alpha/letter_y.wav",
    font: "fa-brands fa-youtube",
  },
  Z: {
    name: "Zipper",
    sound: "./audio/alpha/letter_z.wav",
    font: "fa-regular fa-file-zipper",
  },
};

let parentContainer = document.getElementById("drumContainer");

let user = {
  name: "abc",
  ["full name"]: "sdhs fsdjfd",
};
console.log(user["full name"]);

function Card() {
  for (let key in data) {
    // console.log(key);

    let DrumCards = document.createElement("div");
    // DrumCards.className = 'element';
    DrumCards.classList.add("element", data[key].name);
    parentContainer.appendChild(DrumCards);

    let cardHeading1 = document.createElement("h2");
    DrumCards.appendChild(cardHeading1);
    cardHeading1.textContent = key;

    let cardSpan = document.createElement("span");
    DrumCards.appendChild(cardSpan);
    cardSpan.textContent = data[key].name;
    // cardSpan.style.color = "navy";

    let cardIcon = document.createElement("i");
    DrumCards.appendChild(cardIcon);
    cardIcon.className = data[key].font;
    cardIcon.style.color = "blue";
    cardIcon.style.textAlign = "center";
    cardIcon.style.margin = "0 auto";
    cardIcon.style.paddingTop = "4px";
    cardIcon.style.fontSize = "2rem";
    console.log(cardIcon);

    DrumCards.addEventListener("click", function (event) {
      let key = event.currentTarget.querySelector("h2").textContent;
      // console.log(key);
      playSounds(key.toUpperCase());
    });
  }
}

//script-code for audio event

function playSounds(key) {
  if (data.hasOwnProperty(key)) {
    let DrumCards = document.querySelector(`.element.${data[key].name}`);
    console.log(DrumCards);

    DrumCards.classList.add("active");

    //audio-file script-code

    let alphaSound = new Audio();
    alphaSound.src = data[key].sound;
    alphaSound.play();

    alphaSound.addEventListener("timeupdate", function () {
      if (alphaSound.currentTime >= alphaSound.duration / 32) {
        DrumCards.classList.remove("active");
        alphaSound.removeEventListener("timeupdate", arguments.callee);
      }
    });
  }
}
document.addEventListener("keydown", function (event) {
  playSounds(event.key.toUpperCase());
});

Card();
