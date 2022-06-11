let shot = document.querySelector(".shot");
let hit = document.querySelector(".hit");
let count = document.getElementById("count") ;
document.body.addEventListener('click', shooting );

function shooting(e){
let element = e.target;

if(element.classList.contains("jar")) {
    element.classList.add("die");

    count.innerHTML ++

    hit.play();

    
    
}
    else {

    shot.play();
}
}
