const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const labelCount = document.querySelector("#label");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    labelCount.innerHTML = count;
}

decreaseBtn.onclick = function(){
    count--;
    labelCount.innerHTML = count;

}

resetBtn.onclick = function(){
    count = 0;
    labelCount.innerHTML = count;

}