import React from "react";

document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart');
    const cartPopup = document.querySelector('.cart-popup');

    if (cartIcon && cartPopup) {
        cartIcon.addEventListener('click', function () {
            cartPopup.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!cartPopup.contains(e.target) && !cartIcon.contains(e.target)) {
                cartPopup.classList.remove('active');
            }
        });
    }
});

function Cart() {
  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      <p>No items yet.</p>
    </div>
  );
}
export default Cart;