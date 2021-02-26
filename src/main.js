/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateRandomNumber = () => {
    let number = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  };

  let generateRandomSymbol = () => {
    let symbol = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
    let indexSymbol = Math.floor(Math.random() * symbol.length);
    return symbol[indexSymbol];
  };

  document.querySelector(".top-symbol").innerHTML = generateRandomSymbol();
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".bottom-symbol").innerHTML = generateRandomSymbol();

  //   console.log("Hello Rigo from the console!");
};
