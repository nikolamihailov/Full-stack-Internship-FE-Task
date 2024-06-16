// selecting dropdowns
const carType = document.querySelector(".car-type");
const leasePeriod = document.querySelector(".lease-period");

// selecting inputs
const [carValueInput, carValueSlider] = document.querySelectorAll(".car-value");
const [downPaymentInput, downPaymenSlider] = document.querySelectorAll(".down-payment-input");

// selecting results display fields
const totalLeaseEl = document.querySelector(".total-lease");
const downPaymentEl = document.querySelector(".down-payment");
const monthlyInstallmentEl = document.querySelector(".monthly-installment");
const interestRateEl = document.querySelector(".interest-rate");

// contsants
const ANNUAL_INTEREST_RATE_NEW_CARS = 2.99;
const ANNUAL_INTEREST_RATE_USED_CARS = 3.7;

// function that takes two inputs and syncs them
const syncInputs = (input1, input2) => {
    input1.addEventListener('input', () => {
        input2.value = input1.value;
        calculateLease();
    });
    input2.addEventListener('input', () => {
        input1.value = input2.value;
        calculateLease();
    });
};

syncInputs(carValueInput, carValueSlider);
syncInputs(downPaymentInput, downPaymenSlider);

carType.addEventListener('change', calculateLease);
leasePeriod.addEventListener('change', calculateLease);

// checks on blur if the user types something invalid
carValueInput.addEventListener('blur', () => {
    const value = Number(carValueInput.value);
    if (isNaN(value) || value < 10000) {
        carValueInput.value = 10000;
    } else if (value > 200000) {
        carValueInput.value = 200000;
    }
    carValueSlider.value = carValueInput.value;
    calculateLease();
});

// checks on blur if the user types something invalid
downPaymentInput.addEventListener('blur', () => {
    const value = Number(downPaymentInput.value);
    if (isNaN(value) || value < 10) {
        downPaymentInput.value = 10;
    } else if (value > 50) {
        downPaymentInput.value = 50;
    }
    downPaymenSlider.value = downPaymentInput.value;
    calculateLease();
});

// calculates the lease 
function calculateLease() {
    const carValue = parseFloat(carValueInput.value);
    const downPaymentPercent = parseFloat(downPaymentInput.value);
    const leaseMonths = parseInt(leasePeriod.value);
    const annualInterestRate = carType.value === "brand-new" ? ANNUAL_INTEREST_RATE_NEW_CARS : ANNUAL_INTEREST_RATE_USED_CARS;

    // guards to prevent calculations with invalid numbers
    if (carValue > 200000 || carValue < 10000) return;
    if (downPaymentPercent > 50 || downPaymentPercent < 10) return;


    const downPaymentAmount = (downPaymentPercent / 100) * carValue;

    const principalLeaseAmount = carValue - downPaymentAmount;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    const monthlyInstallment = (principalLeaseAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -leaseMonths));

    const totalLeaseCost = downPaymentAmount + (monthlyInstallment * leaseMonths);

    // apply calcultions to result display
    totalLeaseEl.textContent = totalLeaseCost.toFixed(2);
    downPaymentEl.textContent = downPaymentAmount.toFixed(2);
    monthlyInstallmentEl.textContent = monthlyInstallment.toFixed(2);
    interestRateEl.textContent = annualInterestRate.toFixed(2);
}

calculateLease();