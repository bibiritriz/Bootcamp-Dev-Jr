$("#inputPrice").mask("999.999.999.999.999,99", { reverse: true });

function convertToNumber(priceFormat) {
  return priceFormat.replace(/\./g, '').replace(',', '.');
}

let products = [];
let categories = [];

function save() {
  const prod = {
    id: products.length + 1,
    name: document.getElementById("inputName").value,
    description: document.getElementById("inputDescription").value,
    price: convertToNumber(document.getElementById("inputPrice").value),
    idCategory: document.getElementById("selectCategory").value,
    promotion: document.getElementById("checkBoxPromotion").checked,
    newProduct: document.getElementById("checkBoxNewProduct").checked
  };

  $.ajax({
    url: "http://localhost:8080/products",
    type: "POST",
    contentType: "application/json",
    async: false,
    data: JSON.stringify(prod),
    success: (product) => {
      addNewRow(product);
      products.push(product);
      document.getElementById("formProducts").reset();
    }
  });
}

loadCategories();
loadProducts();

function loadCategories() {
  $.ajax({
    url: "http://localhost:8080/categories",
    type: "GET",
    async: false,
    success: (response) => {
      categories = response;
      for (let cat of categories) {
        document.getElementById("selectCategory").innerHTML += `<option value=${cat.id}>${cat.name}</option>`;
      }
    }
  });
}

function loadProducts() {
  $.getJSON("http://localhost:8080/products", (response) => {
    products = response;
    for (let prod of response) {
      addNewRow(prod);
    }
  });
}

function addNewRow(prod) {
  const table = document.getElementById("productsTable");

  const newRow = table.insertRow();

  const idNode = document.createTextNode(prod.id);
  newRow.insertCell().appendChild(idNode);

  const nameNode = document.createTextNode(prod.name);
  newRow.insertCell().appendChild(nameNode);

  const descriptionNode = document.createTextNode(prod.description);
  let cell = newRow.insertCell();
  cell.className = "d-none d-md-table-cell";
  cell.appendChild(descriptionNode);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const priceNode = document.createTextNode(formatter.format(prod.price));
  newRow.insertCell().appendChild(priceNode);

  const categoryNode = document.createTextNode(categories[prod.idCategory - 1].name);
  newRow.insertCell().appendChild(categoryNode);

  let options = '';
  if (prod.promotion) {
    options = '<span class="badge bg-success me-1">P</span>';
  }
  if (prod.newProduct) {
    options += '<span class="badge bg-primary">L</span>';
  }

  cell = newRow.insertCell();
  cell.className = "d-none d-md-table-cell";
  cell.innerHTML = options;
}