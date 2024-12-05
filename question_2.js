// task 1
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;

    // task 2
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    };


    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    };

    // task 3
    this.calculateCompoundInterest = function(rate, timesPerYear, years) {
        if (rate <= 0 || timesPerYear <= 0 || years <= 0) {
            console.log("Interest rate, compounding periods per year, and time in years must be positive.");
            return;
        }
        let principal = this.balance;
        let interest = principal * Math.pow(1 + (rate / timesPerYear), timesPerYear * years) - principal;
        console.log(`Interest earned over ${years} years: $${interest.toFixed(2)}`);
        return interest;
    };
}

let myAccount = new Account('123456789', 1000, 'John Doe');
myAccount.deposit(500); 
myAccount.withdraw(200); 

myAccount.calculateCompoundInterest(0.05, 12, 3);
