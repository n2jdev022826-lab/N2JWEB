const words = [
    { text: "WEB Development", class: "color-web-dev", cursor: "#00c9c8" },
    { text: "UI/UX Design", class: "color-graphics", cursor: "hotpink" },
    { text: "IT Support", class: "color-analyst", cursor: "rgb(238, 215, 130)" }
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const erasingSpeed = 60;
  const delayBetweenWords = 2000;
  const typeElement = document.getElementById("type");

  function type() {
    if (!typeElement) return; // guard
    const current = words[wordIndex];
    const currentWord = current.text;

    // Apply color class
    typeElement.className = `typing-container ${current.class}`;

    // Update cursor color
    typeElement.style.borderRight = `2px solid ${current.cursor}`;

    if (isDeleting) {
      charIndex--;
      typeElement.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      typeElement.textContent = currentWord.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
  }

  if (typeElement) type();

  // Burger toggle (run even if typing isn't present)
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }