import { AllAreas } from "./allAreas.module.js";
import { AllIngredients } from "./allIngredients.module.js";
import { Categories } from "./categories.module.js";
import { ContactForm } from "./contactForm.module.js";
import { SideNavBar } from "./sideNavBar.module.js";

export class Ui{
    constructor(){
        $(".progress-bar").fadeOut(600)
         $("body").css("overflow", "visible");

        document.querySelector("#categories").addEventListener("click",function(){
            let categories = new Categories();
            categories.fetchCategories();
        });

        document.querySelector("#area").addEventListener("click",function(){
            let areas = new AllAreas();
            areas.fetchAreas();
        });

        document.querySelector("#ingredients").addEventListener("click",function(){
            let allIngredients = new AllIngredients();
            allIngredients.fetchAllIngredients();
        });

        document.querySelector("#contact").addEventListener("click",function(e){
            let form = new ContactForm();
            form.createForm();
            //console.log(e.target)
        });

        document.querySelector(".nav-btn").addEventListener("click",function(){
            let sideNav = new SideNavBar();
            let leftProperty = $(".side-nav").css("left");
            if(leftProperty == "0px"){
                sideNav.closeNav();
            }else {
                sideNav.openNav();
            }
        });

        // document.querySelector("#search").addEventListener("click",function(e){
        //     sideNav.closeNav();
        //     let search = new Search();
        // });


    }

    mealsRow = document.getElementById("meals");
    searchRow = document.getElementById("searchRow");


    displayDefaultData(dataArr){
        //closeNav();
          let temp = "";
          for(let i=0; i<dataArr.length; i++){
              temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden item rounded-3" data-id="${dataArr[i].idMeal}">
              <div class="">
                <img src="${dataArr[i].strMealThumb}"  class="w-100" alt="meal-item">
              </div>
              <div class="item-overlay position-absolute d-flex align-items-center" >
              <h3 class="name ps-2">${dataArr[i].strMeal}</h3>
            </div>
            </div>`
          }
          this.mealsRow.innerHTML = temp;
      }

    displayMealDetails(mealObj){
        //closeNav();

          //to get actual ingredients
          let mealArr = Object.entries(mealObj);
          let ingredientKeyWordToSearch = "strIngredient";
          let ingredientsArr = [];
          for(let i=0; i<mealArr.length; i++){
              if(mealArr[i][0].includes(ingredientKeyWordToSearch)){
                  if(mealArr[i][1].length !== 0 || mealArr[i][1] !== null){
                      ingredientsArr.push(mealArr[i]);
                  }  
              }
          }
          // if(ingredientsArr.length>0){
          //     // ingredients = ``;
          //     // for(let i=0; i<ingredientsArr.length; i++){
          //     //     ingredients = ingredients + `<span>${ingredientsArr[i][1]}</span>`
          //     // }
          // }
          //to get actual measurements
          // let measurements = ``;
          let measurementKeyWordToSearch = "strMeasure";
          let measurementsArr = [];
          for(let i=0; i<mealArr.length; i++){
              if(mealArr[i][0].includes(measurementKeyWordToSearch)){
                  if(mealArr[i][1].length !== 0 || mealArr[i][1] !== null){
                      measurementsArr.push(mealArr[i]);
                  }  
              }
          }
          // if(measurementsArr.length>0){
          //     // measurements = ``;
          //     // for(let i=0; i<measurementsArr.length; i++){
          //     //     measurements = measurements + `<span>${measurementsArr[i][1]}</span>`
          //     // }
          // }
          let recipe = ``;
          //let recipes = measurementsArr.length>0 && ingredientsArr>0
      
          // if(measurementsArr.length>0 && ingredientsArr>0){
            
          for(let i=0; i<measurementsArr[1].length; i++){
              for(let j=0; j<ingredientsArr[1].length; j++){
                 recipe+= `<span class=" alert alert-info p-2 mx-2">${measurementsArr[i][1]+ " "+ingredientsArr[j][1]}</span>`
                  console.log(measurementsArr[i][1]+ " "+ingredientsArr[j][1]);
              }
          }
          // }
       
          //get tags
          let tags = []
          mealObj.strTags == null ? tags = []: tags = mealObj.strTags.split(",")
          let strTags = ''
          for (let i = 0; i < tags.length; i++) {
              strTags += `
              <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
          }
          
      
      
          let temp = `<div class="row details">
          <div class="col-md-4 col-sm-12 left">
          <img src="${mealObj.strMealThumb}" class="w-100" alt="meal">
          <h3>${mealObj.strMeal}</h3>
        </div>
        <div class="col-md-8 col-sm-12 right">
          <div class="instructions">
            <h3>Instructions</h3>
            <p>${mealObj.strInstructions}</p>
          </div>
          <div class="area">
            <h3>Area:&nbsp${mealObj.strArea}</h3>
            <h3>Category:${mealObj.strCategory}</h3>
          </div>
          <div class="recipes">
            <h3 class="my-3">Recipes:</h3>
            ${recipe}
          </div>
          <div class="tags my-3">
            <h3>Tags</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${strTags}
              </ul>
          </div>
          <div class="buttons">
            <a target="_blank" href="${mealObj.strSource}" class="source btn btn-success">Source</a>
            <a target="_blank" href="${mealObj.strYoutube}" class="youtube btn btn-danger">Youtube</a>
          </div>
        </div>
        </div>`
      
        this.mealsRow.innerHTML = temp;
      }

    displayCategories(dataArr){
    //closeNav()
    let temp = "";
    for(let i=0; i<dataArr.length; i++){
        temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden p-0 rounded-3 category" data-name="${dataArr[i].strCategory}">
        <div class="" >
          <img src="${dataArr[i].strCategoryThumb}"  class="w-100" alt="category-item">
        </div>
        <div class="item-overlay position-absolute text-center" >
            <div class="data p-2">
                <h3 class="name">${dataArr[i].strCategory}</h3>
                <p>${dataArr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
            </div>
        </div>
      </div>`
    }
    this.mealsRow.innerHTML = temp;
        }
            
        displayCategoryMeals(dataArr){
        //closeNav();
        this.mealsRow.innerHTML = "";
        searchRow.innerHTML = "";

            let temp = "";
            for(let i=0; i<dataArr.length; i++){
                temp = temp + `<div class="col-md-3 col-sm-12 position-relative overflow-hidden item" data-id="${dataArr[i].idMeal}">
                <div class=" rounded-3" >
                <img src="${dataArr[i].strMealThumb}"  class="w-100" alt="meal-item">
                </div>
                <div class="item-overlay position-absolute d-flex align-items-center" >
                <h3 class="name ps-2">${dataArr[i].strMeal}</h3>
            </div>
            </div>`
            }
            this.mealsRow.innerHTML = temp;
        }

        displayAllAreas(dataArr){
        //closeNav();
        let temp = ``;
        for(let i=0; i<dataArr.length; i++){
            temp+=`
            <div class="col-md-3 col-sm-12 text-center item"          data-name="${dataArr[i].strArea}">
                <i class="fa-solid fa-house-laptop fa-3x"></i>
                <h3>${dataArr[i].strArea}</h3>
            </div>
        `;
        }
        this.mealsRow.innerHTML = `<div class="row areas g-3">${temp}</div>`;
        }

        displayAllIngredients(dataArr){
            //   closeNav();
            let temp = ``;
            for(let i=0; i<dataArr.length; i++){
                temp+=`
                <div class="col-md-3 col-sm-12 text-center item" data-name="${dataArr[i].strIngredient}">
                <i class="fa-solid fa-drumstick-bite fa-3x"></i>
                    <h3>${dataArr[i].strIngredient}</h3>
                    <p>${dataArr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            `;
            }
            this.mealsRow.innerHTML = `<div class="row ingredients g-3">${temp}</div>`;
            }

        displayContactForm(square){
            this.mealsRow.innerHTML = "";
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
                //this.form = new ContactForm();
                let temp = square
                
                  this.mealsRow.appendChild(temp);
            }

        displaySearchForm(){
            let temp = `<div class="row search">
            <!--->
            <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control p-2 rounded-2 my-3 bg-transparent border-white" id="inputSearchByName" placeholder="Search By Name" onkeyup="fetchDataByName(value)">
            </div>
            <!--->
            <div class="col-md-6 col-sm-12">
            <input type="text" class="form-control p-2 rounded-2 my-3 bg-transparent border-white" id="inputSearchByLetter" maxlength = "1" placeholder="Search By Letter" onkeyup="searchByLetter(value)">
            </div>
        </div>`
  
  searchRow.innerHTML = temp;
  this.mealsRow.innerHTML = "";
        }

}