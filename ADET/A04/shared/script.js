var products = [
    {
        "category": "T-Shirts",
        "contents": [
            {
                "isAvailable": true,
                "name": "Classic Tee",
                "code": "CLT",
                "image": "images/T3.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 199 },
                    { "name": "Medium", "code": "M", "price": 199 },
                    { "name": "Large", "code": "L", "price": 199 }
                ]
            },
            {
                "isAvailable": true,
                "name": "V-Neck Tee",
                "code": "VNT",
                "image": "images/T2.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 249 },
                    { "name": "Medium", "code": "M", "price": 249 },
                    { "name": "Large", "code": "L", "price": 249 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Graphic Tee",
                "code": "GRT",
                "image": "images/T1.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 299 },
                    { "name": "Medium", "code": "M", "price": 299 },
                    { "name": "Large", "code": "L", "price": 299 }
                ]
            }
        ]
    },
    {
        "category": "Sweaters",
        "contents": [
            {
                "isAvailable": true,
                "name": "Crewneck Sweater",
                "code": "CRSW",
                "image": "images/S1.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 1299 },
                    { "name": "Medium", "code": "M", "price": 1299 },
                    { "name": "Large", "code": "L", "price": 1299 }
                ]
            },
            {
                "isAvailable": true,
                "name": "V-Neck Sweater",
                "code": "VNSW",
                "image": "images/S2.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 1199 },
                    { "name": "Medium", "code": "M", "price": 1199 },
                    { "name": "Large", "code": "L", "price": 1199 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Turtleneck Sweater",
                "code": "TLSW",
                "image": "images/S3.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 1499 },
                    { "name": "Medium", "code": "M", "price": 1499 },
                    { "name": "Large", "code": "L", "price": 1499 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cardigan",
                "code": "CDGN",
                "image": "images/S4.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 1599 },
                    { "name": "Medium", "code": "M", "price": 1599 },
                    { "name": "Large", "code": "L", "price": 1599 }
                ]
            }
        ]
    },
    {
        "category": "Jeans",
        "contents": [
            {
                "isAvailable": true,
                "name": "Skinny Jeans",
                "code": "SKJN",
                "image": "images/J1.png",
                "price": 899
            },
            {
                "isAvailable": true,
                "name": "Straight Cut",
                "code": "STCT",
                "image": "images/J2.png",
                "price": 849
            },
            {
                "isAvailable": true,
                "name": "Bootcut Jeans",
                "code": "BTCJ",
                "image": "images/J3.png",
                "price": 899
            },
            {
                "isAvailable": true,
                "name": "Ripped Jeans",
                "code": "RPJN",
                "image": "images/J4.png",
                "price": 999
            }
        ]
    },
    {
        "category": "Outerwear",
        "contents": [
            {
                "isAvailable": true,
                "name": "Denim Jacket",
                "code": "DMJT",
                "image": "images/O1.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 1999 },
                    { "name": "Medium", "code": "M", "price": 1999 },
                    { "name": "Large", "code": "L", "price": 1999 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Bomber Jacket",
                "code": "BMJT",
                "image": "images/O2.png",
                "sizes": [
                    { "name": "Small", "code": "S", "price": 2299 },
                    { "name": "Medium", "code": "M", "price": 2299 },
                    { "name": "Large", "code": "L", "price": 2299 }
                ]
            }
        ]
    }
];

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML += `
          <div onclick="loadProducts('`+ index + `')" class="card mx-1 custom-button p-2 text-center">
            <small>`+ product.category + `</small>
          </div>
        `;
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    if (products[categoryIndex].contents[0].sizes) {
        products[categoryIndex].contents.forEach(content => {
            content.sizes.forEach(size => {
                maincontainer.innerHTML += `
                        <div onclick="addToReceipt('${size.price}','${content.code + size.code}','${content.name} ${size.code}')" 
                            class="card mx-1 my-2 custom-button content p-3 text-center">
                            <img src="${content.image}" class="product-img" alt="${content.name}">
                            <small>${content.name} ${size.code}</small>
                            <small>₱${size.price}</small>
                        </div>
                    `;
            });
        });
    } else {
        products[categoryIndex].contents.forEach(content => {
            if (content.isAvailable) {
                maincontainer.innerHTML += `
                        <div onclick="addToReceipt('${content.price}','${content.code}','${content.name}')" 
                            class="card mx-1 my-2 custom-button content p-3 text-center">
                            <img src="${content.image}" class="product-img" alt="${content.name}">
                            <small>${content.name}</small>
                            <small>₱${content.price}</small>
                        </div>
                    `;
            }
        });
    }
}

function addToReceipt(price, code, name) {
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
        receiptContainer.innerHTML += `
        <div id="${itemId}" class="d-flex flex-column mb-2 border-bottom pb-2">
            <div class="d-flex justify-content-between">
                <small><b>${code}</b></small>
                <small class="item-subtotal">₱${price}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-1">
                <div class="d-flex align-items-center">
                    <button onclick="updateQty('${itemId}', ${price}, -1)" class="btn btn-sm btn-light px-2 py-0 me-1">−</button>
                    <small class="item-qty">1</small>
                    <button onclick="updateQty('${itemId}', ${price}, 1)" class="btn btn-sm btn-light px-2 py-0 ms-1">+</button>
                </div>
                <button onclick="removeItem('${itemId}', ${price})" class="btn btn-sm custom-button py-0 px-2">Remove</button>
            </div>
        </div>`;
    }

    total += parseFloat(price);
    totalValueElement.innerText = total;
}


function updateQty(itemId, price, change) {
    var item = document.getElementById(itemId);
    var qtyEl = item.querySelector(".item-qty");
    var subtotalEl = item.querySelector(".item-subtotal");

    var qty = parseInt(qtyEl.innerText) + change;

    if (qty < 1) return;

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

    const summary = `Your Order Summary:\n\n${receipt}\n\nTOTAL: ₱${total}\n\nClick OK to confirm and refresh.`;
    if (confirm(summary)) {
        location.reload();
    }
}


loadCategories();