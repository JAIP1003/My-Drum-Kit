alert("This is the drum kit instrument.There will be seven musical instrument appear on the screen. you can create musical sound on clicking on the shown image on the screen or pressing the letter-- w,a,s,d,j,k,l. Press ok! ");
alert ("Are you ready to excited to create your own musical sound? press ok!");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) //i<document.querySelectorAll("button")
{ //i<document.querySelectorAll(".class")
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var pressButton=this.innerHTML;
    makeSound(pressButton);
    bAnimation(pressButton);
  }
  );
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  bAnimation(event.key);
}
);
function makeSound(key){
  switch (key) {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case "a":
      var b = new Audio("sounds/tom-2.mp3");
      b.play();
      break;
    case "s":
      var c = new Audio("sounds/tom-3.mp3");
      c.play();
      break;
    case "d":
      var e = new Audio("sounds/tom-4.mp3");
      e.play();
      break;
    case "j":
      var t = new Audio("sounds/snare.mp3");
      t.play();
      break;
    case "k":
      var c = new Audio("sounds/crash.mp3");
      c.play();
      break;
    case "l":
      var m = new Audio("sounds/kick-bass.mp3");
      m.play();
      break;
    default:
      alert("love 💓 from jai! Please press w,a,s,d,j,k,l only as shown on the drum image");
  }
}
function bAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed"),100
  }
)
}
