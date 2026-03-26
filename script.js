async function analyzeFile() {
    const file = document.getElementById("fileInput").files[0];

    let formData = new FormData();
    formData.append("file", file);

    document.getElementById("result").innerText = "Analyzing...";

    let res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData
    });

    let data = await res.json();

    let output = data.status + "\n";

    data.reasons.forEach(r => {
        output += "• " + r + "\n";
    });

    document.getElementById("result").innerText = output;
}
output += "\nConfidence: " + data.confidence;