const settingsMenu = document.querySelector('#settings-dropdown');
const settingsButton = document.querySelector(".dropdown-button");

function changeDropdownStatus () {
  settingsMenu.classList.toggle('show');
}

settingsButton.addEventListener("click", (e) => {
  e.stopPropagation();
  changeDropdownStatus ();
});

document.documentElement.addEventListener('click', () => {
  if (settingsMenu.classList.contains('show')) {
    changeDropdownStatus ();
  }
});