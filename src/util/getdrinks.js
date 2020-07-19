class GetDrinks{
    constructor(){
    }

    async getDrinksIngr(){

        const drinkIngred=await fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
            }
        })

        const ingr= await drinkIngred.json();

        return {
            ingr
        }
    }

    //Get drinks by categories
    async getDrinkByCat(cat){
     const response= await fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${cat}`, {
	        "method": "GET",
        	"headers": {
        		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	        	"x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
        	}
        })

        const cocktails=await response.json();
    

        return {
            cocktails
        }
    }

    //Get the drink categories
    async getCategories(category){
        const response= await fetch("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
        	"method": "GET",
        	"headers": {
    	    	"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        		"x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
    	    }
        })

        const categories=await response.json();

        return{
            categories
        }
    }

    async getModalData(id){
      const response=await fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, {
            "method": "GET",
	        "headers": {
	        	"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	        	"x-rapidapi-key": "1434b5828dmsh57c108713d5e9efp191635jsnc07f3f8ab810"
    	}
    })

        const item=await response.json();

        return{
            item
        }

    }

}