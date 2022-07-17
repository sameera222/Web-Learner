const setOfWords = ["Start typing words"]

const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTyping;
let endTyping;

const playGame=()=>{
     let randomNumber = Math.floor(Math.random() * setOfWords.length);
     msg.innerText = setOfWords[randomNumber]

     let date = new Date();
     startTyping =  date.getTime();
     btn.innerText = "Done"
}

const endPlay= () =>{
    let date = new Date();
    endTyping = date.getTime();
    let totalSpeed = ((startTyping - endTyping) / 1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr)
    
    let speed = Math.floor((wordCount / totalSpeed) * 60);
    let finalMsg = "You typed total at" + speed + "words per minute speed";
    msg.innerText = finalMsg;
}

const wordCounter = (str) =>{
    let userResponse = str.split(" ").length;
  return userResponse;
}
btn.addEventListener('click', function(){
    if(this.innerText === 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText === "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});

