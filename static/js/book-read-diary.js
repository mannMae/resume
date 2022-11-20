const date = new Date();
const today = date.toLocaleDateString();

const dateObj = {
  "2022. 10. 21.": {
    title: "모리와 함께한 화요일",
    content: "모리와 함께 춤을",
  },
  "2022. 10. 22.": { title: "", content: "" },
};

const newTableHTML = `${Object.keys(dateObj)
  .map(
    (p, i) =>
      `<tr>
      <td>
      ${p}
      </td>
      <td>
      ${dateObj[p]["title"]}
      </td>
      <td>
      ${dateObj[p]["content"]}
      </td>
      </tr>`
  )
  .join("")}`;
console.log(newTableHTML);

const bookDiaryTable = document.getElementById("book-diary-table-body");
bookDiaryTable.innerHTML = `${bookDiaryTable.innerHTML}${newTableHTML}`;
console.log(bookDiaryTable.innerHTML);
