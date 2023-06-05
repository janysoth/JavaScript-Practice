const container = document.querySelector(".container");
const userInput = document.getElementById("placement");
const submitBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download-btn");
const sizeOptions = document.querySelector(".size");
const BGColor = document.getElementById("color1");
const FGColor = document.getElementById("color2");

let QR_Code;
let sizeChoice = 100;
let BGColorChoice = "#000000";
let FGColorChoice = "#ffffff";

const updateSizeChoice = () => {
    sizeChoice = sizeOptions.value;
};

const updateBGColorChoice = () => {
    BGColorChoice = BGColor.value;
};

const updateFGColorChoice = () => {
    FGColorChoice = FGColor.value;
};

sizeOptions.addEventListener("change", updateSizeChoice);
BGColor.addEventListener("input", updateBGColorChoice);
FGColor.addEventListener("input", updateFGColorChoice);

userInput.addEventListener("input", () => {
    const value = userInput.value.trim();
    submitBtn.disabled = value.length < 1;
    downloadBtn.href = "";
    downloadBtn.classList.add("hide");
});

const inputFormatter = (value) => {
    return value.replace(/[^a-z0-9A-Z]+/g, "");
};

const generateQRCode = async () => {
    container.innerHTML = "";

    QR_Code = await new QRCode(container, {
        text: userInput.value,
        width: sizeChoice,
        height: sizeChoice,
        colorDark: FGColorChoice,
        colorLight: BGColorChoice
    });

    const src = container.firstChild.toDataURL("img/png");
    downloadBtn.href = src;

    let userValue = userInput.value;
    try {
        userValue = new URL(userValue).hostname;
    } catch (_) {
        userValue = inputFormatter(userValue);
    }

    downloadBtn.download = `${userValue}QR`;
    downloadBtn.classList.remove("hide");
};

const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
        generateQRCode();
    }
};

window.onload = () => {
    container.innerHTML = "";
    sizeOptions.value = sizeChoice;
    userInput.value = "";
    BGColor.value = BGColorChoice;
    FGColor.value = FGColorChoice;
    downloadBtn.classList.add("hide");
    submitBtn.disabled = true;
    userInput.addEventListener("keypress", handleKeyPress);
};

submitBtn.addEventListener("click", generateQRCode);
