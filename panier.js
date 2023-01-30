var shoppingCart = document.getElementById("shopping-cart");
var incrementButtons = shoppingCart.getElementsByClassName("increment");
var decrementButtons = shoppingCart.getElementsByClassName("decrement");
var removeButtons = shoppingCart.getElementsByClassName("remove-item");
var cartTotal = shoppingCart.getElementsByClassName("cart-total")[0];

for (var i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", function() {
    var quantityInput = this.parentElement.getElementsByTagName("input")[0];
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updateItemTotal(this.parentElement.parentElement);
    updateCartTotal();
  });
}

for (var i = 0; i < decrementButtons.length; i++) {
  decrementButtons[i].addEventListener("click", function() {
    var quantityInput = this.parentElement.getElementsByTagName("input")[0];
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
      updateItemTotal(this.parentElement.parentElement);
      updateCartTotal();
    }
  });
}

for (var i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", function() {
    this.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateItemTotal(itemRow) {
  var price = parseFloat(itemRow.getElementsByTagName("td")[1].innerHTML.replace(" €", ""));
  var quantity = parseInt(itemRow.getElementsByTagName("input")[0].value);
  var itemTotal = itemRow.getElementsByClassName("item-total")[0];
  itemTotal.innerHTML = (price * quantity) + " €";
}

function updateCartTotal() {
  var itemRows = shoppingCart.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  var total = 0;
  for (var i = 0; i < itemRows.length; i++) {
    var itemTotal = parseFloat(itemRows[i].getElementsByClassName("item-total")[0].innerHTML.replace(" €", ""));
    total += itemTotal;
  }
  cartTotal.innerHTML = total + " €";
}
