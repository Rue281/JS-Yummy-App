import { Ui } from "./ui.module.js";
import { MealDetails } from "./mealDetails.module.js";
export class Category{
    constructor(){
        
        this.ui = new Ui();
        
    }
    async fetchCategory(categoryName){
    const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const response = await httpReq.json();
    console.log(response.meals)
    this.ui.displayCategoryMeals(response.meals);
    this.clickCard();
}
clickCard() {
    document.querySelectorAll(".item").forEach(meal => {
        meal.addEventListener("click", () => {

            console.log("heeeey")
            let mealID = meal.dataset.id;
            console.log(mealID);
            let mealDetails = new MealDetails(mealID);
            mealDetails.fetchMealDetails(mealID);
        });
    });
}

}