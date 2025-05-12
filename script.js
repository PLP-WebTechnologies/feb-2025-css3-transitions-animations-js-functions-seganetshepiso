// Save user preference
function savePreference(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved: ${key} = ${value}`);
}

// Retrieve user preference
function getPreference(key) {
  const value = localStorage.getItem(key);
  console.log(`Retrieved: ${key} = ${value}`);
  return value;
}

// Example usage
savePreference('theme', 'dark');
const theme = getPreference('theme');
document.querySelector('button').addEventListener('click', () => {
  const box = document.querySelector('.box');
  box.classList.add('animate');
  
  // Remove the animation class after it ends
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  });
});


