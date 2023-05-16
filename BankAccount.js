class BankAccount {
    constructor(balance = 0, intRate = 0.01) {
        this.balance = balance;
        this.intRate = intRate;
    }

    // increases the account balance by the given amount
    deposit(amount) {
        this.balance += amount;
        return this;
    }

    //decreases the account balance by the given amount if there are sufficient funds; 
    //if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance -= 5;
        }
        else {
            this.balance -= amount
        }

        return this;
    }

    //print to the console: eg. "Balance: $100"
    displayAccountInfo() {
        console.log(`Account Balance: ${this.balance}`);
        return this;
    }

    //increases the account balance by the current balance * the interest rate (as long as the balance is positive)
    yieldInterest() {
        this.balance += this.balance * this.intRate
        return this;
    }
}

const bank1 = new BankAccount()
const bank2 = new BankAccount(2000, 0.1)
console.log("Bank1");
bank1.deposit(100).deposit(20).deposit(30).withdraw(50).yieldInterest().displayAccountInfo()
console.log("Bank2");
bank2.deposit(1000).deposit(500).withdraw(100).withdraw(300).withdraw(400).withdraw(200).yieldInterest().displayAccountInfo()
