/** script.js **/
document.querySelectorAll('.building').forEach((building, index) => {
  building.addEventListener('click', function() {
      let avatar = document.getElementById('avatar');
      let rect = building.getBoundingClientRect();
      avatar.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
      setTimeout(() => {
          window.location.href = building.dataset.link;
      }, 1000);
  });
});