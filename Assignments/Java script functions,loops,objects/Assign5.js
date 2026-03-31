const wallet = {
    owner: "Supreetha",
    balance: 0,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };

        console.log(`Deposited ${amount}`);
    },

    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdraw amount");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };

        console.log(`Withdrew ${amount}`);
    }
};

// Operations
wallet.deposit(500);
wallet.withdraw(200);

// Print wallet object
console.log(wallet);