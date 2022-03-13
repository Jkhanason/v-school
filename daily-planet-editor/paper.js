/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"]; //lowercase var name, spacing

function whoWins (isThereKryptonite, enemyName) { //func spelling and casing, brace spacing, parameter casing
    if (!isThereKryptonite) { //indentation throughout
        return "Superman beats " + enemyName + ", of course";
    }
    else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) { //spacing and braces, camel casing
    var isThereKryptonite;
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function HowAttractedIsLoisLaneToMe () { //braces
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) +1);
}

console.log(HowAttractedIsLoisLaneToMe()); //spelling and spacing

var isClarkKent = true; //spacing var names
var isSuperman = false; //equals sign, var names

while (isClarkKent) { //spacing
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random(); //spacing
    if (phoneBoothQuickChange >= 0.5) { //spacing
        isClarkKent = false; //spacing
        isSuperman = true; //spacing
        console.log("Now I'm Superman!");
    }
}
