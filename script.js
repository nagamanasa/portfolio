document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    var luckyButton = document.getElementById('lucky-button');
    var searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function() {
        var query = searchBar.value.trim();
        if(query.toLowerCase() === 'naga manasa palaparthi') {
            window.location.href = 'search-results.html';
        } else {
            alert('Please type "Naga Manasa Palaparthi" to see the portfolio.');
        }
    });

    luckyButton.addEventListener('click', function() {
        alert("Redirecting to a featured project!");
    });
});
