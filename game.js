// console.log("Welcome ProGrads");
// // alert("Welcome");

// var a = 5;
// var b = 6;

// if (a == b )
//     console.log(a);
//     else 
//     console.log(b);

// (a==b)? console.log(a):console.log(b);

// // for(var i = 1;i<=5;i++ )
// //     console.log(i);

// var array = [1,2,3,4,5];

// for(let j = 1; j<=array.length;j++)
// {
//     console.log("using loops")
//     console.log(array[j]);
// }

// console.log(array.forEach((index)=>{
//     console.log("using foreach");
//     console.log(index);
// }));


var score = [0,1,2,3,4,5,6];

var team1={
    //Team1 details
    name: "CSK",
    runs: [],
    score:0
}

var team2={
    //Team2 details
    name: "Mumbai Indians",
    runs: [],
    score:0
}

var toss;


// window.addEventListener("load", () => {


// })

window.onload = () =>{
    selectToss(); // Deciding the strike
    updateButtonText(); // update the text of the button according to the strike
    updateNames(); // Updating the teams that are playing
    updateScore();
}

// function selectToss(){
//     toss = Math.round(Math.random())+1;
//     console.log(toss);
// }
// Function for deciding the toss
var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}

// Function to change the button text
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    button.textContent = `${toss === 1 ? team1.name:team2.name} Batting`;
}

// Function to update the teams name that are playing
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    // updating the score of team1 and team2
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
}