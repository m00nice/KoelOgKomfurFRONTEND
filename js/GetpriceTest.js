var objectString = localStorage.getItem('user');
var user = JSON.parse(objectString);
var finaluser = JSON.parse(user);
var discount = finaluser.ilveDiscount;
console.log(discount);




 class GetpriceTest{
    

    endpointUrlProduct = "http://localhost:8080/product";
    
    constructor(dataBrands){
      
        this.dataBrands = dataBrands;
        this.fetchData();
        console.log("constructor");
    }
    
    fetchData(){
        fetch("http://localhost:8080/product")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    price(){
        var data = this.dataBrands;
        console.log(data.price)
    }
  




    
    

 }
 var generateProducts = new GetpriceTest();
