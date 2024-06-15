// selecting dropdowns
const carType = document.querySelector(".car-type");
const leasePeriod = document.querySelector(".lease-period");

// selecting inputs
const [carValueInput, carValueSlider] = document.querySelectorAll(".car-value");
const [downPaymentInput, downPaymenSlider] = document.querySelectorAll(".down-payment-input");

// selecting results display fields
const totalLease = document.querySelector(".total-lease");
const downPayment = document.querySelector(".down-payment");
const montlyInstallment = document.querySelector(".montly-installment");
const interestRate = document.querySelector(".interest-rate");

// contsants
const ANNUAL_INTEREST_RATE_NEW_CARS = 2.99;
const ANNUAL_INTEREST_RATE_USED_CARS = 3.7;

const syncInputs = (input1, input2) => {
    input1.addEventListener('input', () => {
        input2.value = input1.value;
    });
    input2.addEventListener('input', () => {
        input1.value = input2.value;
    });
};

syncInputs(carValueInput, carValueSlider);
syncInputs(downPaymentInput, downPaymenSlider);

carValueInput.addEventListener('blur', () => {
    const value = Number(carValueInput.value);
    if (isNaN(value) || value < 10000) {
        carValueInput.value = 10000;
    } else if (value > 200000) {
        carValueInput.value = 200000;
    }
    carValueSlider.value = carValueInput.value;
});


downPaymentInput.addEventListener('blur', () => {
    const value = Number(downPaymenSlider.value);
    if (isNaN(value) || value < 10) {
        downPaymentInput.value = 10;
    } else if (value > 50) {
        downPaymentInput.value = 50;
    }
    downPaymenSlider.value = downPaymentInput.value;
});;;