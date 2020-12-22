//another.js

function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> Monday's Menu: Bacon, Eggs & Rice. No Alterations. </h1>");
    header.innerHTML = hello;
  }
  
  module.exports = sayHello();