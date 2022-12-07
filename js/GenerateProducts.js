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
        <div class="card" id="prod-${productList[i].id}">
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
            <a id="modalBtn" class="btn btn-primary">Se produkt</a>
            
          </div>
        </div>
      </div>
      

      `;
        }

        var div = document.getElementById("content-product");

        htmlCode = divStart + htmlCode + divEnd;

        div.innerHTML = htmlCode;

    ;

}
}
var generateProducts = new GenerateProducts();