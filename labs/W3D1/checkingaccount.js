class CheckingAccount extends Account{
    constructor(number,overDraftLimit){
        super(number);
        this.overDraftLimit=overDraftLimit;
    }

    getOverDraftLimit(){
        return this.overDraftLimit;
    }

    setOverDrafedLimit(overDrafedLimit){
        this.overDraftLimit=overDrafedLimit;
    }
    withdraw(amount){
        if(amount>super.getBalance()+this.overDraftLimit){
            throw Error("OverDraft");
        }
        else super.withdraw(amount);
    }
    toString(){
        return super.toString()+": OverDraft limit "+this.overDraftLimit;
    }
}
let checkingAccount= new CheckingAccount(99834,100);
checkingAccount.deposit(5000);
checkingAccount.setOverDrafedLimit(200);
checkingAccount.withdraw(5020);
console.log( checkingAccount.getBalance());