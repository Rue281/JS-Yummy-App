import { MealDetails } from "./mealDetails.module.js";
import { Ui } from "./ui.module.js";

export class Area{
    constructor(){
        
        this.ui = new Ui();
        
    }

    async fetchDataByArea(area){
  searchRow.innerHTML = "";

  const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const response = await httpReq.json();
    console.log(response.meals);
    this.ui.displayDefaultData(response.meals.slice(0, 20));
    this.clickCard();
}

clickCard() {
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {

            console.log("heeeey")
            let id = item.dataset.id;
            console.log(id);
            let mealDetails = new MealDetails(id);
            mealDetails.fetchMealDetails(id);
        });
    });
}


}