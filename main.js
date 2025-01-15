const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const server = new SillyClient();
server.connect( "ws://ecv-2025.doc.upf.edu/port/5500/ws", "CHATX_<room_name>");


//this methods receives messages from other users (author_id is an unique identifier per user)
server.on_message = function( author_id, msg ){
    //data received server.addEventListener('message', (event) => {
  //const message = event.data;
  displayMessage(msg);

  }

// send message on the click
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message !== ''){
    server.sendMessage(message);
    displayMessage(message, true);
    messageInput.value = '';
  }
});

// send message on the enter key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && messageInput.value !== '') {
    sendButton.click();
  }
});


function displayMessage(message, isSender = false) {
  const messageContainer = document.createElement('div');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  
  messageContainer.classList.add('message-container');
  
  if (isSender) {
    messageContainer.classList.add('sender-message-container');
    messageElement.classList.add('message-bubble', 'sender-message-bubble');
  } else {
    messageElement.classList.add('message-bubble');
  }
  
  messageContainer.appendChild(messageElement);
  messagesDiv.appendChild(messageContainer);
  
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}