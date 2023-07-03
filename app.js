document.addEventListener('DOMContentLoaded', () => {
   initPasswordGenerator();
});

const initPasswordGenerator = () => {
   const form = document.querySelector('form'),
      passwordWrap = document.querySelector('.password-wrap'),
      passwordLength = document.querySelector('#password-length'),
      rangeValue = document.querySelector('.js-range-value'),
      copyPassword = document.querySelector('.js-copy');
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

      if (
         upperInput.checked === false &&
         lowerInput.checked === false &&
         numberInput.checked === false &&
         symbolInput.checked === false
      ) {
         alert('Please choose one option');
         copyPassword.style.display = 'none';
      }

      if (allCharacters == '' || allCharacters.length == 0) {
         return result;
      }

      for (let i = 0; i <= passwordLength.value; i++) {
         result += allCharacters.charAt(
            Math.floor(Math.random() * allCharacters.length)
         );
      }

      copyPassword.style.display = 'block';
      return result;
   }

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const passwordContainer = document.querySelector('.js-password');
      passwordContainer.value = generatePassword();
   });

   // copy to clipboard js
   function copyPasswordText(e) {
      let item = e.target;
      item.classList.remove('ri-file-copy-line');
      item.classList.add('ri-check-fill');
      document.querySelector('.js-text-copied').style.display = 'block';

      setTimeout(() => {
         item.classList.add('ri-file-copy-line');
         item.classList.remove('ri-check-fill');
         document.querySelector('.js-text-copied').style.display = 'none';
      }, 2000);

      const element = document.querySelector('.js-password');
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy');
   }

   copyPassword.addEventListener('click', copyPasswordText);
};
