class GetProducts{

    endpointUrlProducts = "http://localhost:8080/product";

    constructor(product){
        this.product = product;
        this.fetchData();
        console.log("constructor");
    }

    async fetchData(){
        let response = await fetch(this.endpointUrlProducts);
        this.product = await response.json();
        console.log("fetchData");
        this.updatePage();
    }

    updatePage(){

        function compare(a, b) {
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
        console.log("update");
        
        var product = this.product.sort(compare);
    }
}
var getProducts = new GetProductss();