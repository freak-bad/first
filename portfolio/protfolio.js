 // Function to redirect to the portfolio page after 5 seconds
 function redirectToPortfolio() {
    setTimeout(function() {
        window.location.href = 'portfolio1.html'; // Redirects to the portfolio page
    }, 10000); // 5000 milliseconds = 5 seconds
}

// Call the function when the page loads
redirectToPortfolio();



