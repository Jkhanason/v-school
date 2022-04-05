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
  array.forEach(current => {
    const randomNum = Math.floor(Math.random() * 7);
    let newP = document.createElement('p');
    newP.textContent = `${current.name.toUpperCase()} ${details[randomNum]}`;
    document.body.append(newP);
  });
}