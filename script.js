const toggleSwitch = document.querySelector('input[type="checkbox"]');
const button = document.getElementById('btn');

// document.documentElement.setAttribute('data-theme', 'dog');
// document.documentElement.setAttribute('data-theme', 'cat')

function switchTheme(event) {
  const checked = event.target.checked;
  checked
    ? document.documentElement.setAttribute('data-theme', 'dog')
    : document.documentElement.setAttribute('data-theme', 'cat');
  checked
    ? (button.textContent = 'Show me dogs!')
    : (button.textContent = 'Show me cats!');
}

function log() {
  console.log(123);
}

toggleSwitch.addEventListener('change', switchTheme);
button.addEventListener('click', log);
