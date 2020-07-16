//Fetch
const fetchDrink= new GetDrinks();

//UI
const ui=new UI();

//Form
const form=document.querySelector(".number-form");

//Add eventlistener
document.querySelector('.card-container').addEventListener('click',function(e){
    if(e.target.classList.contains('yep-button')){

        if(form.value!=="" ){

            if(Number.isInteger(parseInt(form.value))){

                if(parseInt(form.value)<=100 && parseInt(form.value)>0){

                    fetchDrink.getDrinks().then(function(resp){
                    ui.displayDrink(form.value, resp.ingr.drinks);
                    });    
                }else{
                   ui.showAlert("That's too much.");
                }
            }else{
                ui.showAlert("Not a number, buddy.");
            } 
        }else{
            ui.showAlert("It's empty, buddy.");
        }
    }
    e.preventDefault();
})





