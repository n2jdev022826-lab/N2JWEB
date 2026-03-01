const words = [
    { text: "POS System", class: "color-web-dev", cursor: "#00c9c8" },
    { text: "Inventory Management System", class: "color-graphics", cursor: "hotpink" },
    { text: "CRM System", class: "color-analyst", cursor: "rgb(238, 215, 130)" }
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const erasingSpeed = 60;
  const delayBetweenWords = 2000;
  const typeElement = document.getElementById("type");

  function type() {
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

  type();

   const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });