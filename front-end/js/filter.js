document.querySelectorAll('.custom-dropdown').forEach(function(dropdown) {
  var btn = dropdown.querySelector('.dropdown-btn');
  var list = dropdown.querySelector('.dropdown-list');
  btn.onclick = function() {
    dropdown.classList.toggle('open');
  };
  dropdown.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.onclick = function() {
      btn.textContent = item.textContent;
      dropdown.classList.remove('open');
      // You can add your filter logic here
    };
  });
  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
});

// FILTER FUNCTIONALITY for custom dropdown
document.querySelectorAll('.custom-dropdown').forEach(function(dropdown) {
  var btn = dropdown.querySelector('.dropdown-btn');
  dropdown.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.onclick = function() {
      btn.textContent = item.textContent;
      btn.setAttribute('data-value', item.getAttribute('data-value'));
      dropdown.classList.remove('open');
      // Filter cards
      const selected = item.getAttribute('data-value');
      document.querySelectorAll('.project-card').forEach(card => {
        if (card.dataset.category === selected || selected === "Projects") {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    };
  });
});
