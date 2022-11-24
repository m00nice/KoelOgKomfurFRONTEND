class GetBrands{

    endpointUrlBrands = "http://localhost:8080/brand";

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

        var brands = this.dataBrands.sort(compare);

        var startDiv = `<div><label for="brand">brand</label><select name="brand" id="brand">`
        var endDiv = `</select></div>`

        for(var i = 0; i < brands.length; i++){

            var brandsOptionsHTML = brandsOptionsHTML+`<option value="${brands[i].id}">${brands[i].name}</option>`

        }
        var div = startDiv + brandsOptionsHTML + endDiv;
        $("#brandOptions").append(div)

    };


}

var brandOptions = new GetBrands();