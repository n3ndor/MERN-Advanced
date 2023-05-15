class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(`${this.name}'s Account Balance: ${this.accountBalance}`);
    }

    transferMoney(receiver, amount) {
        this.accountBalance -= amount;
        receiver.accountBalance += amount;
    }
}

const mario = new User("Super Mario", "mario@mario.com");
const dan = new User("Cop Dan", "dan@cop.com");
const sherlock = new User("Sherlock Holmes", "sherlock@detectiv.com");

mario.makeDeposit(76)
mario.makeDeposit(37)
mario.makeDeposit(77)
mario.makeWithdrawal(100)
mario.displayBalance()

dan.makeDeposit(25)
dan.makeDeposit(125)
dan.makeWithdrawal(10)
dan.makeWithdrawal(40)
dan.displayBalance()

sherlock.makeDeposit(500)
sherlock.makeWithdrawal(110)
sherlock.makeWithdrawal(220)
sherlock.makeWithdrawal(40)
sherlock.displayBalance()
console.log(" ")
// Bonus
mario.transferMoney(dan, 100)
mario.displayBalance()
dan.displayBalance()
