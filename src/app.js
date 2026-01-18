const input = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
const sendButton = document.getElementById('sendButton');

const createMessage = (text, variant) => {
  const message = document.createElement('div');
  message.className = `message ${variant}`;
  message.textContent = text;
  return message;
};

const appendMessage = (text) => {
  const trimmed = text.trim();
  if (!trimmed) {
    return;
  }

  chatBox.appendChild(createMessage(trimmed, 'message--outgoing'));
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = '';
  input.focus();
};

sendButton.addEventListener('click', () => appendMessage(input.value));

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    appendMessage(input.value);
  }
});
