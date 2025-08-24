
// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      setTimeout(() => {
        mobileMenu.style.transform = 'translateY(0)';
      }, 10);
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on mobile menu links
  const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        mobileMenu.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  }

  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.style.display = 'none';
      mobileMenu.style.transform = 'translateY(-100%)';
      document.body.style.overflow = '';
    }
  });

  // WhatsApp Touch Form
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

  // Button animations - hanya jika elemen ada
  const portfolioBtn = document.getElementById("portfolioBtn");
  const exploreBtn = document.getElementById("exploreBtn");

  function animateFloat(el) {
    if (el) {
      el.classList.add("animate-float-pop");
      setTimeout(() => {
        el.classList.remove("animate-float-pop");
      }, 300);
    }
  }

  if (portfolioBtn) {
    portfolioBtn.addEventListener("click", () => animateFloat(portfolioBtn));
  }

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => animateFloat(exploreBtn));
  }

  // Handler untuk tombol Baca Selengkapnya jika ada
  const readMoreBtn = document.getElementById("readMoreBtn");
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function() {
      // Tambahkan fungsi untuk tombol Baca Selengkapnya di sini
      console.log("Tombol Baca Selengkapnya diklik");
    });
  }
});


 
