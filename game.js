document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');

  if (startButton) {
    startButton.addEventListener('click', () => {
      alert('Permainan akan bermula!');
    });
  }
});
