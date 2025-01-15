const connection= document.getElementById('connect-btn');
console.log(connection);
const server = new SillyClient();
server.connect( "<protocol>://<host_address>:<port>", "<room_name>");
server.on_ready = ( my_id ) =>
{
	//you know now which is your id
}
server.connect( "ws://ecv-2025.doc.upf.edu/port/<your_port>/ws", "<room_name>");

connection.addEventListener('click', function() {
    const model= document.getElementsByClassName('model')[0]; 
    //document.querySelector('.model')
    model.classList.add('hidden');
    const chat= document.getElementById('chat');
    chat.classList.remove('hidden');
    
})

server.onmessage= function(event) {
    console.log(event.data);
}

const input= document.querySelector('#inputchat');
input.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        console.log(input.value);
        
    }
})
console.log(input);
class Chat {
    constructor() {
        this.messages= [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    getMessages() {
        return this.messages;
    }
}