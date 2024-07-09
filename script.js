// select the output elements.
const output_years = document.queryselector(".conte-year");
const output_months = document.queryselector(".conte-month");
const output_days = document.queryselector(".conte-day");
const submit_btn = document.queryselector(".submit-btn");

// select the input elements.
let isValid = false;
const input_year = document.queryselector("#year");
const input_month = document.queryselector("#month");
const input_day = document.queryselector("#day");
// const submit_btn = document.queryselector(".submit-btn");

// select errors. 

const error_day = document.queryselector(".error-day");
const error_months = document.queryselector(".error-month");
const error_year = document.queryselector(".error-year");
submit_btn.addEventListener("click", CalculateDate)

input_day.addEventListener('input', (e) => {
  if (+input_day.value> 31 ){
    error_day.textContent = "Enter a valid date!";
    isValid = false;
    return;
  }else {
    isValid = true;
    error_day.textContent = "";
  }
  if(+input_day.value === 0){
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  }else{
    error_day.textContent ="";
  }

});

input_month.addEventListener('input', (e) => {
  if (+input_month.value > 12) {
    error_months.textContent = "Enter a valid number!";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_months.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_months.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_months.textContent = "";
  }

});

input_year.addEventListener('input', (e) => {
  if (+input_year.value > 2024) {
    error_year.textContent = "Enter a valid number!";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }

});

function CalculateDate(){
  if (isValid) {

  }else{
    alert("error");
  }
};