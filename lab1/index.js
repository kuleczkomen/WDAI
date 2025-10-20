const headers = ["Nr.", "Nazwa produktu", "Cena produktu", "Ilość sztuk"];
const data = [
   [1, "Telewizor", 4000, 1],
   [2, "Laptop", 2500, 5],
   [3, "Telefon", 1000, 10],
   [4, "Smartwatch", 300, 13],
   [5, "Klawiatura", 100, 1000]
];

function makeTable(headers, data) {
   const myTable = document.createElement("table");
   const tHead = myTable.createTHead();
   const headerRow = tHead.insertRow();
   const tBody = myTable.createTBody();

   headers.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
   })

   data.forEach(rowData => {
      const row = tBody.insertRow();
      for (const td of rowData) {
         const cell = row.insertCell();
         cell.textContent = td.toString();
      }
   });
   document.getElementById("mainTable").appendChild(myTable);
}

makeTable(headers, data);