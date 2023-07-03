document.addEventListener('DOMContentLoaded', () => {
   initPasswordGenerator();
});

const initPasswordGenerator = () => {
   const form = document.querySelector('form'),
      passwordLength = document.querySelector('#password-length'),
      rangeValue = document.querySelector('.js-range-value');
   //setting default value to range slider
   rangeValue.textContent = passwordLength.value;
   passwordLength.addEventListener('input', () => {
      rangeValue.textContent = passwordLength.value;
   });

   function generatePassword() {
      const upperInput = document.querySelector('#upper-char'),
         lowerInput = document.querySelector('#lower-char'),
         numberInput = document.querySelector('#number'),
         symbolInput = document.querySelector('#symbol');

      // making all character value
      let result = '',
         allCharacters = '',
         upperChar = 'ABCDEFGHIJKLMNOPURSTUVWXYZ',
         lowerChar = 'abcdefghijklmnopqrstuvwxyz',
         numbers = '01234567890',
         symbols = `!@#$%^&*()_-+=?></.,{}[]~`;

      if (upperInput.checked) {
         allCharacters += upperChar;
      }
      if (lowerInput.checked) {
         allCharacters += lowerChar;
      }
      if (numberInput.checked) {
         allCharacters += numbers;
      }
      if (symbolInput.checked) {
         allCharacters += symbols;
      }

      if (allCharacters == '' || allCharacters.length == 0) {
         return result;
      }

      for (let i = 0; i <= passwordLength.value; i++) {
         result += allCharacters.charAt(
            Math.floor(Math.random() * allCharacters.length)
         );
      }

      return result;
   }

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const passwordContainer = document.querySelector('.js-password');
      passwordContainer.innerHTML = generatePassword();
   });
};
