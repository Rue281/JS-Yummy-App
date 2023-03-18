import { MealDetails } from "./mealDetails.module.js";
import { Ui } from "./ui.module.js";

export class Ingredient{
    constructor(){
        this.ui = new Ui(); 
    }
    async fetchDataByMainIngredient(ingredient){
        searchRow.innerHTML = "";
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const response = await httpReq.json();
        console.log(response.meals);
        this.ui.displayDefaultData(response.meals.slice(0, 20));
        this.clickCard();
}

clickCard() {
    document.querySelectorAll(".item").forEach(i => {
        i.addEventListener("click", () => {

            console.log("heeeey");
            let ingredientID = i.dataset.id;
            console.log(ingredientID);
            let mealDetails = new MealDetails(ingredientID);
            mealDetails.fetchMealDetails(ingredientID);
            
        });
    });
}
}