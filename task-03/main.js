import { addProduct, removeProduct, updateQuantity, calculateTotal } from "./cart.js";

const show = (cart) => {
  cart.forEach(({ id, name, price, quantity }) =>
    console.log(`#${id} ${name}: ${price} x ${quantity} = ${price * quantity}`)
  );
  console.log(`Total: ${calculateTotal(cart)} lei\n`);
};

let cart = [];
cart = addProduct(cart, { id: 1, name: "Laptop", price: 12000, quantity: 1 });
cart = addProduct(cart, { id: 2, name: "Mouse", price: 250, quantity: 2 });
cart = addProduct(cart, { id: 2, name: "Mouse", price: 250, quantity: 1 });
console.log("După adăugare:");
show(cart);

cart = updateQuantity(cart, 1, 2);
console.log("După modificarea cantității:");
show(cart);

cart = removeProduct(cart, 2);
console.log("După ștergere:");
show(cart);

try {
  removeProduct(cart, 99);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}
