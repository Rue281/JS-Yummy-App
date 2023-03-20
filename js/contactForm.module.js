import { Ui } from "./ui.module.js";

export class ContactForm{
    constructor(){ 
        this.ui = new Ui(); 
    }
    createForm(){
        // let square = document.createElement("input");
        // // form.setAttribute("class","container w-75 text-center form");
        // square.setAttribute("height","400px");
        // square.setAttribute("width","400px");
        // square.setAttribute("backgroundColor","red");
        // //square.setAttribute("border")

        let form = document.createElement("form");

        let container = document.createElement("div");
        container.setAttribute("class","container w-75 text-center");
        form.appendChild(container);

        let row = document.createElement("div");
        row.setAttribute("class","row g-4");
        container.appendChild(row);

        /*Name col*/
        let nameColumn = document.createElement("div");
        nameColumn.setAttribute("class","col-md-6");
        row.appendChild(nameColumn);
        
        let nameInputDiv = document.createElement("input");
        nameInputDiv.setAttribute("id","nameInput");
        nameInputDiv.setAttribute("type","text");
        nameInputDiv.setAttribute("class","form-control");
        nameInputDiv.setAttribute("placeholder","Enter Your Name");
        nameColumn.appendChild(nameInputDiv);

        let nameAlert = document.createElement("div");
        nameAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        nameAlert.innerHTML = "Special characters and numbers not allowed";
        nameColumn.appendChild(nameAlert);


        /*Email col*/
        let emailColumn = document.createElement("div");
        emailColumn.setAttribute("class","col-md-6");
        row.appendChild(emailColumn);
        
        let emailInputDiv = document.createElement("input");
        emailInputDiv.setAttribute("id","emailInput");
        emailInputDiv.setAttribute("type","email");
        emailInputDiv.setAttribute("class","form-control");
        emailInputDiv.setAttribute("placeholder","Enter Your Email");
        emailColumn.appendChild(emailInputDiv);

        let emailAlert = document.createElement("div");
        emailAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        emailAlert.innerHTML = "Email not valid *example@yyy.zzz";
        emailColumn.appendChild(emailAlert);

        /*Phone col*/
        let phoneColumn = document.createElement("div");
        phoneColumn.setAttribute("class","col-md-6");
        row.appendChild(phoneColumn);
        
        let phoneInputDiv = document.createElement("input");
        phoneInputDiv.setAttribute("id","phoneInput");
        phoneInputDiv.setAttribute("type","number");
        phoneInputDiv.setAttribute("class","form-control");
        phoneInputDiv.setAttribute("placeholder","Enter valid phone number");
        phoneColumn.appendChild(phoneInputDiv);

        let phoneAlert = document.createElement("div");
        phoneAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        phoneAlert.innerHTML = "Enter valid phone number";
        phoneColumn.appendChild(phoneAlert);

        /*Age col*/
        let ageColumn = document.createElement("div");
        ageColumn.setAttribute("class","col-md-6");
        row.appendChild(ageColumn);
        
        let ageInputDiv = document.createElement("input");
        ageInputDiv.setAttribute("id","ageInput");
        ageInputDiv.setAttribute("type","number");
        ageInputDiv.setAttribute("class","form-control");
        ageInputDiv.setAttribute("placeholder","Enter your age");
        ageColumn.appendChild(ageInputDiv);

        let ageAlert = document.createElement("div");
        ageAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        ageAlert.innerHTML = "Enter valid age";
        ageColumn.appendChild(ageAlert);

        /*password col*/
        let passwordColumn = document.createElement("div");
        passwordColumn.setAttribute("class","col-md-6");
        row.appendChild(passwordColumn);
        
        let passwordInputDiv = document.createElement("input");
        passwordInputDiv.setAttribute("id","passwordInput");
        passwordInputDiv.setAttribute("type","text");
        passwordInputDiv.setAttribute("class","form-control");
        passwordInputDiv.setAttribute("placeholder","Enter your password");
        passwordColumn.appendChild(passwordInputDiv);

        let passwordAlert = document.createElement("div");
        passwordAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        passwordAlert.innerHTML = "Enter a valid password contains:</br>from 1 to 7 small or capital letter(s)</br>numbers and special characters are optional, one is used if needed";
        passwordColumn.appendChild(passwordAlert);

        /*repassword col*/
        let repasswordColumn = document.createElement("div");
        repasswordColumn.setAttribute("class","col-md-6");
        row.appendChild(repasswordColumn);
        
        let repasswordInputDiv = document.createElement("input");
        repasswordInputDiv.setAttribute("id","repasswordInput");
        repasswordInputDiv.setAttribute("type","text");
        repasswordInputDiv.setAttribute("class","form-control");
        repasswordInputDiv.setAttribute("placeholder","Enter your password again");
        repasswordColumn.appendChild(repasswordInputDiv);

        let repasswordAlert = document.createElement("div");
        repasswordAlert.setAttribute("class","my-3 w-100 alert alert-danger");
        repasswordAlert.innerHTML = "Password is not matched";
        repasswordColumn.appendChild(repasswordAlert);

        /*submit button*/

        let submitBtn = document.createElement("button");
        submitBtn.setAttribute("class","btn btn-outline-danger px-2 mt-3");
        submitBtn.setAttribute("id","submitBtn");
        submitBtn.setAttribute("disabled","true");
        submitBtn.innerHTML="Submit";
        container.appendChild(submitBtn);








        this.ui.displayContactForm(form);

    }
    
    
}