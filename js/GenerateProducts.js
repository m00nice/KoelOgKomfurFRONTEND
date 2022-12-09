var modal = document.getElementById("content-modal");


class GenerateProducts{


    endpointUrlProduct = "http://localhost:8080/product";

    
    

    constructor(dataProduct){
        this.dataProduct = dataProduct;

        console.log("yo")

        this.fetchData();
    }
    
    async fetchData(){
        let responseA = await fetch(this.endpointUrlProduct);
        console.log(responseA);

        this.dataProduct = await responseA.json();
        

        this.updatePage();
    
    }
    

    updatePage(){

      var modal = document.getElementById("content-modal");

      let modalHTML = `<div class="modal-content">
      <div class="close"><a id="closeModal" href="javascript:closePopup()">&times;</a></div>
      <div class="row">
        <div id="modal-img" class="col-5">
         
        </div>
        <div class="col">
          <h1 id="modal-titel">Titel</h1>
            <h2 id="modal-price">price</h2>
            <p><small>Told og moms inkluderet<a
                  href="https://kologkomfur.dk/policies/shipping-policy">Leveringskomkostninger</a> udregnet ved
                betaling.</small></p>
                <hr>
            <p class="productInfo">
              
            </p>
        </div>
      </div>
    </div>`;

      modal.innerHTML = modalHTML;

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
      

    

}

}

 //fill modal with product's values
function fillModal(producti){
            
            var modal = document.getElementById("content-modal");

            console.log(producti);
            producti = JSON.stringify(producti)
            producti = JSON.parse(producti);

            console.log(producti);

            var modal = document.getElementsByClassName("modal");
            var titel = document.getElementById("modal-titel");
            var price = document.getElementById("modal-price");
            var img = document.getElementById("modal-img");
            var info = document.getElementById("productInfo");
            
            if(producti.name != null){titel.innerHTML = producti.name;}
            
            if(producti.price != null){price.innerHTML = producti.price;}

            if(producti.imageURL != null && producti.name != null){img.innerHTML = `<img class="card-img-modal" src="${producti.imgURL}" alt="${producti.name} IMAGE" />`;}
            
            if(producti.info != null){info.innerHTML = producti.info;}

            modal.display = "block";
          }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.display = "none";
  }
}


var generateProducts = new GenerateProducts();

var productList  =  generateProducts.dataProduct;