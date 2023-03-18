import { Ui } from "./ui.module.js";
import { MealDetails } from "./mealDetails.module.js";
export class Meals{
    constructor(){
        this.fetchDataByName("");
        this.ui = new Ui();
    }

    async fetchDataByName(value){
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        const response = await httpReq.json();
      /*
        response.meals ? displayMeals(response.meals) : displayMeals([])
        $(".inner-loading-screen").fadeOut(300)
      */
     //check for null response
        response.meals ? this.ui.displayDefaultData(response.meals) : this.ui.displayDefaultData([]);
        console.log(response.meals);
        this.clickCard();
    }

    clickCard() {
        document.querySelectorAll(".item").forEach(meal => {
            meal.addEventListener("click", () => {

                console.log("heeeey")
                let id = meal.dataset.id;
                console.log(id);
                let mealDetails = new MealDetails(id);
                mealDetails.fetchMealDetails(id);
            });
        });
    }
}