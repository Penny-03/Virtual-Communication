const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Create an instance of SillyServer (assuming it's similar to WebSocket)
const server = new SillyServer('ws://localhost:3000');

// Listen for messages from the server
server.on('message', (event) => {
  const message = event.data;
  displayMessage(message);
});

// Send message to the server when the button is clicked
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  server.send(message);  // Sending message using SillyServer's send method
  displayMessage(message, true);
  messageInput.value = ''; // Clear input after sending
});

// Function to display message in the chat window
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
