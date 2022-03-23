const form = document.travelerForm;

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let firstName = form.firstName.value;
  let lastName = form.lastName.value;
  let age = form.age.value;
  let gender = form.gender.value;
  let destination = form.cities.value;

  let travelersDiet = [];
  let checkedBoxes = document.querySelectorAll('input[name=diet]:checked');
  for (let box of checkedBoxes) {
    travelersDiet.push(box.value);
  }

  form.firstName.value = '';
  form.lastName.value = '';
  form.age.value = '';

  console.log(destination)
  alert(`
  First name: ${firstName}
  Last name: ${lastName}
  Age: ${age}
  Gender: ${gender}
  Location: ${destination}
  Dietary Restrictions: ${travelersDiet}
  `);
});

