'use strict'


const container = document.querySelector(".container");

const publicHolidays = function(year, countryCode){
  const request = new XMLHttpRequest();
request.open('GET', `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`);
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);

  const table = `
    <table>
    <thead>
      <tr>
        <th>Country Code</th>
        <th>Date</th>
        <th>Holiday Name</th>
        <th>Type Of Holiday</th>
      </tr>
    </thead>
    <tbody>
    ${data.map(holiday => `
      <tr>
        <td>${holiday.countryCode}</td>
        <td>${holiday.date}</td>
        <td>${holiday.name}</td>
        <td>${holiday.types}</td>
      </tr>
    `).join('')}
    </tbody>
    </table>`;

  container.insertAdjacentHTML('beforebegin', table);
});
}

publicHolidays('2023', 'GB')

