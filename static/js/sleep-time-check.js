const date = new Date();
const today = date.toLocaleDateString();

console.log(today);

const dateObj = {
  '2022. 10. 21.': ['07:30', 'N01:00'],
  '2022. 10. 22.': ['11:30', 'N04:00'],
};

if (!Object.keys(dateObj).includes(today)) {
  dateObj[today] = ['', ''];
}

console.log(dateObj);

const newTableHTML = `${Object.keys(dateObj).map(
  (p, i) => `<tr>
  <td>
    ${p}
  </td>
  <td>
    ${dateObj[p][0]}
  </td>
  <td>
    ${dateObj[p][1]}
  </td>
</tr>`
)}`;

console.log(newTableHTML);

const sleepTimeTable = document.getElementById('sleep-time-table-body');
sleepTimeTable.innerHTML = `${sleepTimeTable.innerHTML}${newTableHTML}`;
console.log(sleepTimeTable.innerHTML);
