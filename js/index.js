let first_img = document.getElementById("img_food");
let second_img = document.getElementById("img_drinks");
let third_img = document.getElementById("img_takeaway");
let first_but  = document.getElementById("but_food");
let second_but = document.getElementById("but_drinks");
let third_but = document.getElementById("but_takeaway");

function change(){
  if(first_img.style.display == "none")
    first_img.style.display = "block";
  else
    first_img.style.display = "block";

  second_img.style.display = "none";
  third_img.style.display = "none";
  if(first_but.classList.contains("food_but"))
    first_but.classList.add("food_but");
  else
    first_but.classList.add("food_but");
  second_but.classList.remove("drink_but");
  third_but.classList.remove("take_but");
}

function change2(){
  if(second_img.style.display == "none")
    second_img.style.display = "block";
  else
    second_img.style.display = "block";

  first_img.style.display = "none";
  third_img.style.display = "none";
  if(second_but.classList.contains("drink_but"))
    second_but.classList.add("drink_but");
  else
    second_but.classList.add("drink_but");
  first_but.classList.remove("food_but");
  third_but.classList.remove("take_but");
}

function change3(){
  if(third_img.style.display == "none")
    third_img.style.display = "block";
  else
    third_img.style.display = "block";

  first_img.style.display = "none";
  second_img.style.display = "none";
  if(third_but.classList.contains("take_but"))
    third_but.classList.add("take_but");
  else
    third_but.classList.add("take_but");
  second_but.classList.remove("drink_but");
  first_but.classList.remove("food_but");
}
