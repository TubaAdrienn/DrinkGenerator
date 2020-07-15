//Fetch
const fetchDrink= new GetDrinks();

//UI
const ui=new UI();

//Form
const form=document.querySelector(".number-form");

//Add eventlistener
document.querySelector('.card-container').addEventListener('click',function(e){
    if(e.target.classList.contains('yep-button')){
        //Value check if integer



        if(form.value!=="" ){
        fetchDrink.getDrinks().then(function(resp){
            ui.displayDrink(form.value, resp.ingr.drinks);
        });       
     } 
    }
    e.preventDefault();
})





