const atarResults = [
    { score: "99.95", name: "Jerry", school: "MGS Dux '23" },
    { score: "99.95", name: "Krishav", school: "MHS Dux '23" },
    { score: "99.95", name: "Pranav", school: "HT Dux '23" },
    { score: "99.95", name: "Ramodh", school: "MHS Dux '21" },
    { score: "99.90", name: "Aidin", school: "MHS '23" },
    { score: "99.90", name: "Jineth", school: "MHS '23" },
    { score: "99.90", name: "Rosemary", school: "MGGS Dux '23" },
    { score: "99.90", name: "Chelsea", school: "MGGS Dux '23" },
    { score: "99.90", name: "Anonymous", school: "EDSC Dux '22" },
    { score: "99.90", name: "Violet", school: "MLC Dux '22" },
    { score: "99.90", name: "Anonymous", school: "School Dux '22" },
    { score: "99.90", name: "Jeffrey", school: "MHS '21" },
    { score: "99.90", name: "Makram", school: "Ilim Dux '21" },
    { score: "99.85", name: "Belle", school: "EDSC Dux '23" },
    { score: "99.85", name: "Cindy", school: "Ruyton '23" },
    { score: "99.85", name: "Deshitha", school: "Haileybury '23" },
    { score: "99.85", name: "Pranav", school: "MHS '23" },
    { score: "99.85", name: "Anonymous", school: "JMSS '22" },
    { score: "99.80", name: "Abinesh", school: "Nossal '23" },
    { score: "99.80", name: "Chelsea", school: "Hornsby Girls '23" },
    { score: "99.80", name: "Sophie W", school: "HT '23" },
    { score: "99.80", name: "Dhruv", school: "Girton Dux '22" },
    { score: "99.80", name: "Manjot", school: "Wellington Dux '22" },
    { score: "99.75", name: "Hardu", school: "Salesian Dux '23" }
];

function displayAtarResults() {
    const resultsContainer = document.querySelector('.atar-results');
    if (!resultsContainer) return;

    atarResults.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'atar-list';
        resultDiv.innerHTML = `
            <p> <span>${result.score} |</span> ${result.name} <b>(${result.school})</b></p>
        `;
        resultsContainer.appendChild(resultDiv);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', displayAtarResults);