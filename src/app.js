document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('messageInput');
  const chatBox = document.getElementById('chatBox');

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || input.value.trim() === '') {
      return;
    }

    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = input.value.trim();
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
  });
});
