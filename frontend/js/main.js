// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card,.class-box,.trainer-card,.price-card")
.forEach(el => observer.observe(el));

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 150;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "2px solid lime";

            }

        });

        if (valid) {

            alert("Message Sent Successfully!");

            form.reset();

        }

    });

}

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#ff3d3d";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// ===============================
// Image Hover Zoom
// ===============================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.05)";
        img.style.transition = ".4s";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s";

        document.body.style.opacity = "1";

    }, 100);

});
// Handle missing images gracefully
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.onerror = null;
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="%231d1d1d" width="400" height="400"/><text fill="%23ff3d3d" font-family="Arial" font-size="24" x="50%" y="50%" text-anchor="middle" dy=".3em">Image Coming Soon</text></svg>';
        this.style.objectFit = 'contain';
        this.style.background = '#1d1d1d';
    };
});

console.log("Mansoor Gym & Fitness Loaded Successfully");