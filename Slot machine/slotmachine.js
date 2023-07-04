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

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES ={
    A: 5,
    B: 4,
    C: 3,
     D : 2
}


const deposit = () => {  //deposit amount
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

const getnumberoflines = () => {  //lines to bet on
    while(true){
        const lines =prompt("enter no of lines to bet on (1-3)");
        const numberoflines = Number(lines);

        if(isNaN(numberoflines) || numberoflines <=0 || numberoflines >3) {
            console.log("invalid number of lines , try again");
        }
        else {
            return numberoflines;
        }
    }

}
const getbet = (numberdepositamount, numberoflines) => {  //getting bet per line
    while (true){
        const bet = prompt("enter the bet per line ");
        const numberbet = Number(bet);

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > numberdepositamount / numberoflines) {
            console.log("invalid bet");
        }
        else {
            return numberbet;
        }
    }
}

const spin = () => {
    const symbols = []; //creating an array to fit all values on wheel.
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT) ){  //using Object.entries method and
        //and assigning symbols to variables symbols and count
        for(let i=0 ; i< count ; i++ ){
            symbols.push(symbol);  //push method do add element "symbol" in array symbols.
        } //function will go to symbol count(using object.entries loop) and then using another for loop ,
        // add how many times it is there in array.



    }
    const reels = [];
    for (let i=0; i<COLS; i++){  //pushing arr into arr equal to no of cols, to make a matrix(wheel)
        reels.push([]);

        const reelsSymbols = [...symbols]; //copy array to avoid editing original array
        for (let j= 0; j<ROWS;j++ ){
            const randomIndex = Math.floor(Math.random() * reelsSymbols.length); //generating a random index
            const selectedSymbol = reelsSymbols[randomIndex]; //selecting the random symbol
            reels[i].push(selectedSymbol); //random symbol is pushed into reel array
            reelsSymbols.splice(randomIndex, 1); //deleting selected random symbol as it cant be reused
        }
    }
    return reels;

};

const transpose= (reels) =>{
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j= 0; j<COLS ; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;


}


const printrows = () =>
{
    for(const row of rows) {
        let rowstring = "A|B|C";

    }
}





let fnbalance = deposit();
const fnnumberoflines = getnumberoflines();
const fnbet = getbet(fnbalance,fnnumberoflines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);













