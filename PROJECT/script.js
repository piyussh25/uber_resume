/* Validate input and go to Bus page */
function selectBus() {
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;

    // Basic validation
    if (from === "" || to === "") {
        alert("Please enter both Source and Destination");
        return;
    }

    // Redirect to bus comparison page
    window.location.href = "bus.html";
}

/* Validate input and go to Cab page */
function selectCab() {
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;

    // Basic validation
    if (from === "" || to === "") {
        alert("Please enter both Source and Destination");
        return;
    }

    // Redirect to cab comparison page
    window.location.href = "cab.html";
}

/* Go back to home page */
function goHome() {
    window.location.href = "index.html";
}
