var clothingGrid = document.getElementById("clothing");
var accessoriesGrid = document.getElementById("accessories");
// accessing data
var productList = [];
fetch("productList.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedList) => {
    productList = loadedList;
    cardData();
  })
  .catch((err) => {
    console.log(err);
  });

cardData = () => {
  for (let i = 0; i < productList.length; i++) {
    cardCreation(productList[i]);
    if (i == productList.length - 1) {
      cardOpen();
    }
  }
};
// creating card
function cardCreation(data) {
  var card = document.createElement("div");
  card.className = "cards";
  card.id = data.id;
  var imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv";
  var thumbnail = document.createElement("img");
  thumbnail.src = data.preview;
  card.appendChild(imgDiv);
  imgDiv.appendChild(thumbnail);
  var details = document.createElement("div");
  details.className = "details";
  card.appendChild(details);
  var name = document.createElement("h3");
  name.className = "name";
  name.innerHTML = data.name;
  var brand = document.createElement("p");
  brand.className = "brand";
  brand.innerHTML = data.brand;
  var price = document.createElement("p");
  price.className = "price";
  var priceText = "RS " + data.price;
  price.innerHTML = priceText;
  details.appendChild(name);
  details.appendChild(brand);
  details.appendChild(price);
  if (data.isAccessory == false) {
    clothingGrid.appendChild(card);
  } else if (data.isAccessory == true) {
    accessoriesGrid.appendChild(card);
  }
}

// accessing cards
var home = document.getElementById("home");
var cardInfo = document.getElementById("cardInfo");
function cardOpen() {
  cardInfo.style.display = "none";
  document.getElementById("1").addEventListener("click", function () {
    insideCard(0);
  });
  document.getElementById("2").addEventListener("click", function () {
    insideCard(1);
  });
  document.getElementById("3").addEventListener("click", function () {
    insideCard(2);
  });
  document.getElementById("4").addEventListener("click", function () {
    insideCard(3);
  });
  document.getElementById("5").addEventListener("click", function () {
    insideCard(4);
  });
  document.getElementById("6").addEventListener("click", function () {
    insideCard(5);
  });
  document.getElementById("7").addEventListener("click", function () {
    insideCard(6);
  });
  document.getElementById("8").addEventListener("click", function () {
    insideCard(7);
  });
  document.getElementById("9").addEventListener("click", function () {
    insideCard(8);
  });
  document.getElementById("10").addEventListener("click", function () {
    insideCard(9);
  });
}

var preview = document.getElementById("preview");

function imgshift() {
  document.getElementById("photo0").addEventListener("click", function (e) {
    removeClass();
    preview.src = e.target.src;
    document.getElementById("photo0").classList.add("active");
  });
  document.getElementById("photo1").addEventListener("click", function (e) {
    removeClass();
    preview.src = e.target.src;
    document.getElementById("photo1").classList.add("active");
  });
  document.getElementById("photo2").addEventListener("click", function (e) {
    removeClass();
    preview.src = e.target.src;
    document.getElementById("photo2").classList.add("active");
  });
  document.getElementById("photo3").addEventListener("click", function (e) {
    removeClass();
    preview.src = e.target.src;
    document.getElementById("photo3").classList.add("active");
  });
  document.getElementById("photo4").addEventListener("click", function (e) {
    removeClass();
    preview.src = e.target.src;
    document.getElementById("photo4").classList.add("active");
  });
}
function removeClass() {
  document.getElementById("photo0").classList.remove("active");
  document.getElementById("photo1").classList.remove("active");
  document.getElementById("photo2").classList.remove("active");
  document.getElementById("photo3").classList.remove("active");
  document.getElementById("photo4").classList.remove("active");
}
imgshift();
var productId;
var productDetails = [];

insideCard = (index) => {
  home.style.display = "none";
  cardInfo.style.display = "flex";
  preview.src = productList[index].preview;
  document.getElementById("name").innerHTML = productList[index].name;
  document.getElementById("brand").innerHTML = productList[index].brand;
  document.getElementById("price").innerHTML = productList[index].price;
  document.getElementById("description").innerHTML =
    productList[index].description;
  for (var i = 0; i < 5; i++) {
    document.getElementsByClassName("photos")[i].src =
      productList[index].photos[i];
  }
  productId = index;
  productDetails = productList[index];
};

// topbar actions
document.getElementById("logo").onclick = function () {
  showCard();
};
document.getElementById("homeLink").onclick = function () {
  showCard();
};
document.getElementById("clothingLink").onclick = function () {
  showCard();
};
document.getElementById("accessoriesLink").onclick = function () {
  showCard();
};
function showCard() {
  cardInfo.style.display = "none";
  document.getElementById("left").innerHTML = "";
  document.getElementById("cartPage").style.display = "none";
  document.getElementById("orderPlaced").style.display = "none";
  home.style.display = "block";
}
// cart
var cartCount = 0;
var totalPrice = 0;
var cartProducts = [];
var num = 0;

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
document.getElementById("add-to-cart").onclick = function () {
  cartProducts[cartCount] = productDetails;
  if (arr[productDetails.id - 1] == 0) {
    arr[productDetails.id - 1] = 1;
  }
  totalPrice = totalPrice + productDetails.price;
  cartCount++;
  document.getElementById("cartCount").innerHTML = cartCount;
};
document.getElementById("cart").onclick = function () {
  document.getElementById("left").innerHTML = "";
  home.style.display = "none";
  cardInfo.style.display = "none";
  document.getElementById("orderPlaced").style.display = "none";
  document.getElementById("cartPage").style.display = "block";
  for (var i = 0; i < cartProducts.length; i++) {
    if (arr[cartProducts[i].id - 1] == 1) {
      for (var j = i + 1; j < cartProducts.length; j++) {
        if (cartProducts[i].id == cartProducts[j].id) {
          arr[cartProducts[j].id - 1]++;
        }
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      cartDiv(i, arr[i]);
    }
  }
};
cartDiv = (index, count) => {
  arr[index] = 1;
  var cardd = document.createElement("div");
  cardd.className = "inCartDiv";
  var thumbnaill = document.createElement("img");
  thumbnaill.src = productList[index].preview;
  thumbnaill.alt = "img";
  cardd.appendChild(thumbnaill);
  var content = document.createElement("div");
  cardd.appendChild(content);
  var title = document.createElement("h4");
  title.innerHTML = productList[index].name;
  content.appendChild(title);
  var itemRepeat = document.createElement("p");
  var temp = "x" + count;
  itemRepeat.innerHTML = temp;
  content.appendChild(itemRepeat);
  var itemPrice = document.createElement("p");
  itemPrice.innerHTML = "Amount: ";
  var itemPriceSpan = document.createElement("span");
  itemPriceSpan.innerHTML = productList[index].price * count;
  itemPrice.appendChild(itemPriceSpan);
  content.appendChild(itemPrice);
  document.getElementById("left").appendChild(cardd);
  document.getElementById("finalPrice").innerHTML = totalPrice;
  document.getElementById("totalItems").innerHTML = cartCount;
};
document.getElementById("placeOrder").onclick = function () {
  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  cartProducts = [];
  document.getElementById("left").innerHTML = "";
  var temp = document.createElement("p");
  document.getElementById("left").appendChild(temp);
  cartCount = 0;
  document.getElementById("cartCount").innerHTML = cartCount;
  document.getElementById("totalItems").innerHTML = cartCount;
  totalPrice = 0;
  document.getElementById("finalPrice").innerHTML = totalPrice;
  document.getElementById("orderPlaced").style.display = "block";
  document.getElementById("cartPage").style.display = "none";
};
