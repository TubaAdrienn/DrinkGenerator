//UI and fetch instance
const get=new GetDrinks();
const ui=new UI();

document.addEventListener('DOMContentLoaded', (e) => {
    get.getCategories().then((resp)=>ui.displayCategs(resp.categories.drinks))
});

document.querySelector('.drop-cats').addEventListener('click',function(e){
   get.getDrinkByCat(e.target.textContent).then((resp)=>ui.displayDrinksByCat(resp.cocktails.drinks))
});