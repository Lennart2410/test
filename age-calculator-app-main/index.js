const dayInput= document.querySelector("#dayInputID");
const monthInput= document.querySelector("#monthInputID");
const yearInput= document.querySelector("#yearInputID");
const dayOutput = document.querySelector("#dayOutputID");
const monthOutput = document.querySelector("#monthOutputID");
const yearOutput = document.querySelector("#yearOutputID");

const monthArray = [31,28,31,30,31,30,31,31,30,31,30,31];

let roundedDays;
let roundedMonths;
let roundedYears;


function doSomething () {
    let ms = Date.now();
    let inYears = ms/(1000*60*60*24*365.24219);

    
    roundedYears = Math.floor(inYears);
    let dYears = inYears - roundedYears;
    let months = dYears*12;
    roundedMonths = Math.floor(months);
    let dMonths = months -roundedMonths;
    let days = dMonths*monthArray[roundedMonths];
    roundedDays = Math.floor(days);
    console.log("Tage: " + roundedDays);
    console.log("Monate: "+ roundedMonths);
    roundedYears += 1970;
    console.log("Jahre: "+ roundedYears);
    this.subtract();
    
}

function subtract(){

    let subtractedYears = roundedYears - yearInput.value;
    let subtractedMonths = roundedMonths- monthInput.value+1;
    let subtractedDays = roundedDays-dayInput.value+1;

     if(subtractedDays<0 || subtractedMonths<0){
        subtractedYears--;
        if(subtractedMonths<0){
            subtractedMonths = 12+subtractedMonths;
        }
        if(subtractedDays<0){
            subtractedDays = monthArray[roundedMonths] + subtractedDays;
        }
     }
    
   /* if(subtractedDays < 0){
        subtractedMonths--;
        if(subtractedMonths<0){
            subtractedMonths = 11;
            subtractedYears--;
        }
        subtractedDays = monthArray[subtractedMonths-1]+subtractedDays;
    }
    if(subtractedMonths<0){
        subtractedMonths = 12;
        subtractedYears--;
        subtractedDays = monthArray[subtractedMonths-1]+subtractedDays;
    }*/

    dayOutput.textContent = subtractedDays;
    monthOutput.textContent = subtractedMonths;
    yearOutput.textContent = subtractedYears;
}   


function solution2 () {
    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth() + 1;
    let currDay = date.getDate();

    let diffYear = currYear - yearInput.value;
    let diffMonth = currMonth - monthInput.value;
    let diffDay = currDay - dayInput.value;

    console.log("DiffYear =" + diffYear);
    console.log("DiffMonth =" + diffMonth);
    console.log("DiffDay =" + diffDay);

    if(diffDay < 0) {
        diffMonth--;
        diffDay = 30 + diffDay;
    }
    if(diffMonth < 0) {
        diffYear--;
        diffMonth = 12 + diffMonth;
    }


    dayOutput.textContent = diffDay;
    monthOutput.textContent = diffMonth;
    yearOutput.textContent = diffYear;
 }

