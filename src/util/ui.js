class UI{

    constructor(){
    }


    //Gives a random number
    giveRandom(){
        let random=Math.floor(Math.random()*100);
        return random;
    }


    //Display drink ingredients
    displayDrinkIngr(number, ingredients){
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


    //Show categories
    displayCategs(categories){
         const menu=document.querySelector('.drop-cats');

         categories.forEach(cat=>{
            let newItem=document.createElement('a');
            newItem.className='dropdown-item';
            newItem.setAttribute=("href", "#");
            newItem.textContent=cat.strCategory;
            menu.appendChild(newItem);
        });

    }

    //Display Drinks by Cat
    displayDrinks(drinks){
        const div=document.querySelector('#drink-cont');
        div.innerHTML="";
        let output="";

        drinks.forEach((drink)=>{
            output+=`
            <div class="card border-primary mb-3" style="max-width: 250px; margin-bottom: 20px; margin-left: 10px;">
                <div class="card-header"><a id="${drink.idDrink}" class="open-modal" data-toggle="modal" data-target="#drink-modal" href="#">${drink.strDrink}</a></div>
                <div class="card-body">
                  <img src="${drink.strDrinkThumb}"  style=" max-width: 200px; max-height: 200px;" alt='missing' />
                </div>
            </div>`
            });

        div.innerHTML=output;
    }

    clearDrink(){
        const div=document.querySelector('#drink-cont');
        div.innerHTML='<h1 style="margin:auto;">Choose a category or search for a cockail, my dude.</h1>';
    }

    //Set the ingredients and instructions
    setModalData(drink){
        const modal=document.querySelector(".modal-body");
        const modalDiv=document.createElement("div");
        modal.innerHTML="";
        const ul=document.createElement("ul")
        ul.className="ingr-list mb-3"
        let output="";

        for(let i=1; i<16; i++){
            let ingrName="strIngredient"+i;
            if(drink[ingrName]!==null){
                output+=`
                <li class="ingr-item">${drink[ingrName]}</li>`
            } else{
              break;
            }
        }

        ul.innerHTML=output;
        modal.appendChild(ul);
        modalDiv.innerHTML=`
        <p>${drink.strInstructions}</p>`
        modal.appendChild(modalDiv);

    }
}