/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

// navbarActive
// query
let navLinkElements = document.querySelectorAll('nav .navbar-nav .nav-item');

navLinkElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    // link active
    navLinkElements.forEach((element) => element.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});

// work section
// query
let buttonElements = document.querySelectorAll(".custom-button");
let imageElement = document.querySelectorAll(
  ".work .img-container div div img"
);
buttonElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    // button status active
    buttonElements.forEach((element) => element.classList.remove("active"));
    e.target.classList.add("active");
    // image status active
    imageElement.forEach((el) => el.classList.remove("active"));
    let targetData = e.target.getAttribute("data-status");
    imageElement.forEach((el) =>
      el.classList.contains(targetData) ? el.classList.add("active") : ""
    );
  });
});


// function average(array) {
//   let arr = array.reduce(function(acc,ele) {
//     return acc + ele;
//   })
//   console.log(arr);
// }

// average([5,6,4]);


function average(array) {
  let arr = array.reduce(function(acc,ele) {
    return acc + ele;
  })
  return (arr);
}

console.log(average([5,6,4]));