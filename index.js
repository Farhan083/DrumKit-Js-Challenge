var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);  
        //"w","a" etc will be passed to parameter
    });
}

// adding key listener to the project

// adding keylitener to the whole document

document.addEventListener("keydown",function(event) {
    makeSound(event.key);  // this will tell which key is pressed
    // eg. "w","a","s" etc will be passed to the parameter
});


// function to make sound
// the functionn will receive the key and 
// proceed accordingly
function makeSound(key){
    switch (key) {
        case "w":
            var audio  = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var tom2  = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3  = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4  = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash  = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick  = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare  = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(this);
            break;
    }
}