function Product(title, price, image, producer, category, city) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.producer = producer;
    this.category = category;
    this.city = city;
}

var accessories = {
    "products": [
        new Product("White Mug", "10\u20ac", "../Images/gota1.jpg", "FC Staff", "Accessories", "Prishtina"),
        new Product("Black Mug", "10\u20ac", "../Images/gota2.jpg", "FC Staff", "Accessories", "Prishtina"),
        new Product("Leather Handbags", "90\u20ac", "../Images/bags3.jpg", "FC Staff", "Accessories", "Prishtina"),
        new Product("Recyclable Handbags", "80\u20ac", "../Images/bags4.jpg", "FC Staff", "Accessories", "Prishtina"),
        new Product("Hats", "25\u20ac", "../Images/bags5.jpg", "FC Staff", "Accessories", "Prishtina"),
        new Product("Friendship Bracelet", "35\u20ac", "../Images/bags6.jpg", "FC Staff", "Accessories", "Prishtina")
      ] 
}

var clothes = {
    "products": [
      new Product("Boxers", "10\u20ac", "../Images/clothes1.jpg", "FC Staff", "Clothes", "Prishtina"),
      new Product("Pullovers", "50\u20ac", "../Images/clothes2.jpg", "FC Staff", "Clothes", "Prishtina"),
      new Product("Hoodies", "90\u20ac", "../Images/clothes3.jpg", "FC Staff", "Clothes", "Prishtina"),
      new Product("Socks", "10\u20ac", "../Images/clothes4.jpg", "FC Staff", "Clothes", "Prishtina"),
      new Product("T-Shirts", "70\u20ac", "../Images/clothes5.jpg", "FC Staff", "Clothes", "Prishtina"),
      new Product("Hoodie", "55\u20ac", "../Images/clothes6.jpg", "FC Staff", "Clothes", "Prishtina")
    ]
  }

  var items = {
    "products": [
      new Product("Water Thermos", "20\u20ac", "../Images/item1.jpg", "FC Staff", "Items", "Prishtina"),
      new Product("Case", "15\u20ac", "../Images/item2.jpg", "FC Staff", "Items", "Prishtina"),
      new Product("Water Thermos", "20\u20ac", "../Images/item3.jpg", "FC Staff", "Items", "Prishtina"),
      new Product("Stickers", "5\u20ac", "../Images/item4.jpg", "FC Staff", "Items", "Prishtina"),
      new Product("Key chain", "10\u20ac", "../Images/item5.jpg", "FC Staff", "Items", "Prishtina"),
      new Product("Pen", "8\u20ac", "../Images/item6.jpg", "FC Staff", "Items", "Prishtina")
    ]
  }

$.each(accessories.products, function (index, item) {
    $("#Bags-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

$.each(clothes.products, function (index, item) {
    $("#food-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

$.each(items.products, function (index, item) {
    $("#textile-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

function CartProd(title, quantity, price) {
    Product.call(this, title, price);
    this.quantity = quantity;
}

var cart = JSON.parse(sessionStorage.getItem('cart'));

$.each(cart, function (index, item) {
    $("#cartList").append(
        $("<button>")
            .attr("id", "btn" + index)
            .click(function () { removeItem("btn" + index) })
            .append($("<i>").attr("class", "fas fa-times")),
        $("<dt>").text(item.title),
        $("<dd>").text(item.quantity).attr('class', 'inline'),
        $("<dd>").text(item.price)
    )
});
calcTotal();

function passCart() {
    const cart = []

    var cartList = document.getElementById("cartList");
    var titles = cartList.getElementsByTagName("dt");
    var quantities_prices = cartList.getElementsByTagName("dd");

    var ddIndex = 0;
    for (let i = 0; i < titles.length; i++) {
        var product = new CartProd(titles[i].innerHTML, quantities_prices[ddIndex].innerHTML, quantities_prices[ddIndex + 1].innerHTML);
        cart.push(product);
        ddIndex += 2;
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(elementId) {
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).remove();
    calcTotal();
}

function calcQuantity(title, price) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");

    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].innerHTML == title) {

            let quantity = cartList[i].nextElementSibling;
            quantity.innerHTML = 'x' + (parseInt(quantity.innerHTML.substring(1)) + 1).toString();

            let newPrice = quantity.nextElementSibling;
            newPrice.innerHTML = (parseFloat(price.slice(0, -1)) * parseInt(quantity.innerHTML.substring(1))).toFixed(2) + '\u20ac';

            break;
        }
    }
};

function exists(title) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");

    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].innerHTML == title) {
            return true;
        }
    }

    return false;
};

function calcTotal() {
    var cartList = document.getElementById("cartList").getElementsByTagName("dd");
    var total = 0;

    for (let i = 0; i < cartList.length; i++) {
        if (i % 2 == 1) {
            total += parseFloat(cartList[i].innerHTML.slice(0, -1))
        }
    }

    document.getElementById("totalPrice").innerHTML = total.toFixed(2).toString() + "\u20ac"
};

window.onbeforeunload = function () {
    passCart();
};

{/* <table>
      <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Producer</th>
          <th>Category</th>
          <th>City</th>
      </tr>
      <tr>
          <td></td>
      </tr>
  </table> */}

{/* 
    <div id="art-container">
        <div class="product">
            <div class="product-header">
                <img src=${image} alt="product"></img>
            </div>
            <div class="product-footer">
                <h3>${title}</h3>
                <h4>${price}</h4>
            </div>
        </div> 
    </div>
    */}