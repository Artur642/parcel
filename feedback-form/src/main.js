import { saveFeedback } from './dataModule.js';

const form = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const feedback = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  saveFeedback(feedback);

  successMessage.style.display = 'block';

  form.reset();
});
