//task 1

let list = document.querySelector('.list')

let first = list.children[0].innerText;
let second = list.children[1].innerText;
let third = list.children[2].innerText;
let fourth = list.children[3].innerText;
let fifth = list.children[4].innerText;

alert(`${first}, ${fifth}, ${third}, ${fourth}, ${third}`)

//task 2

let header = document.querySelector("h1");

header.style.fontSize = "50px";
header.style.backgroundColor = "green";

let firstP = document.querySelector("#myDiv>p"); 

firstP.style.fontWeight = "800";

let secondP = document.querySelector("#myDiv>p:nth-child(2)")

secondP.style.color = "red";

let thirdP = document.querySelector("#myDiv>p:nth-child(3)")

thirdP.style.textDecoration = "underline";

let fourth = document.querySelector("#myDiv>p:nth-child(4)")

fourth.style.fontStyle = "Italic"

let myList = document.getElementById("myList"); 

myList.style.display = "flex";
myList.style.listStyleType = "none";

let span = document.querySelector("span");

span.style.display = "none";

//task 3

let body = document.createElement("body");
let main = document.createElement("main");
main.className = "mainClass check item";
body.appendChild(main);

let myDiv = document.createElement("div");
myDiv.className = "myDiv";
body.appendChild(myDiv);

let paragraph = document.createElement("p");
paragraph.innerHTML = "First paragraph";
myDiv.appendChild(paragraph);

// //task 4

let button = document.querySelector(".btn");
let outBox = document.querySelector(".out");

button.addEventListener("click", function(event) {
  event.preventDefault();

  let arrList = document.querySelectorAll("input[data-form]");
  let newArr = [];

  arrList.forEach(function(input) { 
    let value = input.value;
    newArr.push(value);
  });

  outBox.textContent = newArr.join(", ");
});

//task 5

let circles = document.querySelectorAll(".circle");
console.log(circles);

const items = document.querySelectorAll(".items");
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const circle = item.getElementsByClassName("circle")[0];
  const dataAnim = circle.getAttribute("data-anim");
  console.log(dataAnim);
  
  items[i].classList.add(dataAnim);
}

//task 6

colors.forEach(function(color, index) {
    color.addEventListener('click', function() {
      let price = color.getAttribute('data-price');
      outprice.textContent = price;
      let photoSrc = photos[index].getAttribute('src');
      photos.forEach(function(photo) {
        photo.classList.remove('show');
      });
      photos[index].classList.add('show');
    });
  });
  

  sizes.forEach(function(size) {
    size.addEventListener('click', function() {
      let price = size.getAttribute('data-price');
      outprice.textContent = price;
    });
  });

  deliveryTypes.forEach(function(deliveryType) {
    deliveryType.addEventListener('click', function() {
      let deliveryPrice = deliveryType.getAttribute('data-price');
      let currentPrice = outprice.textContent;
      let totalPrice = parseFloat(currentPrice) + parseFloat(deliveryPrice);
      outprice.textContent = totalPrice.toFixed(2);
    });
  });