const loginForm = document.getElementById('loginForm');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const loginScreen = document.getElementById('loginScreen');
const city = document.getElementById('city');


function selectAvatar(avatar, event) {
  selectedAvatar = avatar;
  const avatarImages = document.querySelectorAll('.pic img');
  avatarImages.forEach(img => img.style.border = 'none'); 
  const clickedImage = event.target.tagName.toLowerCase() === 'img' ? event.target : event.target.querySelector('img');
  clickedImage.style.border = '3px solid #c261bc'; 
}
//login form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  age = ageInput.value;
  gender = genderInput.value;

  if (age && gender && selectedAvatar) {// if all fields are filled
    //userAvatar.src = selectedAvatar;
    //userDisplayName.textContent = username;
    
    loginScreen.style.display = 'none';// Hide login
    city.style.display = 'grid'; // Show chat

    //const avatar = document.getElementById('avatar');
    //avatar.innerHTML = `<img src="${avatarSrc}" alt="Selected Avatar">`;
    
    //connectToServer(username, room);
    //updateRoomName(room);     
  }
});



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