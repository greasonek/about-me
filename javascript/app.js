let name = prompt("What is your name?");
alert("Welcome Back! " + name );

function adoptDogs() {
    let amountOfDogs = prompt("How many dogs do you want to adopt");
    amountOfDogs = Number(amountOfDogs);
    if (amountOfDogs < 3) {
        let adoptDogs = prompt ("C'mon you can adopt more than that!");
        if (adoptDogs >= 3) {
        document.write("Wow! Thanks for adopting " + adoptDogs + "dogs!")
    }
    } else {
        let message= "Wow! Thanks for adopting " + amountOfDogs + "dogs!";
        document.write(message);
    }
}

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