'use strict';

const cartContainer = document.getElementById('cart');
const hCells = ['Product', 'Price', 'Qty', 'Subtotal'];

var cart = [
  {
    productID: 1,
    name: 'Cold pressed juice',
    quantity: 1,
    price: 10,
    currency: 'USD',
  },
  {
    productID: 2,
    name: 'Mason Jar',
    quantity: 2,
    price: 8,
    currency: 'USD',
  },
  {
    productID: 3,
    name: 'Camping Mug',
    quantity: 1,
    price: 14.95,
    currency: 'USD',
  },
];

function generateCart() {
  cartContainer.innerHTML = '';

  let cartTable = document.createElement('table');
  cartTable.classList.add('uk-table', 'uk-table-middle', 'uk-table-divider');

  buildHeader(cartTable);

  cart.forEach((lineItem) => {
    const template = `<tr>
                          <td>${lineItem.name}</td>
                          <td>${lineItem.price} ${lineItem.currency}</td>
                          <td>${lineItem.quantity}</td>
                          <td>${lineItem.quantity * lineItem.price} ${lineItem.currency}</td>
                      </tr>`;

    cartTable.insertAdjacentHTML('beforeend', template);
  });

  buildFooter(cartTable);

  cartContainer.insertAdjacentElement('afterbegin', cartTable);
}

const buildHeader = (table) => {
  let caption = table.createCaption();
  caption.textContent = 'Product cart';

  let header = table.createTHead();
  let hRow = header.insertRow(0);

  hCells.forEach((title, i) => {
    let cell = hRow.insertCell(i);
    cell.outerHTML = `<th>${title}</th>`;
  });
};

const buildFooter = (table) => {
  let message = '';
  const footer = table.createTFoot();
  const cell = footer.insertRow(0).insertCell(0);

  if (Array.isArray(cart) && cart.length) {
    message = `В корзине: ${cart.length} товара/ов на сумму ${countBasketPrice()} ${cart[0].currency}`;
  }
  else {
    message = `Корзина пуста`;
  }

  cell.textContent = message;
};

const countBasketPrice = () => {
  let basketPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    basketPrice += cart[i].price * cart[i].quantity;
  }

  return basketPrice;
};
