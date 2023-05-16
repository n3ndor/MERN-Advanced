class BankAccount {
    constructor(balance = 0, intRate = 0.01) {
        this.balance = balance;
        this.intRate = intRate;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance -= 5;
        } else {
            this.balance -= amount;
        }

        return this;
    }

    displayAccountInfo() {
        console.log(`Account Balance: ${this.balance}`);
        return this;
    }

    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.accounts = [];
    }

    createAccount(balance = 0, intRate = 0.01) {
        const newAccount = new BankAccount(balance, intRate);
        this.accounts.push(newAccount);
        return newAccount;
    }

    transferMoney(receiver, amount, senderAccountIndex, receiverAccountIndex) {
        const senderAccount = this.accounts[senderAccountIndex];
        const receiverAccount = receiver.accounts[receiverAccountIndex];

        senderAccount.withdraw(amount);
        receiverAccount.deposit(amount);
    }

    displayUserAccounts() {
        console.log(`User: ${this.name}`);
        this.accounts.forEach((account, index) => {
            console.log(`Account ${index + 1}: Balance: ${account.balance}`);
        });
    }
}

const user1 = new User("Katie", "katie@example.com");
const user2 = new User("Dominic", "dominic@example.com");

const account1User1 = user1.createAccount();
const account2User1 = user1.createAccount(100);
const account1User2 = user2.createAccount();
const account2User2 = user2.createAccount(100);

console.log("Starting amount:");
user1.displayUserAccounts();
user2.displayUserAccounts();

account1User1.deposit(50).deposit(100).withdraw(30).yieldInterest();
account1User2.deposit(200).withdraw(50).yieldInterest();

console.log("After deposit, withdraw and yield interest:");
user1.displayUserAccounts();
user2.displayUserAccounts();

console.log("User1 sends money to User2")
user1.transferMoney(user2, 50, 0, 0);
user1.displayUserAccounts();
user2.displayUserAccounts();

console.log("User2 sends money from account2 to User1's account2")
user2.transferMoney(user1, 99, 1, 1);
user1.displayUserAccounts();
user2.displayUserAccounts();
