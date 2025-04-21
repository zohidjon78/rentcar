// DOM to'liq yuklangach ishlaydi
document.addEventListener("DOMContentLoaded", function () {
    // Formani yuborishda tekshiruv
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        if (!name || !email || !message) {
          alert("Iltimos, barcha maydonlarni to'ldiring.");
          return;
        }
  
        if (!validateEmail(email)) {
          alert("Email noto‘g‘ri kiritilgan.");
          return;
        }
  
        // Hozircha faqat alert ko‘rsatamiz
        alert("Xabaringiz muvaffaqiyatli yuborildi!");
        contactForm.reset();
      });
    }
  
    // Email formatini tekshiruvchi funksiya
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Navbarda aktiv link ko‘rsatish
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.style.color = "#f4b400";
      }
    });
  
    // Mashina ijarasi tugmasi uchun interaktivlik
    const rentButtons = document.querySelectorAll(".car-card button");
    rentButtons.forEach(button => {
      button.addEventListener("click", function () {
        const carName = this.parentElement.querySelector("h3").innerText;
        alert(`${carName} mashinasi tanlandi. Siz bilan tez orada bog'lanamiz!`);
      });
    });
  });