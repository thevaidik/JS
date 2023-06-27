// 1- deposit some money
// 2- determine number of lines to bet on
// 3- collect a bet amount
// 4- spin the slot machine
// 5- check if the user won
// 6- give the user their winnings
// 7- play again
//function deposit() {
   // return 1
//}
const prompt = require("prompt-sync")();


const deposit = () => {
    while (true) {


        const depositamount = prompt("enter a deposit amount");
        const numberdepositamount = Number(depositamount);

        if (isNaN(numberdepositamount) || numberdepositamount <= 0) {
            console.log("invalid deposit amount, Try again")
        }
        else {
            return numberdepositamount;
        }
    }
}

const depositamount = deposit();
console.log(depositamount);



