//**********************Q3*************************//

function fetchUser() {

    fetch('https://api.github.com/users').then(function (response) {
            return response.json();
        }).then(
        function (json) {
            console.log(json);
        });
}

fetchUser();