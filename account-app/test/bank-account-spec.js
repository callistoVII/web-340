const assert = require("assert");
const BankAccount = require("../src/bank-account");

function testDeposit() {
  try {
    const account = new BankAccount();
    account.deposit(100);
    assert.strictEqual(account.balance, 100, "The balance should be 100.");

    console.log("The deposit() method passed");
  } catch (err) {
    console.log("The deposit() method failed.");
    console.log(err);
  }
}

function testNegativeDepositThrowsError() {
  try {
    const account = new BankAccount();
    account.deposit(-100);
  } catch (err) {
    assert.strictEqual(err.message, "Deposit amount must be greater than 0.");
    console.log("The negative deposit amount test passed.");
  }
}

function testWithdraw() {
  try {
    const account = new BankAccount();
    account.deposit(100);
    account.withdraw(50);
    assert.strictEqual(account.balance, 50, "The Balance should be 50.");

    console.log("The withdraw() method passed.");
  } catch (err) {
    console.log("The withdraw() method failed.");
    console.log(err);
  }
}

function testInsufficientFundsWithdraw() {
  try {
    const account = new BankAccount();
    account.deposit(100);
    account.withdraw(200);
  } catch (err) {
    assert.strictEqual(err.message, "Insuffienct funds.");
    console.log("The insufficient funds withdraw test passed");
  }
}

testDeposit();
testNegativeDepositThrowsError();
testWithdraw();
testInsufficientFundsWithdraw();
