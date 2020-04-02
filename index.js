//function that responds to key
function makeSound(key){
  switch (key) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case 'j':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case 'k':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

//animation
function buttonAnimation(key_name){
  var activeKey= document.querySelector("."+key_name);

  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);

}

//Adding query listener to all buttons
var no_of_drum_buttons=document.querySelectorAll(".drum").length;

for(var i=0;i<no_of_drum_buttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    // this.style.color="white";
    var audio;
    var key_name=this.innerHTML;
    makeSound(key_name);
    buttonAnimation(key_name);
  });

}

//keyboard key event listener
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
