import { Ui } from "./ui.module.js";

export class MealDetails{
    constructor(){
        this.ui = new Ui();
    }

    async fetchMealDetails(mealId){

        
            const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const response = await httpReq.json();
            console.log(response.meals[0]);
            this.ui.displayMealDetails(response.meals[0])
        }
        
        
}