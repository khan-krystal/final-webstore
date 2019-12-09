
let numItemsInCart = 0;


function addItemsToCart(qtyToAdd) {
  numItemsInCart += qtyToAdd; // Add one to numItemsInCart
  document.getElementById(`cartNum`).innerHTML = numItemsInCart;
}

addItemsToCart(1)
addItemsToCart(2)
addItemsToCart(3);

  

 const products = [
    {
      name: `Faux Fur Jacket`,
      item: `I263892`,
      category: `jacket`,
      logo: `jacket-1.jpg`,
      cost: 39.00
    }, {
      name: `Puffer with Faux Fur Hood`,
      item: `827893`,
      category: `coat`,
      logo: `jacket-2.jpg`,
      cost: 55.00
    }, {
      name: `Trench Coat`,
      code: `927728`,
      category: `coat`,
      logo: `jacket-3.jpg`,
      cost: 39.00
    },{
        name: `Faux Cheetah Print`,
        code: `728723`,
        category: `coat`,
        logo: `jacket-4.jpg`,
        cost: 67.99
    },{
        name: `Faux Leather Jacket`,
        code: `902877`,
        category: `jacket`,
        logo: `jacket-5.jpg`,
        cost: 25.00
    }
  ];
  
  function searchByName(event) {
    const searchTerm = event.target.value; // From the input field
    const arrNameCheck = products.filter(filterByName, searchTerm)
    renderProducts(arrNameCheck);
  }

    function searchByCat(event) {
        const searchTerm = event.target.value; // From the dropdown/select field
        const arrCatCheck = products.filter(filterByCat, searchTerm)
        renderProducts(arrCatCheck);
      }