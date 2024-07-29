let randomText = document.getElementById("randomText");
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

let data = [
  "JavaScript is a scripting language that enables",
  "It also enables users to load content into a documnet ",
  "such as dropdown menus, animated graphics",
  "a scripting language used to create ",
];

let randomNum = Math.random() * data.length;
let randomValue = Math.floor(randomNum);
console.log(data[randomValue]);

let startTime;
let endTime;
const myFun = () => {
let wordLength = textInput.value.split(" ").length;
let time = new Date();
endTime = time.getTime();
let completTime = Math.floor((endTime - startTime) / 1000);
  let speed = Math.floor((wordLength / completTime) * 60);
console.log(speed);
result.innerHTML =
    "You write " +
    wordLength +
    " word in " +
    completTime +
    " seconds: Your Typing Speed is " +
    speed +
    " word per minute";
};
btn.addEventListener("click", function () {
if (btn.innerText == "Start") {
    let time = new Date();
    startTime = time.getTime();
    console.log(startTime);
    btn.innerText = "Done";
    textInput.disabled = false;
    textInput.style.backgroundColor = "White";
    randomText.innerHTML = data[randomValue];
} else if (btn.innerText == "Done") {
    btn.innerText = "Start";
    textInput.disabled = true;
    textInput.style.backgroundColor = "silver";
    myFun();
}
});
