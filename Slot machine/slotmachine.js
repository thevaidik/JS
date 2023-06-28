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
const prompt = require("prompt-sync")(); //declaring prompt-sync is required


const deposit = () => {
    while (true) {  //while loop to keep program running if criteria is not met


        const depositamount = prompt("enter a deposit amount");
        const numberdepositamount = Number(depositamount); //Number method to convert string in int

        if (isNaN(numberdepositamount) || numberdepositamount <= 0) {   //isNan to check if its number
            console.log("invalid deposit amount, Try again")
        }
        else {
            return numberdepositamount;
        }
    }
}

const getnumberoflines = () => {
    while(true){
        const lines =prompt("enter no of lines to bet on");
        const numberoflines = Number(lines);

        if(isNaN(numberoflines) || numberoflines <=0 || numberoflines >=3) {
            console.log("invalid number of lines , try again");
        }
        else {
            return numberoflines;
        }
    }

}

const getbet = (balance) => {
    while (true){
        const bet = prompt("enter the total bet");
        const numberbet = Number(bet);

        if(isNaN(numberbet) || numberbet <= 0 || numberbet>balance) {
            console.log("invalid bet");
        }
        else {
            return numberbet;
        }
    }
}

let balance = deposit();
const numberoflines = getnumberoflines();
const bet = getbet(balance)







