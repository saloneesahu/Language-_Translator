document.getElementById("translate-btn").addEventListener("click", () => {
    let text = document.getElementById("text-input").value;
    let fromLang = document.getElementById("from-language").value;
    let toLang = document.getElementById("to-language").value;
    
    if (text.trim() === "") {
        alert("Please enter text to translate!");
        return;
    }

    let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("translated-text").value = data.responseData.translatedText;
        })
        .catch(error => console.error("Error:", error));
});
