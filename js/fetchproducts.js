async function getProducts() {
  let url = (endpointUrlProduct = "http://localhost:8080/product");

  let response = fetch(url);
  let responseStatus = await response.then((response) => response);
  if (!responseStatus.ok) {
    throw new Error(`Http error! Status: ${responseStatus.status}`);
  } else {
    return await response.then((response) => response.json());
  }
}

async function populateTable() {
  let serverData = await getProducts();
  let tableData = "";
  serverData.forEach((element) => {
    tableData += `<div>
                  <h3>${element.name}</h3>
                  <h6>${element.skuId}</h6>
                  <h4>${element.price}</h4>
                  </div>`;
  });

  document.getElementById("productbody").innerHTML = tableData;
}

