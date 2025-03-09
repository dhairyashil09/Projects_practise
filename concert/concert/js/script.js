

function shareEvent() {
    const eventUrl = window.location.href; // Get current page URL
    const eventTitle = "Join me at the Arijit Singh Live Concert!"; // Title of the event

    if (navigator.share) {
        navigator.share({
            title: eventTitle,
            text: "Don't miss this amazing concert! Get your tickets now.",
            url: eventUrl
        }).then(() => {
            console.log("Share btn Working");
        }).catch((error) => {
            console.error("Share btn Not Working", error);
        });
    } 
}


function registerNow() {
    document.getElementById("registerForm").scrollIntoView({ behavior: "smooth" });
}

function filterEvents() {
    let selectedArea = document.getElementById("area").value;
    let selectedPrice = document.getElementById("price").value;
    let selectedDate = document.getElementById("date").value;

    let events = document.querySelectorAll(".event");

    events.forEach(event => {
        let eventArea = event.getAttribute("data-area");
        let eventPrice = event.getAttribute("data-price");
        let eventDate = event.getAttribute("data-date");

        let areaMatch = (selectedArea === "all" || selectedArea === eventArea);
        let priceMatch = (selectedPrice === "all" || selectedPrice === eventPrice);
        let dateMatch = (!selectedDate || selectedDate === eventDate);

        if (areaMatch && priceMatch && dateMatch) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    });
}

document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "confirmation.html";
});

function downloadPass() {
    alert("Your event pass is being downloaded.");
}