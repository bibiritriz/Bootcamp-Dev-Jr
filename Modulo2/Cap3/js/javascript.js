$("#inputPrice").mask("999.999.999.999.999,99", { reverse: true });

var products = [
  {
    id: 1,
    name: "Computador M1-TX",
    description: "Intel I7, 16GB, SSD 256, HD 1T",
    price: 4900,
    category: 1,
    promotion: true,
    new: true
  },
  {
    id: 2,
    name: "Computador M2-TX",
    description: "Intel I7, 32GB, SSD 512, HD 1T",
    price: 5900,
    category: 2,
    promotion: false,
    new: true
  },
  {
    id: 3,
    name: "Computador M1-T",
    description: "Intel I5, 16GB, HD 1T",
    price: 2900,
    category: 3,
    promotion: false,
    new: false
  },
];

var categories = [
  { id: 1, name: "Produção Própria" },
  { id: 2, name: "Nacional" },
  { id: 3, name: "Importado" }
];

loadProducts();

function save() {
  var prod = {
    id: products.length + 1,
    name: document.getElementById("inputName").value,
    description: document.getElementById("inputDescription").value,
    price: document.getElementById("inputPrice").value,
    category: document.getElementById("selectCategory").value,
    promotion: document.getElementById("checkBoxPromotion").checked,
    new: document.getElementById("checkBoxNewProduct").checked
  };

  addNewRow(prod);
  products.push(prod);

  document.getElementById("formProducts").reset();
}

function loadProducts() {
  for (let prod of products) {
    addNewRow(prod);
  }
}

function addNewRow(prod) {
  var table = document.getElementById("productsTable");

  var newRow = table.insertRow();

  var idNode = document.createTextNode(prod.id);
  newRow.insertCell().appendChild(idNode);

  var nameNode = document.createTextNode(prod.name);
  newRow.insertCell().appendChild(nameNode);

  var descriptionNode = document.createTextNode(prod.description);
  newRow.insertCell().appendChild(descriptionNode);

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var priceNode = document.createTextNode(formatter.format(prod.price));
  newRow.insertCell().appendChild(priceNode);

  var categoryNode = document.createTextNode(categories[prod.category - 1].name);
  newRow.insertCell().appendChild(categoryNode);

  console.log(categories)

  var options = '';
  if (prod.promotion) {
    options = '<span class="badge bg-success me-1">P</span>';
  }

  if (prod.new) {
    options += '<span class="badge bg-primary">L</span>';
  }

  newRow.insertCell().innerHTML = options;
}