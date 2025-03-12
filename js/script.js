document.addEventListener("DOMContentLoaded", () => {
    const translateBtn = document.getElementById("translate-btn");
    const saveFavoriteBtn = document.getElementById("save-favorite");
    const sourceLangSelect = document.getElementById("source-lang");
    const targetLangSelect = document.getElementById("target-lang");
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const favoritesList = document.getElementById("favorites-list");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsModal = document.getElementById("settings-modal");
    const closeSettingsBtn = document.getElementById("close-settings");

    // Language list
    const languages = {
        "en": "English",
        "fr": "French",
        "es": "Spanish",
        "de": "German",
        "hi": "Hindi",
        "ar": "Arabic"
    };

    // Populate dropdowns
    Object.keys(languages).forEach(code => {
        sourceLangSelect.add(new Option(languages[code], code));
        targetLangSelect.add(new Option(languages[code], code));
    });

    // Set default language selections
    sourceLangSelect.value = "en";
    targetLangSelect.value = "es";

    // Translation function
    translateBtn.addEventListener("click", async () => {
        const text = inputText.value.trim();
        const sourceLang = sourceLangSelect.value;
        const targetLang = targetLangSelect.value;

        if (text === "") {
            alert("Please enter text to translate.");
            return;
        }

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.responseData && data.responseData.translatedText) {
                outputText.value = data.responseData.translatedText;
            } else {
                alert("Translation failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while translating.");
        }
    });

    // Save translation to favorites
    saveFavoriteBtn.addEventListener("click", () => {
        const translation = `${inputText.value} → ${outputText.value}`;
        if (translation.trim() !== "→") {
            const li = document.createElement("li");
            li.textContent = translation;
            favoritesList.appendChild(li);
        }
    });

    // Settings modal handling
    settingsBtn.addEventListener("click", () => {
        settingsModal.style.display = "block";
    });

    closeSettingsBtn.addEventListener("click", () => {
        settingsModal.style.display = "none";
    });
});
