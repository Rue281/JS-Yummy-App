import { Area } from "./area.module.js";
import { Ui } from "./ui.module.js";

export class AllAreas{
    constructor(){
        this.ui = new Ui();
    }
async fetchAreas(){
  searchRow.innerHTML = "";

  const httpReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const response = await httpReq.json();
    console.log(response.meals);
    this.ui.displayAllAreas(response.meals);
    this.clickCard();
}

clickCard() {
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {

            let name = item.dataset.name;
            console.log(name);
            let area = new Area(name);
            area.fetchDataByArea(name);
        });
    });
}
}