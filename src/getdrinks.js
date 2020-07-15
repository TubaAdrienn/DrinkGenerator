class GetDrinks{
    constructor(){
        console.log("Constructed");
    }

    async getDrinks(){

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

}