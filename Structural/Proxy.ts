interface Payment {
  pay(): void;
}

class BankAccount implements Payment {
  public pay() {
    console.log("Payment was succesful");
  }
}

class PaymentProxy implements Payment {
  private bankAcc: BankAccount;
  constructor(bankAcc: BankAccount) {
    this.bankAcc = bankAcc;
  }
  pay(): void {
    if (this.checkAccess()) {
      this.bankAcc.pay();
      this.logTransaction(true);
    } else {
      this.logTransaction(false);
    }
  }

  private checkAccess(): boolean {
    return true;
  }

  private logTransaction(passed: boolean): void {
    const date = new Date();
    console.log(
      `${
        passed ? "Succesful" : "Denied"
      }: ${date.getUTCHours()}:${date.getUTCMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
  }
}

const bankAcc = new BankAccount();
const proxy = new PaymentProxy(bankAcc);

proxy.pay();
