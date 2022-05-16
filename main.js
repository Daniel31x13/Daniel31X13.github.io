// Particles
tsParticles.load("tsparticles", {
"particles": {
  "number": {
    "value": 75,
    "density": {
      "enable": true,
      "value_area": 500
    }
  },
  "color": {
    "value": "#ffffff"
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#000000"
    }
  },
  "opacity": {
    "value": 1,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 1,
      "opacity_min": 0,
      "sync": false
    }
  },
  "size": {
    "value": 3,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 4,
      "size_min": 0.3,
      "sync": false
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 130,
    "color": "#66ffff",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 1,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 600
    }
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": false,
      "mode": "bubble"
    },
    "onclick": {
      "enable": false,
      "mode": "repulse"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 407.5,
      "size": 5,
      "duration": 3.1,
      "opacity": 0.1,
      "speed": 3
    },
    "repulse": {
      "distance": 400,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
});
  

// About me button
const aboutMeButton = document.getElementById('about-me-btn');
const height = window.innerHeight;
const view = document.getElementById("view");
aboutMeButton.addEventListener('click', ()=> {
  view.scrollIntoView({behavior: "smooth"})
})


// Typewriter effect
new Typewriter('#element', {
  strings: ['RESPONSIVE', 'DYNAMIC', 'FAST', 'ASTONISHING'],
  autoStart: true,
  loop: true,
  cursor: "|"
});


// Scroll indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}


// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
document.body.scrollIntoView({
  behavior: "smooth"
});
};

document.addEventListener("scroll", () => {

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);


// Loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.body.style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
      document.querySelector(".loader-overlay").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector(".loader-overlay").style.visibility = "hidden";
      document.body.style.visibility = "visible";
  }
};

// const observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
//   console.log("RUNNING COMMAND")
// }, { threshold: [1] });

// observer.observe(document.querySelector(".myBar"));
