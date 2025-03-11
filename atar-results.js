const atarResults = [
    { score: "98.95", name: "Emma", school: "Haileybury '24" },
    { score: "99.75", name: "Oliver", school: "Scotch '24" },
    { score: "99.75", name: "Serena", school: "Mac.Rob '24" },
    { score: "99.75", name: "Daniel", school: "PEGs '22" },
    { score: "99.75", name: "Undisclosed", school: "Suzanne Cory '22" },
    { score: "99.70", name: "Aarav", school: "Haileybury '24" },
    { score: "99.70", name: "Elise", school: "Mac.Rob '24" },
    { score: "99.65", name: "Tahlia", school: "Lowther Hall '24" },
    { score: "99.65", name: "Zachary", school: "MHS '22" },
    { score: "99.65", name: "Lucas", school: "Suzanne Cory '23" },
    { score: "99.65", name: "Undisclosed", school: "JMSS '23" },
    { score: "98.60", name: "Isabella", school: "Strathcona '24" },
    { score: "98.80", name: "Hannah", school: "Haileybury '24" },
    { score: "98.60", name: "Jayden", school: "MHS '24" },
    { score: "97.60", name: "Nikhil", school: "Nossal '24" },
    { score: "97.55", name: "Sienna", school: "Mac.Rob '24" },
    { score: "97.50", name: "Kieran", school: "Caulfield GS '24" },
    { score: "97.45", name: "Thomas", school: "MHS '24" },
    { score: "96.45", name: "Adam", school: "Wesley '24" },
    { score: "96.45", name: "Emily", school: "Mac.Rob '24" },
    { score: "96.40", name: "Nathan", school: "St Kevin's '24" },
    { score: "96.40", name: "Xavier", school: "MHS '24" },
    { score: "96.40", name: "Benjamin", school: "Haileybury '24" }
];

function displayAtarResults() {
    const resultsContainers = document.querySelectorAll('.atar-results');
    if (!resultsContainers.length) return;

    // Group results into sets of 8 for each slide
    const resultsPerSlide = 8;
    const slides = [];
    
    for (let i = 0; i < atarResults.length; i += resultsPerSlide) {
        slides.push(atarResults.slice(i, i + resultsPerSlide));
    }

    // Display results in each container
    resultsContainers.forEach((container, index) => {
        if (slides[index]) {
            slides[index].forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'atar-list';
                resultDiv.innerHTML = `
                    <p><span>${result.score} |</span> ${result.name} <b>(${result.school})</b></p>
                `;
                container.appendChild(resultDiv);
            });
        }
    });
}


// Call the functions when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayAtarResults();
});