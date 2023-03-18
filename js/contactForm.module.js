import { Ui } from "./ui.module.js";

export class ContactForm{
    constructor(){ 
        this.ui = new Ui(); 
    }
    createForm(){
        // let form = document.createElement("div");
        // form.setAttribute("class","container w-75 text-center form");
        // form.setAttribute("height","400px");
        // form.setAttribute("width","400px");
        // form.setAttribute("backgroundColor","red");
        this.ui.displayContactForm(square);

    }
    
    
}