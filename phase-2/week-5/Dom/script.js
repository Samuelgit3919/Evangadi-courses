// dom => document object model

// html,css  bridge  chrome

// console.log(document);

// const evangadiStudent = {
//     name: "Evangadi",
//     title: "Evangadi Student Records", //"DOM"
//     age: 25,
//     grade: 9,
//     subject: "Mathematics",
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: 12345
//     }
// }
/*
const html(document) = {
  head: {
  title: "Evangadi Student Records","DOM"
  link: "css links",
  metadata: {
  sdf: "sd"
  }
  },

body:{
   div:{
   h1: "dom",
   p: "kskajdlskhlhd"
   }
  }
}
 
 
 
*/

//    .push(), .pop(),  .unshift()


/* getElementsByClassName(), => document element class, multi
   getElementsByTagName(), => document element Tag , multi
   getElementById(), => document Element Id, single selector
   querySelector(), => document one Element from li , single selector
   querySelectorAll() => document all Element li, multi
   */

// const byId = document.getElementById("heading-text")
// byId.style.backgroundColor = "yellow"
// byId.style.padding = "15px"
// console.log(byId);

// const byTag = document.getElementsByTagName("h1")
// const byClass = document.getElementsByClassName("")
// console.log(byTag);

// for (let i = 0; i < byTag.length; i++) {
//     byTag[i].style.backgroundColor = "yellow"
//     byTag[i].style.padding = "15px"
//     byTag[i].style.color="green"

// }

// const byQuerySelector = document.querySelector(".first-class")
// const byQueryH1 = document.querySelector("#heading-text")
// console.log(byQueryH1);


// byQuerySelector.style.backgroundColor = "yellow"
// byQueryH1.style.color="green"

// const byQuerySelector = document.querySelector("li")
// // console.log(byQuerySelector.style.color = "red");


// let byQuerySelectorAll = document.querySelectorAll(".lists")
// console.log(byQuerySelectorAll[2].style.color="red");
// // console.log(byQuerySelectorAll.style.backgroundColor="yellow");

// console.log(byQuerySelectorAll);

// // byQuerySelector.style.color = "yellow"

// for (let i = 0; i < byQuerySelectorAll.length; i++) {
//     byQuerySelectorAll[i].style.backgroundColor = "green"
//     byQuerySelectorAll[i].style.padding = "15px"
//     byQuerySelectorAll[i].style.fontSize="24px"
// }


// byQuerySelector.addEventListener("click", function () {
//     alert("You clicked me!")
//     byQuerySelector.style.color = "red"
//     // byQuerySelectorAll[1].style.color = "pink"
//     // byQuerySelectorAll[2].style.color = "purple"

// })



         // .firstElementChild()

// const firstDiv = document.querySelectorAll("ul")//parent
// console.log(firstDiv);

// firstDiv.forEach(element => {
//   const firstChild = element.firstElementChild;
//   firstChild.style.backgroundColor = "yellow"
//   // console.log(firstChild);
//  // element.removeChild(firstChild);
// })








        // .lastElementChild()
// const ulList = document.getElementById('first-ul')
// console.log(ulList);


// const lastChild = ulList.lastElementChild;
// console.log(lastChild);
// lastChild.style.backgroundColor = "yellow"
// lastChild.style.padding = "10px"


// const firstUl = document.querySelectorAll('ul')
// console.log(firstUl);

// firstUl.forEach(element => {
//   const firstChild = element.lastElementChild;
//   firstChild.style.backgroundColor = "teal"
//   firstChild.style.padding = "10px"
// })









            // .nextElementSibling()
// const nextElement = document.getElementById("first-li")
// console.log(nextElement);

// const element = nextElement.nextElementSibling;
// console.log(element);
// element.style.backgroundColor = 'yellow'
// element.style.padding="10px"



// .PreviousElementSibling()
// const li_Element = document.getElementById('second-ul')

// console.log(document.getElementById('first-ul'));


// console.log(li_Element);
// const element = li_Element.previousElementSibling;

// console.log(element);



// .parentElement()
// const li_Element = document.getElementById("list-1")
// console.log(li_Element);
// console.log(li_Element.parentElement);




   
// // .children()

// const childs = document.querySelectorAll("first-ul")
// console.log(childs.item(0));




