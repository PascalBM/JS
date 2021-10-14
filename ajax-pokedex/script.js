
let getData = () => {
    //took the api with the fetch
    let input = document.getElementById("input").value;
    let pokeId = document.getElementById("pokeId");
    let image = document.getElementById("image");
    let name = document.getElementById("name");
    let pokemoves = document.getElementById("pokemoves");
    let evolution = document.getElementById("evolution");
    const nextBtn = document.getElementById("nextBtn");
    const previousBtn = document.getElementById("previousBtn");


        fetch('https://pokeapi.co/api/v2/pokemon/'+ input)
            .then(result => result.json())
            .then(data => {
                pokeId.textContent = "ID-number:" + " " + data.id;
                name.textContent = data.name;
                console.log(data);
                image.src = data.sprites["front_default"];
                pokemoves.innerHTML="";
                for (let i = 0; i < 4; i++) {
                    pokemoves.innerHTML+= "<li>" + data.moves[i].move.name+ "</li>";
                }
                /*nextBtn.addEventListener("click", () => input+1);
                previousBtn.addEventListener("click", () => input-1);*/
                fetch('https://pokeapi.co/api/v2/pokemon-species/'+ input)
                    .then(result => result.json())
                    .then(data => {
                    console.log(data.evolves_from_species.name)
                       /*fetch('https://pokeapi.co/api/v2/pokemon/'+ data.evolves_from_species.name)
                            .then(result => result.json())
                            .then(data => {
                                console.log(data)
                                evolution.src = data.sprites["front_default"]
                            })*/
                    })
            })
}

document.getElementById("searchBtn").addEventListener("click", getData)