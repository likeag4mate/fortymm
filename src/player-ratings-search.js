/* When a user types into the search input you should
 * 1) Search for players using the backend
 * 2) Build html to display the list of users
 * 3) Append the html from step 2 to the results div
 */

var playerArray = ["Quinn Baker", "Mighy Moose", "Brian Bae", "Kenta Matusdaira", "Dimitrij Ovtcharov"];
var ratingArray = ["1777", "1234", "2000", "2801", "2799"];
for(var i = 0; i < playerArray.length; i++) {
    var node = document.createElement("li"); 
    var textnode = document.createTextNode(search);
    node.appendChild(textnode); 
    document.getElementById("playerArray").appendChild(node);
}

for(var i = 0; i < ratingArray.length; i++) {
    var node = document.createElement("li"); 
    var textnode = document.createTextNode(search);
    node.appendChild(textnode); 
    document.getElementById("ratingArray").appendChild(node);
}

var results = document.querySelector('#results');
var search = document.querySelector('#search');

var user = {id: 1, firstName: "firstName", lastName: "lastName"};
var userDiv = document.createElement('div');
userDiv.innerHTML = user.firstName

// Append stuff to results list
results.appendChild(userDiv);

// Get players from the server
fetch('player-ratings.json').then(function(results){
    results.json().then(function(users) {
        fetch(JSON.stringify(users));
    });
});

// React to input changes
mainSearch.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
        results.json().then(function(users) {
            fetch(JSON.stringify(users));
        });
    });


citySearch.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
        results.json().then(function(users) {
            fetch(JSON.stringify(users));
        });
});

stateSearch.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
        results.json().then(function(users) {
            fetch(JSON.stringify(users));
        });
});

ratingSearch1.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
       results.json().then(function(users) {
            fetch(JSON.stringify(users));
        });
});

ratingSearch2.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
        results.json().then(function(users) {
            fetch(JSON.stringify(users));
        });
});

/*give player list and rating list ids
get rid of names in the lis
create an array which list of random players names
loop through the list of names
also loop through the ratings
for each name, create an li element containing the name and append it to the name list
*/