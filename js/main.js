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




