const Account = function(name, balance) {
    this.name = name;
    this.balance = balance;
  };
  
  Account.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  Account.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
      throw new Error("Insufficient balance");
    }
  
    this.balance -= amount;
  };
  
  const account = new Account("John Doe", 1000);
  
  account.deposit(500);
  console.log(account.balance); // 1500
  
  account.withdraw(200);
  console.log(account.balance); // 1300
  