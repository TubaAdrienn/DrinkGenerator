class UI{
    constructor(){
    }

    giveRandom(){
        let random=Math.floor(Math.random()*100);
        return random;
    }

    displayDrink(number, ingredients){
        const ingDiv=document.querySelector('.ing-container');
        ingDiv.innerHTML="";
        const ul=document.createElement("ul");
        const h2=document.createElement("h2");
        h2.innerText="Your ingredients: "
        let random;
        let output="";
        for(number; number>0; number--){
            random=this.giveRandom();
            output+=`
            <li>${ingredients[random].strIngredient1}</li>
            `;
        }

        ingDiv.appendChild(h2);
        ul.innerHTML=output;
        ingDiv.appendChild(ul);

    }

    //Show alert if not integer
    showAlert(message){
        const ingDiv=document.querySelector(".ing-container");
        ingDiv.innerHTML=`<div class="alert alert-danger">${message}</div>`;

        setTimeout(function(){
            document.querySelector(".ing-container").innerHTML="";
        }, 2000);
    }
}