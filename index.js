/*
    1. Create a function which is able to prompt the user to provide their fullname, age, and location.
        -use prompt() and store the returned value into a function scoped variable within the function.
        -display the user's inputs in messages in the console.
        -invoke the function to display your information in the console.
        -follow the naming conventions for functions.
*/


//first function here:
function userInput() {
    let inputName = prompt("What is your fullname?");
    let inputAge = prompt("How old are you?");
    let inputAddress = prompt("Where do you live?");
    alert("Thank you for your input!");

    console.log(inputName);
    console.log(inputAge);
    console.log(inputAddress);
}

userInput();


/*
    2. Create a function which is able to print/display your top 5 favorite bands/musical artists.
        -invoke the function to display your information in the console.
        -follow the naming conventions for functions.

*/


//second function here:
function printMyFavBands() {
    const myFavBands = ["Linkin Park", "Parokya ni Edgar", "Eraserheads", "Nickleback", "Riverymaya"];
    let counter = 1;
    for (let bands of myFavBands) {
        console.log(`${counter}. ${bands}`);
        counter++;
    }
}
printMyFavBands();
/*
    3. Create a function which is able to print/display your top 5 favorite movies of all time and show Rotten Tomatoes rating.
        -Look up the Rotten Tomatoes rating of your favorite movies and display it along with the title of your favorite movie.
        -invoke the function to display your information in the console.
        -follow the naming conventions for functions.

*/

//third function here:
function printFavMovies() {
    const favMovies = {
        "Jurassic Park": 92,
        "Jurassic World Dominion": 29,
        "Jurassic Park III": 49,
        "The Lost World: Jurassic Park": 54,
        "Godzilla: King of the Monsters": 42,
    }
    const titles = Object.keys(favMovies);
    const ratings = Object.values(favMovies);
    for (let i = 0; i < titles.length; i++) {
        console.log(`${i + 1}. ${titles[i]}`)
        console.log(`Rotten Tomatoes Rating: ${ratings[i]}`)
    }
}

printFavMovies();
/*
    4. Debugging Practice - Debug the following codes and functions to avoid errors.
        -check the variable names
        -check the variable scope
        -check function invocation/declaration
        -comment out unusable codes.
*/



let printFriends = function /* printUsers */() {
    alert("Hi! Please add the names of your friends.");
    let friend1 = prompt("Enter your first friend's name:");
    let friend2 = prompt("Enter your second friend's name:");
    let friend3 = prompt("Enter your third friend's name:");

    console.log("You are friends with:")
    console.log(friend1);
    console.log(friend2);
    console.log(friend3);
};

printFriends();

/* console.log(friend1);
console.log(friend2); */