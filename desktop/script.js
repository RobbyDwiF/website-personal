
  (function autoSwitchVersion() {
    let devtoolsOpen = false;
    let threshold = 160; // batas lebar perbedaan untuk deteksi DevTools

    function detectDevTools() {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;

      if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
        // DevTools baru dibuka
        devtoolsOpen = true;
        if (
          window.innerWidth <= 1024 &&
          window.location.pathname.toLowerCase().includes("index.html")
        ) {
          window.location.replace(
            encodeURIComponent("Mobile Version") + "/tampilan mobile.html"
          );
        }
      } else if (!(widthThreshold || heightThreshold) && devtoolsOpen) {
        // DevTools baru ditutup
        devtoolsOpen = false;
        if (!window.location.pathname.toLowerCase().includes("index.html")) {
          window.location.replace("../index.html");
        }
      }
    }

    // Cek setiap setengah detik
    setInterval(detectDevTools, 500);

    // Cek ukuran layar juga
    function checkSize() {
      const isMobile = window.innerWidth <= 1024;
      const path = window.location.pathname.toLowerCase();

      if (path.includes("index.html") && isMobile) {
        window.location.replace(
          encodeURIComponent("Mobile Version") + "/tampilan mobile.html"
        );
      }
      if (path.includes("tampilan mobile.html") && !isMobile) {
        window.location.replace("../index.html");
      }
    }

    checkSize();
    window.addEventListener("resize", checkSize);
  })();




// WhatsApp Touch Form
document.addEventListener("DOMContentLoaded", function () {
  const formWa = document.getElementById("waTouchForm");
  if (formWa) {
    formWa.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;

      const message = `Halo RDF Studio 👋\nNama: ${name}\nEmail: ${email}\nSaya ingin konsultasi.`;
      const waUrl =
        "https://wa.me/628984877678?text=" + encodeURIComponent(message);

      alert("Mengalihkan ke WhatsApp...");
      window.open(waUrl, "_blank");
    });
  }
});

const portfolioBtn = document.getElementById("portfolioBtn");
const exploreBtn = document.getElementById("exploreBtn");

function animateFloat(el) {
  el.classList.add("animate-float-pop");
  setTimeout(() => {
    el.classList.remove("animate-float-pop");
  }, 300);
}

portfolioBtn.addEventListener("click", () => animateFloat(portfolioBtn));
exploreBtn.addEventListener("click", () => animateFloat(exploreBtn));

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("text-float-pop");
    setTimeout(() => {
      link.classList.remove("text-float-pop");
    }, 300);
  });
});


 
