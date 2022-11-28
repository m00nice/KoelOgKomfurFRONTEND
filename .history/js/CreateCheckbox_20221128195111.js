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
        
        var product = this.product.sort(compare);
        var startDiv = `<div><<label for="product">Product<label>`
        var endDiv = `</div>`
        var productCheckhtml= productCheckhtml+`<input type="checkbox" name="${product[i].name}" value="${product[i].name}" id="${product[i].id}"></input>`
        for(var i = 0; i < product.length; i++){
    
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
           
            // console.log(productlist[i]);
            // var productName = productlist[i].name;
            // //  generate id
            // const id = `name-${productName}`;
        
            // // create a label
            // const label = document.createElement('label');
            // label.setAttribute("for", id);
           
            // // create a checkbox
            // const checkbox = document.createElement('input');
            // checkbox.type = "checkbox";
            // checkbox.name = "product";
            // checkbox.value = productName;
            // checkbox.id = id;
        
            // // place the checkbox inside a label
            // label.appendChild(checkbox);
            // // create text node
            // label.appendChild(document.createTextNode(productName));
            // // add the label to the root
            // document.querySelector("#root").appendChild(label);
        }
    

};


}
