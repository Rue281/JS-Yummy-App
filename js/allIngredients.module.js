import { Ingredient } from "./ingredient.module.js";
import { Ui } from "./ui.module.js";

export class AllIngredients{
    constructor(){
        
        this.ui = new Ui();
        
    }
    async fetchAllIngredients(){
        const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const response = await httpReq.json();
    console.log(response.meals);

    ///to ignore null strDescription
    this.ui.displayAllIngredients(response.meals.slice(0,25));
    this.clickCard();
    }

    clickCard() {
        document.querySelectorAll(".item").forEach(item => {
            item.addEventListener("click", () => {
    
                console.log("heeeey")
                let name = item.dataset.name;
                console.log(name);
                let ingredientInstance = new Ingredient(name);
                ingredientInstance.fetchDataByMainIngredient(name);
            });
        });
    }
}