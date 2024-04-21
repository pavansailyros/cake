
    let product = [
        {
            name: "Chocolate Cake",
            description: "Melting Chocolate Cake",
            price: 599,
            image: "./assets/cake1.jpg",
        },
        {
            name: "Vanilla Cake",
            description: "Fresh vanilla cake",
            price: 499,
            image: "./assets/cake2.jpg",
        },
        {
            name: "Rainbow Cake",
            description: "Fresh rainbow cake",
            price: 499,
            image: "./assets/cake3.jpg"
        },
        {
            name: "White Forest Cake",
            description: "Eggless white forest cake",
            price: 599,
            image: "./assets/cake4.jpg"
        },
        {
            name: "Pink Cake",
            description: "80 Rose Pink Strawberry",
            price: 599,
            image: "./assets/cake5.jpg"
        },
        {
            name: "Black Forest",
            description: "Fresh Black Forest",
            price: 699,
            image: "./assets/cake6.jpg"
        }
    ];
    let cart = [];
    const productsContainer = document.getElementById("products");
    const cartContainer = document.getElementById("mycarts");
    
    product.forEach((value, index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("container");
        newDiv.innerHTML = `<div><img src=${value.image} width=175px height=150px></div>
                <div><b>${value.name}</b></div>
                <div><q>${value.description}</q></div>
                <div><i>Price: ${value.price}</i></div>
                <div><button onclick="addCart(${index})">Add</button></div>`;
        productsContainer.appendChild(newDiv);
    });
    
    function addCart(key) {
        cart.push({...product[key], quantity: 1});
        reloadCart();
    }

    function reloadCart() {
        cartContainer.innerHTML = "";
        let total = 0; 
        cart.forEach((value, index) => {
            if (value) {
                let cartDiv = document.createElement("div");
                cartDiv.classList.add("container");
                cartDiv.innerHTML = `<div><img src=${value.image} width=100px height=75px></div>
                            <div>${value.name}</div>
                            <div>Price: ${value.price * value.quantity}rs</div>
                            <div>
                                <button onclick="changeQuantity(${index}, ${value.quantity - 1})">-</button>
                                <span class="count">${value.quantity}</span>
                                <button onclick="changeQuantity(${index}, ${value.quantity + 1})">+</button>
                            </div>`;
                cartContainer.appendChild(cartDiv);
                total += value.price * value.quantity; 
            }
        });
      
        cartContainer.innerHTML += `<div><b>Total Price: ${total}rs</b></div>`;
    }
    
    
    function changeQuantity(i, quantity) {
        if (quantity === 0) {
            cart.splice(i, 1);
        } else {
            cart[i].quantity = quantity;
        }
        reloadCart();
    }
    
    const btn = document.getElementById("btn");
    const v = document.getElementById("v");
    const c = document.getElementById("c");
    
    btn.onclick = () => {
        v.classList.add("after");
    }
    c.onclick = () => {
        v.classList.remove("after");
    }
    