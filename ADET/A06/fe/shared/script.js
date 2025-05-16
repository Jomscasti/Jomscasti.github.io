var categories = [];
var products = [];
var total = 0;

const getAllCategories = async () => {
    fetch('http://localhost/WebDev/ADET/A06/be/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
            if (categories.length > 0) {
                getAllProducts(categories[0].category_id);
            }
        })
        .catch(error => console.error('Error fetching categories:', error));
}

const getAllProducts = async (category_id) => {
    const categoryData = {
        category_id: category_id
    };

    fetch('http://localhost/WebDev/ADET/A06/be/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        })
        .catch(error => console.error('Error fetching products:', error));
}

getAllCategories();

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = "";

    categories.forEach((category) => {
        const itemCount = category.product_count || 0;
        categoriesContainer.innerHTML +=
            `
            <div onclick="getAllProducts('` + category.category_id + `')" class="card mx-1 custom-button p-2 text-center">
              <small>` + category.name + `</small>
            </div>
          `;
    });
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach((product) => {
        maincontainer.innerHTML +=
            `
            <div onclick="addToReceipt('` + product.price + `','` + product.code + `')" class="card mx-1 my-2 custom-button content p-3 text-center">
              <img src="` + product.cover_image + `" class="product-img" alt="` + product.title + `">
              <small>` + product.title + `</small>
              <small>₱` + product.price + `</small>
            </div>
          `;
    });
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    var totalValueElement = document.getElementById("totalValue");
    var itemId = "item-" + code;

    var existingItem = document.getElementById(itemId);

    if (existingItem) {
        var qtyEl = existingItem.querySelector(".item-qty");
        var qty = parseInt(qtyEl.innerText) + 1;
        qtyEl.innerText = qty;

        var subtotal = price * qty;
        existingItem.querySelector(".item-subtotal").innerText = "₱" + subtotal;
    } else {
        receiptContainer.innerHTML +=
            `
            <div id="` + itemId + `" class="d-flex flex-column mb-2 border-bottom pb-2">
              <div class="d-flex justify-content-between">
                <small><b>` + code + `</b></small>
                <small class="item-subtotal">₱` + price + `</small>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-1">
                <div class="d-flex align-items-center">
                  <button onclick="updateQty('` + itemId + `', ` + price + `, -1)" class="btn btn-sm btn-light px-2 py-0 me-1">−</button>
                  <small class="item-qty">1</small>
                  <button onclick="updateQty('` + itemId + `', ` + price + `, 1)" class="btn btn-sm btn-light px-2 py-0 ms-1">+</button>
                </div>
                <button onclick="removeItem('` + itemId + `', ` + price + `)" class="btn btn-sm custom-button py-0 px-2">Remove</button>
              </div>
            </div>
          `;
    }

    total += parseFloat(price);
    totalValueElement.innerText = total;
}

function updateQty(itemId, price, change) {
    var item = document.getElementById(itemId);
    var qtyEl = item.querySelector(".item-qty");
    var subtotalEl = item.querySelector(".item-subtotal");

    var qty = parseInt(qtyEl.innerText) + change;

    if (qty < 1) {
        removeItem(itemId, price);
        return;
    }

    qtyEl.innerText = qty;
    subtotalEl.innerText = "₱" + (price * qty);

    total += price * change;
    document.getElementById("totalValue").innerText = total;
}

function removeItem(itemId, pricePerUnit) {
    var item = document.getElementById(itemId);
    var qty = parseInt(item.querySelector(".item-qty").innerText);

    total -= pricePerUnit * qty;
    document.getElementById("totalValue").innerText = total;

    item.remove();
}

function checkout() {
    const receipt = document.getElementById("receipt").innerText.trim();
    const total = document.getElementById("totalValue").innerText;

    if (!receipt) {
        alert("Your receipt is empty.");
        return;
    }

    const summary = "Your Order Summary:\n\n" + receipt + "\n\nTOTAL: ₱" + total + "\n\nClick OK to confirm and refresh.";
    if (confirm(summary)) {
        location.reload();
    }
}