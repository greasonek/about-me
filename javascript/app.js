let name = prompt("Welcome to Love Dogs Adoption! What is your name?");
alert("We're glad you're here " + name + "! We just have a couple of questions.");

// function adoptDogs() {
//    let amountOfDogs = prompt("How many dogs do you want to adopt");
//   amountOfDogs = Number(amountOfDogs);
//    if (amountOfDogs < 3) {
//       let adoptDogs = prompt ("C'mon you can adopt more than that!");
//        if (adoptDogs >= 3) {
//        document.write("Wow! Thanks for adopting " + adoptDogs + "dogs!")
//    }
//    } else {s
//        let message= "Wow! Thanks for adopting " + amountOfDogs + "dogs!";
//        document.write(message);
//    }
//}

function adoptDogs() {

    let adopt = prompt("How many dogs do you want to adopt?");

    while (adopt < 4) {
        adopt = prompt ("C'mon you can adopt more than that!");
        adopt = Number(adopt);
    }
    for (let i = 1; i<= adopt; i++) {
        document.write("🐶");
    }
}




let dogSex = prompt("Are you looking for a male or female dog?");
if (dogSex==="male") {
    alert("Great! We have 28 male dogs waiting to be adopted.");
}

else if (dogSex==="female") {
    alert("Great! We have 32 female dogs waiting to be adopted.");
}

else {
    alert("Oops! That wasn't an option!");
}