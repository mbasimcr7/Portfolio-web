document.getElementById("check-btn").addEventListener("click", validateNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validateNumber() {
    const input = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const validPattern = /^1?\s?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;

    if (validPattern.test(input)) {
        resultsDiv.textContent = `Valid US number: ${input}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
    }
}

function clearResults() {
    document.getElementById("results-div").textContent = "";
}
