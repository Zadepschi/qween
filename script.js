const searchField = document.querySelector("#search");
const play = document.querySelectorAll(".playMusic");

searchField.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();

    play.forEach(item =>{
        item.querySelector("h3").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})