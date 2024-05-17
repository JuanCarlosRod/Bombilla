let bombilla = document.querySelector("#bombi");
let interruptor = false;

bombilla.addEventListener("click", function(){
    if(interruptor){
        bombilla.src="img/bombilla-on.gif";
        interruptor = false;
    } else {
        bombilla.src="img/bombilla-off.gif";
        interruptor = true;
    }
});