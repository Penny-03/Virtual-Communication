const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const server = new SillyClient();
server.connect( "ws://ecv-2025.doc.upf.edu:5500", "CHAT");
//this method is called when the server accepts the connection (no ID yet nor info about the room)
server.on_connect = function(){
  //connected
};


//this methods receives messages from other users (author_id is an unique identifier per user)
server.on_message = function( author_id, msg ){
  
  displayMessage(msg, author_id);
  }

// send message on the click
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message !== ''){
    server.sendMessage(message);
    displayMessage(message, null, true);
    messageInput.value = '';
  }
});

// send message on the enter key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && messageInput.value !== '') {
    sendButton.click();
  }
});

//show the message on the screen
function displayMessage(message, author_id ,isSender = false) {
  const messageContainer = document.createElement('div');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  
  messageContainer.classList.add('message-container');
  
  if (isSender) {
    messageContainer.classList.add('sender-message-container');
    messageElement.classList.add('message-bubble', 'sender-message-bubble');
  } else {
    // Show the user ID for received messages
    const authorElement = document.createElement('div');
    authorElement.textContent = `User ${author_id}`;
    authorElement.classList.add('author-id'); // for styling
    messageElement.insertBefore(authorElement, messageElement.firstChild)
    messageElement.classList.add('message-bubble');
  }
  
  messageContainer.appendChild(messageElement);
  messagesDiv.appendChild(messageContainer);
  
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Handle new user connections
server.on_user_connected = function(user_id) {
 // console.log(`User connected: ${user_id}`);
  addUserToActiveList(user_id);
};

// Handle user disconnections
server.on_user_disconnected = function(user_id) {
  //console.log(`User disconnected: ${user_id}`);
  removeUserFromActiveList(user_id);
};

function addUserToActiveList(user_id) {
  const userList = document.getElementById("activeUsers");
  const userElement = document.createElement("div");
  userElement.textContent = `User: ${user_id}`;
  userElement.id = `user-${user_id}`;
  userList.appendChild(userElement);
}

function removeUserFromActiveList(user_id) {
  const userElement = document.getElementById(`user-${user_id}`);
  if (userElement) userElement.remove();
}
