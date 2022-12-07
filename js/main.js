let cart = document.querySelectorAll(".add-to-cart");

let product = []; // skal hente json array fra de nuværende filtrede produkter

for(let i=0; i < cart.length; i++){
    cart[i].addEventListener('click', () => {
        cartAmount(product[i]);
    })
}


function loadCartNumber(){
    let productAmount = localStorage.getItem('cartAmount')

    if(productAmount){
        document.querySelector('.cartNumber').textContent = productAmount;
    }
}

function cartAmount() {

    let productAmount = localStorage.getItem('cartAmount');

    productAmount = parseInt(productAmount);

    if(productAmount){
        localStorage.setItem('cartAmount', productAmount + 1)
        document.querySelector('.cartNumber').textContent = productAmount +1;
    }else{
        localStorage.setItem('cartAmount', 1)
        document.querySelector('.cartNumber').textContent = 1;
    }

    setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    product.inCart = 1;

    cartItems = {
        [product.skuId] : product
    }
    
    localStorage.setItem("productInCart", JSON.stringify(cartItems))
}

loadCartNumber();



// Get the modal

let modal = document.querySelectorAll(".modal");
     

// Get the button that opens the modal


var btn = document.querySelectorAll(".modalBtn");



function closePopup() {

 modal.style.display = "none";

}



// When the user clicks the button, open the modal

btn.onclick = function() {

  modal.style.display = "block";

}


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {

  if (event.target == modal) {

    modal.style.display = "none";

  }

}
