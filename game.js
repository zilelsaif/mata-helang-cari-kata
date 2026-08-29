document.addEventListener('DOMContentLoaded', () => {
  const titleScreen = document.getElementById('title-screen');
  const ageScreen = document.getElementById('age-screen');
  const startButton = document.getElementById('start-button');
  const backButton = document.getElementById('back-button');
  const ageButtons = document.querySelectorAll('.age-button');

  function showTitleScreen() {
    titleScreen.classList.add('active');
    ageScreen.classList.remove('active');
    titleScreen.setAttribute('aria-hidden', 'false');
    ageScreen.setAttribute('aria-hidden', 'true');
  }

  function showAgeScreen() {
    ageScreen.classList.add('active');
    titleScreen.classList.remove('active');
    ageScreen.setAttribute('aria-hidden', 'false');
    titleScreen.setAttribute('aria-hidden', 'true');
  }

  if (startButton) {
    startButton.addEventListener('click', showAgeScreen);
  }

  if (backButton) {
    backButton.addEventListener('click', showTitleScreen);
  }

  ageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const ageGroup = button.dataset.age;
      console.log('Umur dipilih:', ageGroup);
    });
  });
});
