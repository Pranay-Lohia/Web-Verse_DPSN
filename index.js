
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden");
  }, 2000);
});


var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};




















const cursor = document.getElementById("cursor");
const cursorTrails = [];


for (let i = 0; i < 10; i++) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  document.body.appendChild(trail);
  cursorTrails.push({
    element: trail,
    x: 0,
    y: 0,
  });
}

let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX - 10 + "px";
  cursor.style.top = mouseY - 10 + "px";
});


function animateTrails() {
  cursorTrails.forEach((trail, index) => {
    const delay = index * 0.1;
    trail.x += (mouseX - trail.x) * (0.1 - delay * 0.01);
    trail.y += (mouseY - trail.y) * (0.1 - delay * 0.01);

    trail.element.style.left = trail.x - 3 + "px";
    trail.element.style.top = trail.y - 3 + "px";
    trail.element.style.opacity = 1 - index * 0.1;
  });
  requestAnimationFrame(animateTrails);
}
animateTrails();


function createNeuralNetwork() {
  const container = document.getElementById("neuralNetwork");
  const nodes = [];
  const connections = [];

  
  for (let i = 0; i < 30; i++) {
    const node = document.createElement("div");
    node.className = "neural-node";
    node.style.left = Math.random() * 100 + "%";
    node.style.top = Math.random() * 100 + "%";
    node.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(node);
    nodes.push(node);
  }

  
  for (let i = 0; i < 20; i++) {
    const connection = document.createElement("div");
    connection.className = "neural-connection";
    connection.style.left = Math.random() * 100 + "%";
    connection.style.top = Math.random() * 100 + "%";
    connection.style.width = Math.random() * 200 + 100 + "px";
    connection.style.transform = `rotate(${Math.random() * 360}deg)`;
    connection.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(connection);
  }
}


window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    
    const button = this.querySelector(".submit-btn");
    const originalText = button.textContent;

    button.textContent = "Quantum Signal Sent!";
    button.style.background = "linear-gradient(45deg, #00ff00, #00ffff)";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background =
        "linear-gradient(45deg, var(--primary-cyan), var(--primary-magenta))";
      this.reset();
    }, 3000);
  });


window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});


document
  .querySelectorAll(".mega-button, .submit-btn")
  .forEach((button) => {
    button.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.style.setProperty("--mouse-x", x + "px");
      this.style.setProperty("--mouse-y", y + "px");
    });
  });


document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.style.transform = `translateY(-15px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform =
      "translateY(-15px) scale(1.02) perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
});


createNeuralNetwork();


setInterval(() => {
  const colors = ["#00f5ff", "#ff00ff", "#ffd700", "#8a2be2"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty(
    "--accent-color",
    randomColor
  );
}, 5000);


let ticking = false;

function updateScrollEffects() {
  
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
});