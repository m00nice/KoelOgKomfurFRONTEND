var modalContent = document.getElementById("content-modal");

var cart = document.getElementById("cart")

class GenerateProducts{
 
    endpointUrlProduct = "http://localhost:8080/product";
    
    endpointUrlBrand = "http://localhost:8080/brand";

    constructor(dataProduct,dataBrand){
        this.dataProduct = dataProduct;

        this.dataBrand = dataBrand;

        console.log("yo")

        this.fetchData();
    }
    
    async fetchData(){
        let responseA = await fetch(this.endpointUrlProduct);
        let responseB = await fetch(this.endpointUrlBrand);

        console.log(responseA);

        this.dataProduct = await responseA.json();
        this.dataBrand = await responseB.json();
        

        this.updatePage();
    
    }
    

    updatePage(){

      var brandlist = this.dataBrand.sort(alphAsc);

      let htmlCodeBrand = ``;

      for(var i = 0; i < brandlist.length; i++){

      htmlCodeBrand = htmlCodeBrand + `
      
      <li class="nav-item p-2 m-3">
              <a class="nav-link" style="color: #fff" onclick="getBrandProduct(${brandlist[i].productList})">${brandlist[i].name}</a>
            </li>
    
      `
    }

    var divBrand = document.getElementById("content-brand");

    divBrand.innerHTML = htmlCodeBrand;
        
      let modalHTML = `<div class="modal-content">
      <div class="close"><a id="closeModal" href="javascript:closePopup()">&times;</a></div>
      <div class="row">
      <div id="modal-id" style="display: none;"></div>
        <div id="modal-img" class="col-5">
         
        </div>
        <div class="col">
          <h1 id="modal-titel">Titel</h1>
            <h2 id="modal-price">price</h2>
            <h3><button id="add-to-cart" >Tilføj til kurv</button></h3>
            <p><small>Told og moms inkluderet<a
                  href="https://kologkomfur.dk/policies/shipping-policy" target="_blank">Leveringskomkostninger</a> udregnet ved
                betaling.</small></p>
                <hr>
            <p id="productInfo">
              
            </p>
        </div>
      </div>
    </div>`;

      modalContent.innerHTML = modalHTML;

        

        var productList = this.dataProduct.sort(alphAsc);

        console.log(productList);

        let htmlCode = ``;

        var divStart = `<div class="container-fluid" style="width: 61%">
        <div class="row">`;

        var divEnd = `</div></div>`;

        for(var i = 0; i < productList.length; i++){
            
        console.log(productList);

        htmlCode = htmlCode +
        
        `
        

        <div class="col-4 my-2">
        <div class="card" id="${productList[i].id}">
          <img
            class="card-img-top"
            src="${productList[i].imageURL}"
            alt="${productList[i].name} IMAGE"
          />
          <div class="card-body">
            <h5 class="card-title">${productList[i].name}</h5>
            <span class="card-text">DOBBELT KOMFUR - 90 CM</span>
            <p class="card-text">${productList[i].brand.name}</p>
            <p class="card-texta">fra ${productList[i].price} kr.</p>
            <button id="modalBtn-${productList[i].id}" onclick='fillModal(${JSON.stringify(productList[i])})' class="btn btn-primary">Se produkt</button>
            
          </div>
        </div>
      </div>
      

      `;
        }

        var div = document.getElementById("content-product");

        htmlCode = divStart + htmlCode + divEnd;

        div.innerHTML = htmlCode;
      

        let addToCartButton = document.getElementById("add-to-cart");

        console.log(addToCartButton);
        
        
            addToCartButton.addEventListener('click', () => {
                addProductToCart();
                cartAmount();
            })
    

}

}

function alphAsc(a, b) {
  const nameA = a.name;
  const nameB = b.name;
  let comparison = 0;
  if(nameA > nameB){
      comparison = 1;
  }else if(nameA < nameB){
      comparison = -1;
  }
  return comparison;
  
}

 //fill modal with product's values
function fillModal(producti){
            
            

            console.log(producti);
            producti = JSON.stringify(producti)
            producti = JSON.parse(producti);

            console.log(producti);

            var idM = document.getElementById("modal-id");
            var titel = document.getElementById("modal-titel");
            var price = document.getElementById("modal-price");
            var img = document.getElementById("modal-img");
            var info = document.getElementById("productInfo");

            if(producti != null){idM.innerHTML = JSON.stringify(producti);}
            
            if(producti.name != null){titel.innerHTML = producti.name;}
            
            if(producti.price != null){price.innerHTML = producti.price;}

            if(producti.imageURL != null && producti.name != null){img.innerHTML = `<img class="card-img-modal" src="${producti.imgURL}" alt="${producti.name} IMAGE" />`;}
            
            if(producti.description != null){info.innerHTML = producti.description;}
            console.log(modalContent.style.display);
            modalContent.style.display = "block";
          }

window.onclick = function(event) {
  
  if (event.target == modalContent) {
    modalContent.style.display = "none";
  }

  if(event.target == cart){
    cart.style.display = "none";
  }

}


var generateProducts = new GenerateProducts();





  

//CART FUCTIONS
function loadCartNumber(){
  let productNumber = localStorage.getItem('cartNumber')

  if(productNumber){
      document.getElementById('cartNumber').textContent = productNumber;
  }
}

function cartAmount() {

  let productNumber = localStorage.getItem('cartNumber');

  productNumber = parseInt(productNumber);

  if(productNumber){
      localStorage.setItem('cartNumber', productNumber + 1)
      document.getElementById('cartNumber').textContent = productNumber +1;
  }else{
      localStorage.setItem('cartNumber', 1)
      document.getElementById('cartNumber').textContent = 1;
  }

  

}

function addProductToCart(){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log("items in cart",cartItems);
    
  let grId = () => {return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1)};

  let rId = grId()+'-'+grId()+'-'+grId()+'-'+grId();

  let frId = "arraySplit"+rId+"-"+rId+"-"+rId+"-"+rId+"arraySplit";

  var product = document.getElementById("modal-id").textContent;

  product = JSON.parse(product);

  if(cartItems != null){
    if(cartItems[product] == undefined){
      cartItems = {
      ...cartItems,
      [frId]: product
    }}
  }else{
    cartItems = {
  [frId] : product
 }}

  

  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
  

}

function showCart(){
  cart = document.getElementById("cart");
  var itemId = localStorage.getItem("productsInCart").slice(0,-1)
  console.log(itemId);
  var itemId = itemId.split("arraySplit\":").join("arraySplit").split("arraySplit");
  itemId.splice(0,1)
  itemId.pop;
  var cartItems = [];
  console.log(itemId);
  for (var i = itemId.length - 1; i >= 0; i--) {
    // remove element if index is odd
    if (i % 2 == 1){
      var itemTemp = itemId[i].slice(0 ,itemId[i].length)
      var itemStringFinal
      if(i != itemId.length-1){
      itemStringFinal = itemTemp.slice(0 ,itemId[i].length-2)
    }else{itemStringFinal = itemTemp;}
      itemObjFinal = JSON.parse(itemStringFinal);
      cartItems.push(itemObjFinal);
      itemObjFinal['idLocStor'] = itemId[i-1];
      console.log(itemObjFinal);
      console.log(itemObjFinal);
    }
  }

  console.log(cartItems);
  
  var totalPrice = 0;

    var startDiv = `</div>`;
    var endDiv = `</div>`;
    var div = ``;
    
  for(var i = 0; i < cartItems.length; i++){
    totalPrice = totalPrice + cartItems[i].price;
    

    div = div + `

    <div class="cart-product">    
    
          <div class="product-image">
            <img src="${cartItems[i].imgUrl}">
          </div>
          <div class="product-details">
            <div class="product-title">${cartItems[i].name}</div>
            <div class="product-title">${cartItems[i].skuId}</div>
            <p class="product-description">${cartItems[i].description}</p>
          </div>
          <div class="product-price">${cartItems[i].price}</div>
          <div class="product-removal">
            <button class="remove-product" onclick="removeItem(${cartItems[i].idLocStor})">
              Remove
            </button>
          </div>
        </div>
        
    
    `

  }
  div = startDiv + div + endDiv;
  cart.innerHTML = div;
  cart.style.display = "block";
}

function removeItem(id){

}

loadCartNumber();

