const state = {
  crabCount: 0,
};

const addCrab = () => {
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');

  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);

  // Add crab count
  state.crabCount += 1;

  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
};
// Reset crab count
const resetCrab = () => {
  const crabContainer = document.querySelector('#crabContainer');
  crabContainer.innerHTML = '<h2 id="crabCount">Crab Count: 0</h2>';
  state.crabCount = 0;
};

// background color 
const enableLightMode = () => {
  document.body.classList.remove('dark-mode');
};

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
};

const registerEventHandlers = () => {
  const crabaddButton = document.querySelector('#addCrabButton');
  crabaddButton.addEventListener('click', addCrab);

  const crabresetButton = document.querySelector('#resetCrabButton');
  crabresetButton.addEventListener('click',resetCrab);

  const lightButton = document.querySelector('#lightModeButton');
  lightButton.addEventListener('click',enableLightMode);

  const darkButton = document.querySelector('#darkModeButton');
  darkButton.addEventListener('click',enableDarkMode);

};

document.addEventListener('DOMContentLoaded', registerEventHandlers);