let cartCount = 0;

document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart-btn").innerText = `🛒 Cart (${cartCount})`;
    alert("Painting added to cart!");
  });
});
