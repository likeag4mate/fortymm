/* When a user types into the search input you should
 * 1) Search for players using the backend
 * 2) Build html to display the list of users
 * 3) Append the html from step 2 to the results div
 */
var search = document.querySelector('#search');

search.addEventListener('keyup', function() {
    fetch('player-ratings.json').then(function(results){
        results.json().then(function(users) {
            document.getElementById("players").innerText = "";
            for(var i = 0; i < users.length; i++) {
                var node = document.createElement("li");
                node.innerText = users[i].firstName + ' ' + users[i].lastName;
                document.getElementById("players").appendChild(node);
            }

            document.getElementById("ratings").innerText = "";
            for(var i = 0; i < users.length; i++) {
                var node = document.createElement("li");
                node.innerText = users[i].rating;
                document.getElementById("ratings").appendChild(node);
            }
        });
    });
});

/*give player list and rating list ids
get rid of names in the lis
create an array which list of random players names
loop through the list of names
also loop through the ratings
for each name, create an li element containing the name and append it to the name list
*/