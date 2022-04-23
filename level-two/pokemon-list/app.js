const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const incomingData = xhr.responseText;
    const parsedData = JSON.parse(incomingData);
    const pokemonArray = parsedData.objects[0].pokemon;
    pokemonNames(pokemonArray);
  }
}
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

const pokemonNames = array => {
  const details = ['is strong', 'is smart', 'is brave', 'is shy', 'is hard to catch', 'is a loner', 'is social'];
  const classes = ['one', 'two', 'three'];
  array.forEach(current => {
    const randomNum7 = Math.floor(Math.random() * 7);
    const randomNum3 = Math.floor(Math.random() * 3);
    let newP = document.createElement('p');
    newP.classList = classes[randomNum3];
    newP.textContent = `${current.name.toUpperCase()} ${details[randomNum7]}`;
    document.body.append(newP);
  });
}