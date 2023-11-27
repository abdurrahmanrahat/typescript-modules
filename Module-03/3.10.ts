{
  // Encapsulation in OOP

  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // change can be possible for this claass, not outside

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // function for updating balance
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  // make instance using BankAccount class
  const goribManush = new BankAccount(189, "Rahat Hossain", 34000);
  goribManush.addDeposit(5);
  //   goribManush.getBalance();

  // child account via extends BankAccount //
  class StudentAccount extends BankAccount {
    test() {
      //   this.;
    }
  }

  //
}
