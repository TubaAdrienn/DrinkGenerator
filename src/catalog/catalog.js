//UI and fetch instance
const get=new GetDrinks();
const ui=new UI();
const search=document.querySelector("#search-drink");


document.addEventListener('DOMContentLoaded', (e) => {
    get.getCategories().then((resp)=>ui.displayCategs(resp.categories.drinks))
});

document.querySelector('.drop-cats').addEventListener('click',function(e){
   get.getDrinkByCat(e.target.textContent).then((resp)=>ui.displayDrinks(resp.cocktails.drinks))
});

document.querySelector("#drink-cont").addEventListener('click', function(e){
    if(e.target.classList.contains("open-modal")){
        get.getModalData(e.target.id).then(function(resp){
            ui.setModalData(resp.item.drinks[0]);
        });
        
    }
    
});

search.addEventListener('keyup', function(){
    if(search.value!=""){
        get.getDrinkByIngredient(search.value).then(resp=>{
            if(resp.drink!=""){
                ui.displayDrinks(resp.drink.drinks);
            } else{
                ui.clearDrink();
            }
        });
    } else{
        ui.clearDrink();
    }
 
})