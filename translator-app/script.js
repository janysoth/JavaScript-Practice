// Variable Declarations
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchangeIcon = document.querySelector(".exchange");
const selectTags = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const translateBtn = document.querySelector("button");

// Populating Select Tags
selectTags.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected =
            (id === 0 && country_code === "en-GB") ||
                (id === 1 && country_code === "hi-IN")
                ? "selected"
                : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

// Exchange Icon Click Event
exchangeIcon.addEventListener("click", () => {
    [fromText.value, toText.value] = [toText.value, fromText.value];
    [selectTags[0].value, selectTags[1].value] = [
        selectTags[1].value,
        selectTags[0].value,
    ];
});

// From Text Keyup Event
fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
});

// Translate Button Click Event
translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim();
    let translateFrom = selectTags[0].value;
    let translateTo = selectTags[1].value;
    if (!text) return;

    toText.setAttribute("placeholder", "Translating...");

    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            toText.value = data.responseData.translatedText;
            data.matches.forEach((match) => {
                if (match.id === 0) {
                    toText.value = match.translation;
                }
            });
            toText.setAttribute("placeholder", "Translation");
        });
});

// Icons Click Event
icons.forEach((icon) => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;

        if (target.classList.contains("fa-copy")) {
            let textToCopy = target.id === "from" ? fromText.value : toText.value;
            navigator.clipboard.writeText(textToCopy);
        } else {
            let utterance;
            if (target.id === "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTags[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTags[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});
