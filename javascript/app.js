let name = prompt("What is your name?");
alert("Welcome Back! " + name );

let amountOfDogs = prompt("How many dogs do you want to adopt");
alert("Wow! Thanks for adopting " + amountOfDogs + " dogs!"); 

let dogSex = prompt("Are you looking for a male or female dog?");
if (dogSex==="male") {
    alert("Great! We have 20 male dogs waiting to be adopted.");
}

else if (dogSex==="female") {
    alert("Great! We have 62 female dogs waiting to be adopted.");
}

else {
    alert("Oops! That wasn't an option!");
}