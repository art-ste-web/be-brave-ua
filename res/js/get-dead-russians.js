//get dead russians
let deadRusStat;
fetch('https://russianwarship.rip/api/v1/statistics/latest')
  .then(response => response.json())
  .then(deadRusStat => {
    console.log(deadRusStat);
    const mainContainer = document.querySelector('.main-container');
    const warDayEl = document.querySelector('.war-day');
    const orksEl = document.querySelector('.orks');
    warDayEl.innerText = `${deadRusStat.data.date} ${deadRusStat.data.day}`;
    orksEl.innerText = `${deadRusStat.data.stats.personnel_units} (+${deadRusStat.data.increase.personnel_units})`;

  });

  