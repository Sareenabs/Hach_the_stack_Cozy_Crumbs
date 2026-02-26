const switcher = document.getElementById("languageSwitcher");

async function loadLanguage(lang) {
    const response = await fetch(`locales/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    localStorage.setItem("selectedLanguage", lang);
}

switcher.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
});

const savedLang = localStorage.getItem("selectedLanguage") || "en";
switcher.value = savedLang;
loadLanguage(savedLang);