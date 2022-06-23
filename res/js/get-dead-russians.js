//get dead russians
let deadRus;
fetch('https://russianwarship.rip/api/v1/statistics/latest')
  .then(response => response.json())
  .then(deadRus => {
    console.log(deadRus);
    const mainContainer = document.querySelector('.main-container');
    const warDayEl = document.querySelector('.war-day');
    warDayEl.innerText = deadRus.data.day;

  });

  const mainContainer = document.querySelector('.main-container');