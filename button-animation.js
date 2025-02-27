const count = document.getElementById("count")

document.getElementById("contact-us-button").addEventListener("mouseenter", function() {
    window.animate(0, 90, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => (count.innerHTML = Math.round(latest) + "+"),
    })
});

document.getElementById("contact-us-button").addEventListener("mouseleave", function() {
    count.innerHTML = "0+"  // Reset counter when mouse leaves with plus sign
});