const search = () => {
  const inputbox = document.getElementById("search-item").value.toUpperCase(); //values from user

  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".products");
  const productname = storeitems.getElementsByTagName("h6");

  for (let i = 0; i < productname.length; i++) {
    const match = product[i].getElementsByTagName("h6")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(inputbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = 'none';
      }
    }
  }
};

function showSearchBox(){
 let searchBox = document.getElementById("search-box");
 searchBox.style.display = "block"; // block viser 

}
 