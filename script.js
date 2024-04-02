document.getElementById('search-button').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    var name = 'Naga Manasa Palaparthi'; // Replace with your name

    if(searchBar.value.toLowerCase() === name.toLowerCase()) {
        // Logic when your name is entered. For example, display the portfolio.
        // alert('Displaying portfolio!');
        window.location.href = 'search-results.html';
    } else {
        // Logic when the name is not entered. For example, do nothing or alert the user.
        alert('Please type "Naga Manasa Palaparthi"');
    }
});

document.getElementById('lucky-button').addEventListener('click', function() {
    // Logic for the "I'm Feeling Lucky" button
    alert("I'm Feeling Lucky clicked!");
});

// Prefill the search bar with your name and select it
window.onload = function() {
    var searchBar = document.getElementById('search-bar');
    searchBar.value = 'Naga Manasa Palaparthi';
    searchBar.select();
};
