// "User.js" updated with chaining methods:

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }

    displayBalance() {
        console.log(`${this.name}'s Account Balance: ${this.accountBalance}`);
    }

    transferMoney(receiver, amount) {
        this.accountBalance -= amount;
        receiver.accountBalance += amount;
        return this;
    }
}

const mario = new User("Super Mario", "mario@mario.com");
const dan = new User("Cop Dan", "dan@cop.com");
const sherlock = new User("Sherlock Holmes", "sherlock@detectiv.com");

mario.makeDeposit(76).makeDeposit(37).makeDeposit(77).makeWithdrawal(100).displayBalance()

dan.makeDeposit(25).makeDeposit(125).makeWithdrawal(10).makeWithdrawal(40).displayBalance()

sherlock.makeDeposit(500).makeWithdrawal(110).makeWithdrawal(220).makeWithdrawal(40).displayBalance()
console.log(" ")
// Bonus
mario.transferMoney(dan, 100).displayBalance()
dan.displayBalance()
