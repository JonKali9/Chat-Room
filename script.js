const messagesDiv = document.getElementById('messages');
const nickElem = document.querySelector('input.nick')
const msgElem = document.querySelector('input.msg')
const sendButton = document.querySelector('button')

const addMsg = () => {
    const msg = document.createElement('div');
    msg.classList = 'message';
    const nick = document.createElement('span');
    nick.classList = 'nick';
    nick.innerHTML = nickElem.value + ': ';
    msg.appendChild(nick);
    const msgText = document.createElement('span');
    msgText.classList = 'msg';
    msgText.innerHTML = msgElem.value;
    msg.appendChild(msgText);
    messagesDiv.appendChild(msg);
}

sendButton.addEventListener('click', addMsg);
document.addEventListener('keyup', event => {
    if (event.keyCode == 13) addMsg();
});