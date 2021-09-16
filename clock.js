const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

const setClock = () =>{
  let currentDate = new Date();
  let secondsRatio = currentDate.getSeconds() / 60;
  let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

const setRotation = (element, rotationRatio) => {
    let rotation = rotationRatio * 360;
    element.style.setProperty("--hand-rotation", rotation);
}

const initializeClock = () =>{
  for(let i = 1; i < 13; i++){
    let element = document.createElement("div");
    document.querySelector(".clock").appendChild(element);

    element.classList.add("number");
    element.classList.add("number" + i);

    let number = document.createElement("p");
    number.innerHTML = i;
    document.querySelector(".number" + i).appendChild(number);
  }
}
initializeClock();
setInterval(setClock, 1000);
setClock();