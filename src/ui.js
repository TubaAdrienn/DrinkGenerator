class UI{
    constructor(){
    }

    giveRandom(){
        let random=Math.floor(Math.random()*100);
        return random;
    }

    displayDrink(number, ingredients){
        const list=document.querySelector(".ing-list");
        const label=document.querySelector(".ing-label");
        let random;
        let output="";
        for(number; number>0; number--){
            random=this.giveRandom();
            output+=`
            <li>${ingredients[random].strIngredient1}</li>
            `;
        }

        list.innerHTML=output;
        label.style.display="block";

    }

    //Show alert if not integer
    showAlert(){

    }




}