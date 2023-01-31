class SavingAccount extends Account{
    constructor(number,interest){
        super(number);
        this.interest=interest;
    }
    getInterest(){
        return this.interest;
    }
    setInterest(interest){
        this.interest=interest;
    }
    addInterest(){
        super.deposit(super.getBalance()*this.interest/100);
    }
    toString(){
        return super.toString()+": interest "+ this.interest;
    }
}
let savingAccount= new SavingAccount(99834,5);
savingAccount.deposit(5000);
savingAccount.addInterest();
console.log( savingAccount.toString());