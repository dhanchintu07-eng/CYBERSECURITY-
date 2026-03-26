// ===== ENTER APP FUNCTION =====
function enterApp() {
    const landing = document.getElementById("landing");
    const app = document.getElementById("app");

    landing.style.opacity = "0";
    setTimeout(() => {
        landing.style.display = "none";
        app.style.display = "block";
        app.style.opacity = "1";
    }, 500);
}

// ===== CYBERSECURITY CONTENT =====
const cyberContent = [
    {
        title: "Why Cybersecurity Matters",
        text: "Every 39 seconds, a cyber attack happens somewhere in the world. Your data is not 'too small' to steal."
    },
    {
        title: "Common Threats",
        text: "Phishing, Deepfakes, Malware, Fake Certificates, Identity Theft — most attacks exploit human mistakes, not code."
    },
    {
        title: "What You Can Do",
        text: "Use strong passwords, enable 2FA, verify sources, never trust unknown links, and stay updated."
    }
];

// ===== QUOTES =====
const quotes = [
    "Security is not a product, it's a process.",
    "The weakest link in cybersecurity is always the human.",
    "Hackers don’t break systems, they break people.",
    "If you think technology can solve your security problems, you don’t understand the problems."
];

// ===== LOAD CONTENT INTO PAGE =====
function loadCyberContent() {
    const container = document.getElementById("cyber-info");

    cyberContent.forEach(item => {
        const div = document.createElement("div");
        div.className = "info-card";

        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;

        container.appendChild(div);
    });
}

// ===== LOAD RANDOM QUOTE =====
function loadQuote() {
    const quoteBox = document.getElementById("quote-box");
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.innerText = `"${random}"`;
}

// ===== PRIVACY POLICY =====
function loadPolicy() {
    const policy = document.getElementById("policy");

    policy.innerHTML = `
        <h3>Privacy & Safe Use</h3>
        <ul>
            <li>We do NOT store your personal data without consent.</li>
            <li>Always verify content before trusting results.</li>
            <li>This platform is for educational and awareness purposes only.</li>
            <li>Do not upload sensitive or confidential documents.</li>
            <li>Your safety depends on your decisions, not just our system.</li>
        </ul>
    `;
}

// ===== INITIALIZE =====
window.onload = function () {
    loadCyberContent();
    loadQuote();
    loadPolicy();
};