import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Games {
    constructor(){
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', ()=>{
            let category = link.getAttribute('data-category');
            this.myGames(category);
            document.querySelector('.navbar-nav .active').classList.remove('active');
            link.classList.add('active');
            })
        })
        this.loader =document.querySelector('.loading');
        this.details =document.getElementById('details');
        this.games =document.getElementById('games');
        this.ui =new Ui()
        this.myGames('mmorpg');

    }




    
   async myGames(category){
    this.loader.classList.remove('d-none');
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5cb2ae6f65msh8a0aadcab5c9e7cp10313bjsnbd8a4f76b50d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    let apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    let myapigames = await apiGames.json();
    this.loader.classList.add('d-none');
    this.ui.displayCardgames(myapigames);

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
            document.getElementById("games").classList.add("d-none");
            document.getElementById("details").classList.remove("d-none"); 
            new Details(card.dataset.id);
            
           
        });
     });

    }


 



    // startEvent() {
    //     document.querySelectorAll(".card").forEach((item) => {
    //        item.addEventListener("click", () => {
    //           const id = item.dataset.id;
    //           this.showDetails(id);
    //        });
    //     });
    //  }
  
    //  showDetails(idGame) {
    //     const details = new Details(idGame);
    //     document.querySelector("#games").classList.add("d-none");
    //     document.querySelector(".details").classList.remove("d-none");
    //  }

}