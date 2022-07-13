// function contains all events in nav-bar
const navSlide = () => {
  // all variables we need to do features
  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelector(".icon2");
  const nav = document.querySelector(".nav-links");
  const links = nav.querySelectorAll("a");

  // function to change bar-icon on click
  icon2.addEventListener("click", () => {
    icon2.innerHTML = "";
    icon1.innerHTML = `<i class="fa-solid fa-xmark bars"></i>`;
    nav.classList.add("nav-active");
  });
  icon1.addEventListener("click", () => {
    icon1.innerHTML = "";
    icon2.innerHTML = `<i class="fa-solid fa-bars-staggered bars"></i>`;
    nav.classList.remove("nav-active");
  });

  // function to add and remove active class from ul
  links.forEach((x) => {
    x.addEventListener("click", () => {
      links.forEach((nav) => nav.classList.remove("active"));
      x.classList.add("active");
    });
  });
};
navSlide();

window.onscroll = function () {
  myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#00000078";
  } else {
    header.style.position = "absolute";
    header.style.backgroundColor = "transparent";
  }
}

// -------------------------------------------------------------------
// all variables we need to do features
const text = document.getElementById("text");
// text that will be in html page
const phrase = ["Welcome to enactus cic webApp. "];
let i = 0;
let j = 0;
let currentPhrase = [];
// typing effect animation
const textLoop = () => {
  text.innerHTML = `<h2> ${currentPhrase.join("")} </h2>`;
  if (i < phrase.length) {
    if (j <= phrase[i].length) {
      currentPhrase.push(phrase[i][j]);
      j++;
      setTimeout(textLoop, 100);
    }
  }
};
textLoop();
//  -----------------------------------------------------------------------
const video = document.querySelector("#vid");

window.addEventListener("load", () => {
  setTimeout(() => {
    video.play();
    text.style.display = "none";
  }, 4300);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 786px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const popimgs = () => {
  const imgs = document.querySelectorAll(".img");
  const xIcon = document.querySelectorAll(".popup span");
  imgs.forEach((x) => {
    let sib = x.nextElementSibling;
    x.addEventListener("click", () => {
      sib.classList.remove("display");
    });
    xIcon.forEach((x) => {
      x.addEventListener("click", () => {
        sib.classList.add("display");
      });
    });
  });
};
popimgs();

let turn = "X";
let title = document.querySelector(".title");
let square = [];

function winner() {
  let squares = document.querySelectorAll(".square");
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }

  if (square[1] === square[2] && square[2] === square[3] && square[1] != "") {
    title.innerHTML = `<span> ${square[1]} Winner </span>`;
    document.getElementById("item1").style.background = "#c9c9c9";
    document.getElementById("item2").style.background = "#c9c9c9";
    document.getElementById("item3").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[4] === square[5] && square[5] === square[6] && square[4] != "") {
    title.innerHTML = `<span> ${square[4]} Winner </span>`;
    document.getElementById("item4").style.background = "#c9c9c9";
    document.getElementById("item5").style.background = "#c9c9c9";
    document.getElementById("item6").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  if (square[7] === square[8] && square[8] === square[9] && square[7] != "") {
    title.innerHTML = `<span> ${square[7]} Winner </span>`;
    document.getElementById("item7").style.background = "#c9c9c9";
    document.getElementById("item8").style.background = "#c9c9c9";
    document.getElementById("item9").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[1] === square[4] && square[4] === square[7] && square[1] != "") {
    title.innerHTML = `<span> ${square[1]} Winner </span>`;
    document.getElementById("item1").style.background = "#c9c9c9";
    document.getElementById("item4").style.background = "#c9c9c9";
    document.getElementById("item7").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[2] === square[5] && square[5] === square[8] && square[2] != "") {
    title.innerHTML = `<span> ${square[2]} Winner </span>`;
    document.getElementById("item2").style.background = "#c9c9c9";
    document.getElementById("item5").style.background = "#c9c9c9";
    document.getElementById("item8").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[3] === square[6] && square[6] === square[9] && square[3] != "") {
    title.innerHTML = `<span> ${square[3]} Winner </span>`;
    document.getElementById("item3").style.background = "#c9c9c9";
    document.getElementById("item6").style.background = "#c9c9c9";
    document.getElementById("item9").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[1] === square[5] && square[5] === square[9] && square[1] != "") {
    title.innerHTML = `<span> ${square[1]} Winner </span>`;
    document.getElementById("item1").style.background = "#c9c9c9";
    document.getElementById("item5").style.background = "#c9c9c9";
    document.getElementById("item9").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  if (square[3] === square[5] && square[5] === square[7] && square[3] != "") {
    title.innerHTML = `<span> ${square[3]} Winner </span>`;
    document.getElementById("item3").style.background = "#c9c9c9";
    document.getElementById("item5").style.background = "#c9c9c9";
    document.getElementById("item7").style.background = "#c9c9c9";
    squares.forEach((x) => {
      x.onclick = (y) => {
        y.preventDefault();
      };
    });
    setInterval(() => {
      title.innerHTML += `<span> . </span>`;
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}

function game(id) {
  let ele = document.querySelector(`#${id}`);

  if (turn === "X" && ele.innerHTML == "") {
    ele.innerHTML = "X";
    turn = "O";
    title.innerHTML = "<span> Player O Turn </span>";
  } else if (turn === "O" && ele.innerHTML == "") {
    ele.innerHTML = "O";
    turn = "X";
    title.innerHTML = "<span> Player X Turn </span>";
  }
  winner();
}
