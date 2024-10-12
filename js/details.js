import { Ui } from "./ui.js";

export class Details {
   constructor(id) {

      document.getElementById("btnClose").addEventListener("click", () => {
         document.getElementById("games").classList.remove("d-none");
         document.getElementById("details").classList.add("d-none");
      });
      this.loader =document.querySelector('.loading');
      this.getapiDetails(id);
   }

    async getapiDetails(id) {
        this.loader.classList.remove('d-none');

      const options = {
         method: "GET",
         headers: {
            'x-rapidapi-key': '5cb2ae6f65msh8a0aadcab5c9e7cp10313bjsnbd8a4f76b50d',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         },
      };

      let apiDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
      let myapiDetails = await apiDetails.json();
      new Ui().displayDetails(myapiDetails)
      this.loader.classList.add('d-none');
   }
}