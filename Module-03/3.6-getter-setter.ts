{
  // Getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; // change can be possible for this claass, not outside

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // using setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // function for updating balance
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // using getter
    get balance() {
      return this._balance;
    }

    // getBalance() {
    //   return this._balance;
    // }
  }

  // make instance using BankAccount class
  const goribManush = new BankAccount(189, "Rahat Hossain", 34000);
  //   goribManush.addDeposit(5);
  //   goribManush.getBalance();

  goribManush.deposit = 50; // using setter
  const myBalance = goribManush.balance; // using getter

  //
}
