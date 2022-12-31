// alert("You’re connected")

var treasureLocation = Math.floor(Math.random()*12)
var bombLocation = Math.floor(Math.random()*12)
console.log(treasureLocation)

const treasure = (location)=> {
    if(location===treasureLocation){
    document.getElementById("game").innerHTML="Congratulation!"
      alert("You found the treasure 💎")
    }else if(location===bombLocation){
      document.getElemntById("game").innerHTML="You lost! Try again"
      alert("You found the bomb 💣")
    }else {
      alert("The treasure isn't here. Try again.")
    }
}
