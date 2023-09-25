const date = document.getElementById("currentYear");

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();


function isDigit(number) {
    return number < 10 ? "0" + number : number;
}


date.innerHTML = `${isDigit(day)}.${isDigit(month)}.${year}`;



