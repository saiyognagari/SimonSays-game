let gameSeq = [];
let userSeq = [];
let level = 0;
let highest = 0;
let started = false;
let h3 = document.querySelector("h3");
let btns = document.querySelectorAll(".btn");
let btnss = ["yellow", "red", "blue", "green"];

document.addEventListener("keypress", function() {
    console.log(highest);
    if(started == false) {
        started = true;
        console.log("game has started");
        levelUp();
    }
})
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btnss[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let selec = document.querySelector(`.${randColor}`);
    addFlash(selec);
}
function addFlash(b) {
    b.classList.add("flash");
    setTimeout(function() {
        b.classList.remove("flash")
    },200);
}
function userFlash(b) {
    b.classList.add("userflash");
    setTimeout(function() {
        b.classList.remove("userflash")
    },200);
}

for(b of btns) {
    b.addEventListener("click",btnPress);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,700);
        }
    } else {
        if(highest < level) {
            highest = level;
        }
        h3.innerHTML = `Game Over! Your score was ${level} <br/> The highest score is ${highest} <br/> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            body = document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}

function btnPress() {
    if(started) {
    let btn = this;
    let ucolor = btn.getAttribute("id");
    userSeq.push(ucolor);
    userFlash(btn);
    checkAns(userSeq.length-1);
}}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}  
