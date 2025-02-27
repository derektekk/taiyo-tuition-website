var cursor = document.getElementById("cursor-container");
cursor.hidden = true;  // Hide cursor by default

document.getElementById("contact-us-button").addEventListener("mousemove", function(event) {
    cursor.hidden = false;  // Show cursor on hover
    myFunction(event);
});

document.getElementById("contact-us-button").addEventListener("mouseleave", function() {
    cursor.hidden = true;  // Hide cursor when leaving button
});

function myFunction(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = (mouseX + 30) + "px";
    cursor.style.top = (mouseY - 60) + "px";
}

