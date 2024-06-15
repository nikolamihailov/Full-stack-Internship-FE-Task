const [carValueInput, carValueSlider] = document.querySelectorAll(".car-value");
const [downPaymentInput, downPaymenSlider] = document.querySelectorAll(".down-payment");

carValueInput.addEventListener("input", () => {
    carValueSlider.value = carValueInput.value;
});

carValueInput.addEventListener('blur', () => {
    const value = Number(carValueInput.value);
    if (isNaN(value) || value < 10000) {
        carValueInput.value = 10000;
    } else if (value > 200000) {
        carValueInput.value = 200000;
    }
    carValueSlider.value = carValueInput.value;
});

carValueSlider.addEventListener("input", () => {
    carValueInput.value = carValueSlider.value;
});



downPaymentInput.addEventListener("input", () => {
    downPaymenSlider.value = downPaymentInput.value;
});

downPaymenSlider.addEventListener("input", () => {
    downPaymentInput.value = downPaymenSlider.value;
});

downPaymentInput.addEventListener('blur', () => {
    const value = Number(downPaymenSlider.value);
    if (isNaN(value) || value < 10) {
        downPaymentInput.value = 10;
    } else if (value > 50) {
        downPaymentInput.value = 50;
    }
    downPaymenSlider.value = downPaymentInput.value;
});