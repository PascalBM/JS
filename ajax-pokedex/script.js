
let getData = async () => {
    //took the api with the fetch
    let input = document.getElementById("input").value;
    let image = document.getElementById("image");
    let name = document.getElementById("name");
    let moves = document.getElementById("moves");
    const nextBtn = document.getElementById("next");
    const previousBtn = document.getElementById("previous");

        await fetch('https://pokeapi.co/api/v2/pokemon/'+ input)
            .then(result => result.json())
            .then(data => {
                name.textContent = data.name
                console.log(data);
                image.src = data.sprites["front_default"]
            })
}

document.getElementById("searchBtn").addEventListener("click", getData)