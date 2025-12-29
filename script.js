function handleScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

function makeBorderAnimationsContinuous() {
  const linkCards = document.querySelectorAll(".link-card");
  const contactItems = document.querySelectorAll(".contact-item");

  linkCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.setProperty("--border-opacity", "1");
    });

    card.addEventListener("mouseleave", function () {
      this.style.setProperty("--border-opacity", "0");
    });

    this.style.setProperty("--border-opacity", "0");
  });

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.setProperty("--border-opacity", "1");
    });

    item.addEventListener("mouseleave", function () {
      this.style.setProperty("--border-opacity", "0");
    });

    this.style.setProperty("--border-opacity", "0");
  });
}

function enhanceBorderAnimation() {
  const cards = document.querySelectorAll(".link-card, .contact-item");

  cards.forEach((card) => {
    const border = document.createElement("div");
    border.style.position = "absolute";
    border.style.top = "-3px";
    border.style.left = "-3px";
    border.style.right = "-3px";
    border.style.bottom = "-3px";
    border.style.borderRadius = "15px";
    border.style.zIndex = "-1";
    border.style.opacity = "0";
    border.style.transition = "opacity 0.5s ease";
    border.style.pointerEvents = "none";

    if (card.classList.contains("facebook")) {
      border.style.background =
        "conic-gradient(from 0deg, #1877F2, #4a9eff, #1877F2)";
      border.style.animation = "rotateBorder 3s linear infinite";
    } else if (card.classList.contains("instagram")) {
      border.style.background =
        "conic-gradient(from 0deg, #E1306C, #C13584, #833AB4, #5851DB, #E1306C)";
      border.style.animation = "rotateBorder 4s linear infinite";
    } else if (card.classList.contains("telegram")) {
      border.style.background =
        "conic-gradient(from 0deg, #0088CC, #4ab3ff, #0088CC)";
      border.style.animation = "rotateBorder 3.5s linear infinite";
    } else if (card.classList.contains("linkedin")) {
      border.style.background =
        "conic-gradient(from 0deg, #0A66C2, #4a8cff, #0A66C2)";
      border.style.animation = "rotateBorder 4.5s linear infinite";
    } else if (card.classList.contains("phone-item")) {
      border.style.background =
        "conic-gradient(from 0deg, #28a745, #5cdb7d, #28a745)";
      border.style.animation = "rotateBorder 3.2s linear infinite";
    } else if (card.classList.contains("email-item")) {
      border.style.background =
        "conic-gradient(from 0deg, #dc3545, #ff6b7c, #dc3545)";
      border.style.animation = "rotateBorder 3.8s linear infinite";
    }

    card.appendChild(border);

    card.borderElement = border;

    card.addEventListener("mouseenter", function () {
      this.borderElement.style.opacity = "1";
    });

    card.addEventListener("mouseleave", function () {
      this.borderElement.style.opacity = "0";
    });
  });
}

function addRippleEffect() {
  const cards = document.querySelectorAll(".link-card, .contact-item");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      ripple.style.borderRadius = "50%";
      ripple.style.position = "absolute";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "0";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  const style = document.createElement("style");
  style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", handleScrollAnimations);
  handleScrollAnimations();

  makeBorderAnimationsContinuous();

  enhanceBorderAnimation();

  addRippleEffect();

  const linkCards = document.querySelectorAll(".link-card");
  linkCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item, index) => {
    item.style.transitionDelay = `${0.4 + index * 0.1}s`;
  });

  const header = document.querySelector("h1");
  if (header) {
    const originalText = header.textContent;
    header.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        header.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    setTimeout(typeWriter, 300);
  }

  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.animation = "float 6s ease-in-out infinite";
  }
});
