// Hämta formuläret och platsen där ett meddelande ska visas.
const form = document.querySelector('#newsletter-form');
const messageArea = document.querySelector('#form-message');

// Vid inskick skapas ett nytt element utan att sidan laddas om.
form.addEventListener('submit', function (event) {
  event.preventDefault();
  messageArea.replaceChildren();
  const thanks = document.createElement('p');
  thanks.textContent = 'Tack för ditt intresse! Detta är ett demoformulär och ingen registrering har gjorts.';
  messageArea.appendChild(thanks);
  form.reset();
});
