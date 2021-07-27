/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinklapi kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");
output.style.width = '80vw'
output.style.padding = '5rem'
 
function createUsersTable(cars) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = createRow();
  tr.append(createTd("brand"), createTd("models"));
  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);
 
  cars.forEach((car) => {
    const tr = createRow();
    tr.append(createTd(car.brand), createTd(car.models));
    tbody.appendChild(tr);
  });
  return table;
}
 
function createRow() {
  const tr = document.createElement("tr");
  tr.style.borderCollapse = 'Collapse'
  return tr;
}
 
function createTd(textContent) {
  const td = document.createElement("td");
  td.textContent = textContent;
  td.style.border = '1px solid black'
  td.style.borderCollapse = 'Collapse'
  return td;
}
 
  fetch("cars.json")
    .then((res) => res.json())
    .then((data) => {
      const table = createUsersTable(data);
 
      output.appendChild(table);
    });
;