/* When a user types into the search input you should
 * 1) Search for players using the backend
 * 2) Build html to display the list of users
 * 3) Append the html from step 2 to the results div
 */

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
        alert(JSON.stringify(users));
    });
});

// React to input changes
search.addEventListener('keyup', function() {
    alert(search.value);
});
