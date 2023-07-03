const form = document.querySelector('form');

form.addEventListener('submit', () => {
   const passwordContainer = document.querySelector('.js-password');
   const allCharacters =
      'ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?></.,{}[]~';
   let result = '';
   for (let i = 0; i <= 8; i++) {
      result += allCharacters.charAt(
         Math.floor(Math.random() * allCharacters.length)
      );
   }
   passwordContainer.innerHTML = result;
});
