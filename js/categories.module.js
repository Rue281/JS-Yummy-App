import { Category } from "./category.module.js";
import { Ui } from "./ui.module.js";
export class Categories{
    constructor(){
        
        this.ui = new Ui();
        
    }
    // sayHi(){
    //     document.querySelector("#categories").addEventListener("click",function(){
    //         console.log("im in categories");
    //     });
    // }
    
 async fetchCategories(){   
    searchRow.innerHTML = "";

    const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const response = await httpReq.json();
    console.log(response.categories)
    this.ui.displayCategories(response.categories);
    this.clickCard();
}

clickCard() {
    document.querySelectorAll(".category").forEach(item => {
        item.addEventListener("click", () => {

            console.log("heeeey")
            let name = item.dataset.name;
            console.log(name);
            let category = new Category(name);
            category.fetchCategory(name);
        });
    });
}



}