"use strict";
document.querySelector("form").addEventListener("submit", displayDogName);

function displayDogName(event){
    event.preventDefault();
    let dogname = document.querySelector("#dogname").value;
    document.bosdy.append(dogname);
}