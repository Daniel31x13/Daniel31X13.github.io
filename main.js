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
aboutMeButton.addEventListener('click', ()=> {
  window.scroll({
    top: height,
    behavior: "smooth"
  });
})


// Typewriter effect
new Typewriter('#element', {
  strings: ['RESPONSIVE', 'DYNAMIC', 'FAST'],
  autoStart: true,
  loop: true,
  cursor: "|"
});


// Progress bar
function startProgressBar(amount) {
  let i = 0;
  if (i == 0) {
    i = 1;
    const elem = document.querySelector("#myBar");
    let width = 20;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= amount) {
        clearInterval(id);
        i = 0;
      } else {
        width = width+10;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}


const skillSection = document.querySelector(".skill-section");

skillSection.addEventListener("mouseover", (e) => {
  let logo = e.target.id;

  switch (logo) {
    case 'js-logo':
      startProgressBar(80);
      break;
    case 'express-logo':
      startProgressBar(70);
      break;
    case 'react-logo':
      startProgressBar(75);
      break;
    case 'node-logo':
      startProgressBar(70);
      break;
    case 'linux-logo':
      startProgressBar(60);
      break;
    case 'html-logo':
      startProgressBar(80);
      break;
    case 'css-logo':
      startProgressBar(75);
      break;
    default:
      break;
  }
});

// const observer = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true)
//   console.log("RUNNING COMMAND")
// }, { threshold: [1] });

// observer.observe(document.querySelector(".myBar"));
