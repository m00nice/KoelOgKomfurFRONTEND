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
       
        for(var i = 0; i < product.length; i++){
    
     
           
            console.log(product[i]);
            var productName = product[i].name;
            //  generate id
            const id = `name-${productName}`;
        
            // create a label
            const label = document.createElement('label');
            label.setAttribute("for", id);
           
            // create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.value = productName;
            checkbox.id = id;
        
            // place the checkbox inside a label
            label.appendChild(checkbox);
            // create text node
            label.appendChild(document.createTextNode(productName));
            // add the label to the root
            document.querySelector("#checkbox").appendChild(label);
        }
    

};


}
var getProducts = new GetProducts();
