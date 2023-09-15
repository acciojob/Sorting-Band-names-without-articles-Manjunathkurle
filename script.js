//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Led Zeppelin'];

// Function to remove articles ('a', 'an', 'the') and return the modified string
function removeArticles(name) {
  return name.replace(/^(a|an|the) /i, '').trim();
}

// Sort the array without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element by id
const ulElement = document.getElementById('band');

// Loop through the sorted band names and create li elements to append to the ul
bandNames.forEach((bandName) => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});


