var allProducts = [];
var editedIndex;

function displayProducts() {
    display.innerHTML = "";

    for (let index = 0; index < allProducts.length; index++) {
        
        display.innerHTML += `
        <div class="card col-4 w-25 mx-5 my-3">
        <div class="card-body">
        <h4 class="card-title">${allProducts[index].name}</h4>
        <h5 class="card-text">Price: <i>$${allProducts[index].price}</i></h5>
        <h6 class="card-text">Category: ${allProducts[index].category}</h6>
        <button class="btn btn-danger" onclick="deleteOne(${index})"><i class="fa-solid fa-trash"></i></button>
        <button type="button" class="btn btn-warning" onclick="editOne(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
        </div>
        `
        
    }
}


function addProduct() {

    var nameInput = pName.value;
    var priceInput = pPrice.value;
    var catInput = pCategory.value;

    if(nameInput == "" || priceInput == "" || catInput == "") {

        alert("Kindly Enter Your Product Details")

    } else {

    var product = {
        name: pName.value,
        price: pPrice.value,
        category: pCategory.value
    }

    allProducts.push(product);

    pName.value = "";
    pPrice.value = "";
    pCategory.value = "";

    displayProducts();

}
    
}


function deleteOne(index) {

    allProducts.splice(index,1);

    displayProducts();
}



function editOne(index) {

    editedIndex = index; 

    
}

function saveChange(index) {

    var editNameInput = editedName.value;
    var editPriceInput = editedPrice.value;
    var editCatInput = editedCategory.value;

    if(editNameInput == "" || editPriceInput == "" || editCatInput == ""){
        alert("Kindly Enter Your Product Details")
    } else {

    var product = {

        name: editedName.value,
        price: editedPrice.value,
        category: editedCategory.value
    }

    allProducts.splice(editedIndex, 1, product);

    editedName.value = "";
    editedPrice.value = "";
    editedCategory.value = "";


    displayProducts();
}
}
