timer = document.querySelector('#timer');

let timeInSeconds = 0;
let timeInterval = null;

function getTimeFromSeconds(_seconds) {
  return (new Date(_seconds * 1000))
    .toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'UTC'
    });
}

function pushTime() {
  timeInSeconds++;
  timer.innerHTML = getTimeFromSeconds(timeInSeconds);
}

document.addEventListener('click', (e) => {
  const { target } = e;

  if (target.classList.contains('start')) {
    timer.classList.remove('paused');
    timeInterval = setInterval(() => {
      pushTime();
    }, 1000);
  } else if (target.classList.contains('pause')) {
    timer.classList += 'paused';
    clearInterval(timeInterval);
  } else if (target.classList.contains('reset')) {
    timer.classList.remove('paused');
    clearInterval(timeInterval);
    timeInSeconds = 0;
    timer.innerHTML = getTimeFromSeconds(0);
  }
});
