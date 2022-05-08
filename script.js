const toggleSwitch = document.querySelector('input[type="checkbox"]');
const button = document.getElementById('btn');
const dogContainer = document.getElementById('dog-container');
const catContainer = document.getElementById('cat-container');
const photo = document.getElementById('photo');
const loader = document.getElementById('loader');
const loaderImg = document.getElementById('loader-img');
const holderImg = document.getElementById('holder-image');
let theme = 'cat';

function switchTheme(event) {
  const checked = event.target.checked;
  checked ? (theme = 'dog') : (theme = 'cat');
  checked
    ? document.documentElement.setAttribute('data-theme', 'dog')
    : document.documentElement.setAttribute('data-theme', 'cat');
  checked
    ? (button.textContent = 'Show me dogs!')
    : (button.textContent = 'Show me cats!');
  dogContainer.classList.toggle('transparent');
  catContainer.classList.toggle('transparent');
  loaderImg.src = `loading-${theme}.svg`;
}

function addPhoto(data) {
  photo.addEventListener('load', loaderToggle);
  photo.src = data;
}

function loaderToggle() {
  loader.hidden = !loader.hidden;
  buttonToggle();
}

function buttonToggle() {
  button.disabled = !button.disabled;
}

async function getPhotos() {
  let apiUrl, link;
  loaderToggle();
  theme === 'cat'
    ? (apiUrl = 'https://api.thecatapi.com/v1/images/search')
    : (apiUrl = 'https://dog.ceo/api/breeds/image/random');
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    theme === 'cat' ? (link = data[0].url) : (link = data.message);
    addPhoto(link);
  } catch (error) {
    console.log('Yay!', error);
  }
}

toggleSwitch.addEventListener('change', switchTheme);
button.addEventListener('click', getPhotos);
