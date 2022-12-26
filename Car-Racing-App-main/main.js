var enemyCar = document.getElementById("enemycar");
var playerCar = document.getElementById("playercar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var road =  document.getElementById("road");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")


const randomColor = ()=> {
    function c(){
        let hex = Math.floor(Math.random()*256).toString(16);
        return ("0" + String(hex)).substr(-2); // if by chance i get number in single digit from 'hex' so thats why i am adding 0 in front.
    }
    return "#" + c() + c() +c()
}

// enemycar move
enemyCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    enemyCar.style.backgroundColor = randomColor();
    enemyCar.style.left = random + "px";
    counter++
})

//playercar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"))
    if(playerCarLeft < 260){playerCar.style.left = (playerCarLeft + 130) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"))
        if(playerCarLeft > 0){playerCar.style.left = (playerCarLeft - 130) + "px"
        jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover (){
    var enemyCarTop = parseInt(window.getComputedStyle(enemyCar).getPropertyValue("top"))
    var enemyCarLeft = parseInt(window.getComputedStyle(enemyCar).getPropertyValue("left"));
    var playerCarLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue("left"));
        if((enemyCarLeft === playerCarLeft) && (enemyCarTop > 400) && (enemyCarTop < 550)){
            result.style.display = "block";
            road.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)