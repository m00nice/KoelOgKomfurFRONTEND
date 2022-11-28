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
    
    updateHtmlPage(){

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
        
        var productlist = this.product.sort(compare);
        var startDiv = `<div><<label for="product">Product<label>`
        var endDiv = `</div>`
        
        for(let i = 0; i < productlist.length; i++){
        
            console.log(productlist[i]);
            var productName = productlist[i].name;
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
            document.querySelector("#root").appendChild(label);
        };
    
   



}

}

console.log("update");

var brands = this.dataBrands.sort(compare);

var startDiv = `<div><label for="brand">brand</label><select name="brand" id="brand">`
var endDiv = `</select></div>`

for(var i = 0; i < brands.length; i++){

    var brandsOptionsHTML = brandsOptionsHTML+`<option value="${brands[i].id}">${brands[i].name}</option>`
    var productCheckhtml= productCheckhtml+'<input type="checkbox" name="${product[i]" value="product" id="product"></input>'
}
var div = startDiv + brandsOptionsHTML + endDiv;
$("#brandOptions").append(div)

};


}

var brandOptions = new GetBrands();