document.addEventListener("DOMContentLoaded", () => {
    const languages = {
        "en": "English",
        "es": "Spanish",
        "fr": "French",
        "de": "German",
        "it": "Italian",
        "hi": "Hindi"
    };

    const fromLanguage = document.getElementById("from-language");
    const toLanguage = document.getElementById("to-language");

    for (let code in languages) {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");

        option1.value = code;
        option2.value = code;
        option1.textContent = languages[code];
        option2.textContent = languages[code];

        fromLanguage.appendChild(option1);
        toLanguage.appendChild(option2);
    }
});
