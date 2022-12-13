var objectString = localStorage.getItem('user');
var user = JSON.parse(objectString);
var finaluser = JSON.parse(user);
var discount = 25;
//var discount = finaluser.ilveDiscount;
console.log(discount);




 class GetpriceTest{
    

    endpointUrlProduct = "http://localhost:8080/product";
    
    endpointUrlBrands = "http://localhost:8080/brand";

    

    constructor(dataBrands){
        this.dataBrands = dataBrands;
        this.fetchData();
        console.log("constructor");
    }

    async fetchData(){
        let response = await fetch(this.endpointUrlProduct);
        this.dataBrands = await response.json();
       this.price()
       
    }
    
    constructor(dataBrands){
        this.dataBrands = dataBrands;
        this.fetchData();
        console.log("constructor");
    }

    async fetchData(){
        let response = await fetch(this.endpointUrlBrands);
        this.dataBrands = await response.json();
        console.log("fetchData");
        this.updatePage();
    }
    price(){
      switch(brandPrice){
        case (ilveDiscount):
            var data = this.dataBrands;
            for(var i = 0; i < data.length; i++){
                var oldprice = data[i].price;
                var newDiscount = (100-discount)/100;
                console.log(newDiscount);
                var newPrice = oldprice * newDiscount;
                document.querySelector("#price-"+brand.id);
            }
                break;
        case (pitDiscount):
            var data = this.dataBrands;
            for(var i = 0; i < data.length; i++){
                var oldprice = data[i].price;
                var newDiscount = (100-discount)/100;
                console.log(newDiscount);
                var newPrice = oldprice * newDiscount;
                document.querySelector("#price-"+brand.id);
            }
            break;
        case (fhiabaDiscount):
            var data = this.dataBrands;
              for(var i = 0; i < data.length; i++){
                var oldprice = data[i].price;
                var newDiscount = (100-discount)/100;
                console.log(newDiscount);
                var newPrice = oldprice * newDiscount;
                document.querySelector("#price-"+brand.id);
            }
            break;
            case (barazzaDiscount):
                var data = this.dataBrands;
                  for(var i = 0; i < data.length; i++){
                var oldprice = data[i].price;
                var newDiscount = (100-discount)/100;
                console.log(newDiscount);
                var newPrice = oldprice * newDiscount;
                document.querySelector("#price-"+brand.id);
                  }
                  
                break;
                }
     
        // var data = this.dataBrands;
       
        // for(var i = 0; i < data.length; i++){
        //     var oldprice = data[i].price;
        //     var newDiscount = (100-discount)/100;
        //     console.log(newDiscount);
        //     var newPrice = oldprice * newDiscount;

     
           
        //     console.log(data.newPrice);
        // };
       




    
    

 }
}
 var generateProducts = new GetpriceTest();
generateProducts.price();
<p class="card-texta">fra ${productList[i].price} kr.</p>