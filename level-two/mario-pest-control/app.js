const form = document['pest-tracker'];

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let goombas = form.goombas.value;
  let bobombs = form.bobombs.value;
  let cheepcheep = form.cheepcheep.value;

  form.cheepcheep.value = '';
  form.bobombs.value = '';
  form.goombas.value = '';

  let total = ((goombas * 5) + (bobombs * 7) + (cheepcheep * 11));

  document.querySelector('.total').textContent = `$${total} coins`;

});