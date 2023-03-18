// let mealsRow = document.getElementById("meals");
// let searchRow = document.getElementById("searchRow");

import { Meals } from "./meals.module.js";

new Meals();
let meals = new Meals();
meals.fetchDataByName();








// $(".nav-btn").click(function(){
//     let leftProperty = $(".side-nav").css("left");
//     if(leftProperty == "0px"){
//         closeNav();
//     }else {
//         openNav();
//     }
// });

// function openNav(){
    
//     $(".side-nav").animate({left: 0},500);
//         // console.log($(".side-nav").css("left"));
//     for (let i = 0; i < 5; i++) {
//       $(".nav-tabs .list-unstyled li").eq(i).animate({top: 0}, (i + 5) * 100)
//     }
// }

// function closeNav(){
//     let navTabsWidth = $(".nav-tabs").outerWidth();
//     $(".side-nav").animate({left: `-${navTabsWidth}px`},500);
//     $(".nav-tabs .list-unstyled li").animate({top: 300}, 500)
// }

// $(document).ready(() => {
//   closeNav();
//   fetchDataByName("");
//   $(".progress-bar").fadeOut(600)
//         $("body").css("overflow", "visible")
  

//   //.then(() => {
//   //     $(".loading-screen").fadeOut(500)
//   //     $("body").css("overflow", "visible")

//   // })
// });


// async function fetchDataByName(value){
//     const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
//     const response = await httpReq.json();
//   /*
//     response.meals ? displayMeals(response.meals) : displayMeals([])
//     $(".inner-loading-screen").fadeOut(300)
//   */
//  //check for null response
//     response.meals ? displayDefaultData(response.meals) : displayDefaultData([]);
//     console.log(response.meals)
// }



// function displayDefaultData(dataArr){
//   closeNav();
//     let temp = "";
//     for(let i=0; i<dataArr.length; i++){
//         temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden " onclick="fetchMealDetails('${dataArr[i].idMeal}')">
//         <div class="item rounded-3" data-id="${dataArr[i].idMeal}">
//           <img src="${dataArr[i].strMealThumb}"  class="w-100" alt="meal-item">
//         </div>
//         <div class="item-overlay position-absolute d-flex align-items-center" >
//         <h3 class="name ps-2">${dataArr[i].strMeal}</h3>
//       </div>
//       </div>`
//     }

    
    


//     mealsRow.innerHTML = temp;
// }

// $("#categories").click(function(){
//     fetchCategories();
// });
// async function fetchCategories(){   
//     searchRow.innerHTML = "";

//     const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
//     const response = await httpReq.json();
//     console.log(response.categories)
//     displayCategories(response.categories)
// }
// function displayCategories(dataArr){
//   closeNav()
//     let temp = "";
//     for(let i=0; i<dataArr.length; i++){
//         temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden p-0 rounded-3">
//         <div class="category" data-name="${dataArr[i].strCategory}">
//           <img src="${dataArr[i].strCategoryThumb}"  class="w-100" alt="category-item">
//         </div>
//         <div class="item-overlay position-absolute text-center" onclick="fetchCategory('${dataArr[i].strCategory}')">
//             <div class="data p-2">
//                 <h3 class="name">${dataArr[i].strCategory}</h3>
//                 <p>${dataArr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
//             </div>
//         </div>
//       </div>`
//     }
//     mealsRow.innerHTML = temp;
// }


// async function fetchCategory(categoryName){
//     const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
//     const response = await httpReq.json();
//     console.log(response.meals)
//     displayCategoryMeals(response.meals)
// }

// function displayCategoryMeals(dataArr){
//   closeNav();
//   mealsRow.innerHTML = "";
//   searchRow.innerHTML = "";

//     let temp = "";
//     for(let i=0; i<dataArr.length; i++){
//         temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden ">
//         <div class="item rounded-3" data-id="${dataArr[i].idMeal}">
//           <img src="${dataArr[i].strMealThumb}"  class="w-100" alt="meal-item">
//         </div>
//         <div class="item-overlay position-absolute d-flex align-items-center" onclick="fetchMealDetails('${dataArr[i].idMeal}')">
//         <h3 class="name ps-2">${dataArr[i].strMeal}</h3>
//       </div>
//       </div>`
//     }
//     mealsRow.innerHTML = temp;
// }

// async function fetchMealDetails(mealId){

        
//     const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
//     const response = await httpReq.json();
//     console.log(response.meals[0]);
//     displayMealDetails(response.meals[0])
// }

// function displayMealDetails(mealObj){
//   closeNav();
//     //to get actual ingredients
//     let mealArr = Object.entries(mealObj);
//     let ingredientKeyWordToSearch = "strIngredient";
//     let ingredientsArr = [];
//     for(let i=0; i<mealArr.length; i++){
//         if(mealArr[i][0].includes(ingredientKeyWordToSearch)){
//             if(mealArr[i][1].length !== 0 || mealArr[i][1] !== null){
//                 ingredientsArr.push(mealArr[i]);
//             }  
//         }
//     }
//     // if(ingredientsArr.length>0){
//     //     // ingredients = ``;
//     //     // for(let i=0; i<ingredientsArr.length; i++){
//     //     //     ingredients = ingredients + `<span>${ingredientsArr[i][1]}</span>`
//     //     // }
//     // }
//     //to get actual measurements
//     // let measurements = ``;
//     let measurementKeyWordToSearch = "strMeasure";
//     let measurementsArr = [];
//     for(let i=0; i<mealArr.length; i++){
//         if(mealArr[i][0].includes(measurementKeyWordToSearch)){
//             if(mealArr[i][1].length !== 0 || mealArr[i][1] !== null){
//                 measurementsArr.push(mealArr[i]);
//             }  
//         }
//     }
//     // if(measurementsArr.length>0){
//     //     // measurements = ``;
//     //     // for(let i=0; i<measurementsArr.length; i++){
//     //     //     measurements = measurements + `<span>${measurementsArr[i][1]}</span>`
//     //     // }
//     // }
//     let recipe = ``;
//     //let recipes = measurementsArr.length>0 && ingredientsArr>0

//     // if(measurementsArr.length>0 && ingredientsArr>0){
      
//     for(let i=0; i<measurementsArr[1].length; i++){
//         for(let j=0; j<ingredientsArr[1].length; j++){
//            recipe+= `<span class=" alert alert-info p-2 mx-2">${measurementsArr[i][1]+ " "+ingredientsArr[j][1]}</span>`
//             console.log(measurementsArr[i][1]+ " "+ingredientsArr[j][1]);
//         }
//     }
//     // }
 
//     //get tags
//     let tags = []
//     mealObj.strTags == null ? tags = []: tags = mealObj.strTags.split(",")
//     let strTags = ''
//     for (let i = 0; i < tags.length; i++) {
//         strTags += `
//         <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
//     }
    


//     let temp = `<div class="row details">
//     <div class="col-md-4 col-sm-12 left">
//     <img src="${mealObj.strMealThumb}" class="w-100" alt="meal">
//     <h3>${mealObj.strMeal}</h3>
//   </div>
//   <div class="col-md-8 col-sm-12 right">
//     <div class="instructions">
//       <h3>Instructions</h3>
//       <p>${mealObj.strInstructions}</p>
//     </div>
//     <div class="area">
//       <h3>Area:&nbsp${mealObj.strArea}</h3>
//       <h3>Category:${mealObj.strCategory}</h3>
//     </div>
//     <div class="recipes">
//       <h3 class="my-3">Recipes:</h3>
//       ${recipe}
//     </div>
//     <div class="tags my-3">
//       <h3>Tags</h3>
//         <ul class="list-unstyled d-flex g-3 flex-wrap">
//           ${strTags}
//         </ul>
//     </div>
//     <div class="buttons">
//       <a target="_blank" href="${mealObj.strSource}" class="source btn btn-success">Source</a>
//       <a target="_blank" href="${mealObj.strYoutube}" class="youtube btn btn-danger">Youtube</a>
//     </div>
//   </div>
//   </div>`

//   mealsRow.innerHTML = temp;
// }

// ///display search options
// $("#search").click(function(){
//   closeNav()
//     let temp = `<div class="row search">
//     <div class="col-md-6 col-sm-12">
//       <input type="text" class="form-control p-2 rounded-2 my-3 bg-transparent border-white" id="inputSearchByName" placeholder="Search By Name" onkeyup="fetchDataByName(value)">
//     </div>
//     <div class="col-md-6 col-sm-12">
//       <input type="text" class="form-control p-2 rounded-2 my-3 bg-transparent border-white" id="inputSearchByLetter" maxlength = "1" placeholder="Search By Letter" onkeyup="searchByLetter(value)">
//     </div>
//   </div>`
  
//   searchRow.innerHTML = temp;
//   mealsRow.innerHTML = "";
// });

// //search by letter
// async function searchByLetter(letter){
//   const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
//     const response = await httpReq.json();

//     //check for null response
//     response.meals ? displayDefaultData(response.meals) : displayDefaultData([]);
//     console.log("response " + response.meals)

// }

// //fetch all areas
// $("#area").click(async function(){
//   searchRow.innerHTML = "";

//   const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
//     const response = await httpReq.json();
//     console.log(response.meals);
//     displayAllAreas(response.meals);
// });

// function displayAllAreas(dataArr){
//   closeNav();
//   let temp = ``;
//   for(let i=0; i<dataArr.length; i++){
//     temp+=`
//     <div class="col-md-3 col-sm-12 text-center " onclick="fetchDataByArea('${dataArr[i].strArea}')">
//         <i class="fa-solid fa-house-laptop fa-3x"></i>
//         <h3>${dataArr[i].strArea}</h3>
//     </div>
//   `;
//   }
//   mealsRow.innerHTML = `<div class="row areas g-3">${temp}</div>`;
// }


// async function fetchDataByArea(area){
//   searchRow.innerHTML = "";

//   const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
//     const response = await httpReq.json();
//     console.log(response.meals);
//     displayDefaultData(response.meals.slice(0, 20));
// }

// //get all ingredients
// $("#ingredients").click( async function(){
//   searchRow.innerHTML = "";
//   mealsRow.innerHTML = "";

//   const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
//     const response = await httpReq.json();
//     console.log(response.meals);

//     ///to ignore null strDescription
//     displayAllIngredients(response.meals.slice(0,25));
// });

// function displayAllIngredients(dataArr){
//   closeNav();
//   let temp = ``;
//   for(let i=0; i<dataArr.length; i++){
//     temp+=`
//     <div class="col-md-3 col-sm-12 text-center" onclick="fetchDataByMainIngredient('${dataArr[i].strIngredient}')">
//     <i class="fa-solid fa-drumstick-bite fa-3x"></i>
//         <h3>${dataArr[i].strIngredient}</h3>
//         <p>${dataArr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
//     </div>
//   `;
//   }
//   mealsRow.innerHTML = `<div class="row ingredients g-3">${temp}</div>`;
// }

// async function fetchDataByMainIngredient(ingredient){
//   searchRow.innerHTML = "";

//   const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//     const response = await httpReq.json();
//     console.log(response.meals);
//     displayDefaultData(response.meals.slice(0, 20));
// }


// //display contact form
//   function displayContactForm(){
//     closeNav();
//   searchRow.innerHTML = "";
//   let temp = `
//   <form id="form">
//   <div class="row">
//   <div class="col-md-6 col-sm-12">
//     <div class="mb-3">
//       <input type="text" class="form-control" id="exampleInputName" placeholder="Enter your name" onkeyup="validateInputs()">
//     </div>

//     <div class="mb-3 alert alert-danger alert-name">
//       <p>Please enter a valid name</p>
//     </div>
//   </div>
//   <div class="col-md-6 col-sm-12">
//     <div class="mb-3">
//       <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter your email" onkeyup="validateInputs()">
//     </div>

//     <div class="mb-3 alert alert-danger alert-email">
//       <p>Please enter a valid email</p>
//     </div>
//   </div>
// </div>
  
//             <div class="mb-3 incorrect-input text-danger text-center">
//               <p>All inputs are required</p>
//             </div>
  
//             <button type="button" class="btn-outline-info submitBtn btn w-100 disabled">submit</button>
//           </form>`

//   mealsRow.innerHTML = temp;

//   submitBtn = document.querySelector(".submitBtn");
// //   incorrectInput = document.querySelector(".incorrect-input");
// //   nameInput = document.querySelector("#exampleInputName");
// //   nameAlert = document.querySelector(".alert-name");
// //   emailInput = document.querySelector("#exampleInputEmail");
// //   emailAlert = document.querySelector(".alert-email");
// //   form = document.getElementById('form');

// //   submitBtn.addEventListener("click",function(){
// //     if(nameInput.value == "" ||emailInput.value == ""){
// //     incorrectInput.style.display = "block";
// //     }
// //     else{   
// //         console.log("hi")
// //     }
// // });


// // nameInput.addEventListener("blur",function(){
// //   if (validateNameInput(nameInput.value) ==false){
// //       nameAlert.style.display = "block";
// //       nameInput.classList.add("is-invalid");
// //       nameInput.classList.remove("is-valid");
// //       console.log("name not valid")
// //   }
// //   else{
// //       nameAlert.style.display = "none";
// //       nameInput.classList.add("is-valid");
// //       nameInput.classList.remove("is-invalid");
// //       console.log("name is valid")
// //   }
// // });

// // emailInput.addEventListener("blur",function(){
// //   if (validateEmailInput(emailInput.value) ==false){
// //       emailAlert.style.display = "block";
// //       emailInput.classList.add("is-invalid");
// //       emailInput.classList.remove("is-valid");
// //   }
// //   else{
// //       emailAlert.style.display = "none";
// //       emailInput.classList.add("is-valid");
// //       emailInput.classList.remove("is-invalid");
// //   }
// // });

// // form.addEventListener("change",() => {
// //       submitBtn.disabled = !form.checkValidity()
// //   });

// document.getElementById("exampleInputName").addEventListener("focus", () => {
//   nameInputTouched = true
// })

// document.getElementById("exampleInputEmail").addEventListener("focus", () => {
//   emailInputTouched = true
// })

// }

// let nameInputTouched = false;
// let emailInputTouched = false;


// function validateInputs(){
//   if (nameInputTouched) {
//     if (!validateNameInput()) {
//       document.querySelector(".alert-name").style.display = "none";
//       document.getElementById("exampleInputName").classList.add("is-valid");
//       document.getElementById("exampleInputName").classList.remove("is-invalid")

//     } else {
//       document.querySelector(".alert-name").style.display = "block";
//       document.getElementById("exampleInputName").classList.add("is-invalid");
//       document.getElementById("exampleInputName").classList.remove("is-valid");

//     }
// }

// if (emailInputTouched) {
//   if (!validateEmailInput()) {
//     document.querySelector(".alert-email").style.display = "none";
//     document.getElementById("exampleInputEmail").classList.add("is-valid");
//     document.getElementById("exampleInputEmail").classList.remove("is-invalid")

//   } else {
//     document.querySelector(".alert-email").style.display = "block";
//     document.getElementById("exampleInputEmail").classList.add("is-invalid");
//     document.getElementById("exampleInputEmail").classList.remove("is-valid");

//   }
// }



// if (validateNameInput() &&
// validateEmailInput()
//         ) {
//         submitBtn.removeAttribute("disabled")
//     } else {
//         submitBtn.setAttribute("disabled", true)
//     }

// }


// function validateNameInput(){
//   let regex = /^[a-z]{3,10}$/;
//   if(regex.test(document.getElementById("exampleInputName")) == false ){
//       return false;
//   }
// }

// function validateEmailInput(){
//   let regex = /^[a-zA-Z0-9_]{3,15}@[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}$/;
//   if(regex.test(document.getElementById("exampleInputEmail")) == false){
//       return false;
//   }
// }







