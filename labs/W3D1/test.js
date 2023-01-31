describe("class SavingAccount which inherits from account",function(){
    it("can create a saving account, add deposit add interest get the new balance",function(){
        assert.equal((function(){
            let savingAccount= new SavingAccount(99834,5);
            savingAccount.deposit(5000);
            savingAccount.addInterest();
            return savingAccount.getBalance();
        }()),5250);
    });

    it("can use toString",function(){
        assert.equal((function(){
            let savingAccount= new SavingAccount(99834,5);
            savingAccount.deposit(5000);
            savingAccount.addInterest();
            return savingAccount.toString();
        }()),"Account 99834: balance 5250: interest 5");
    });
})

describe("class CheckingAccount which inherits from account",function(){
    it("can create a checking account, set its overDraftLimit add deposit withdraw an amount",function(){
        assert.equal((function(){
            let checkingAccount= new CheckingAccount(99834,100);
            checkingAccount.deposit(5000);
            checkingAccount.setOverDrafedLimit(200);
            checkingAccount.withdraw(5100);
            return checkingAccount.getBalance();
        }()),-100);
    });

    it("can use toString and use setter",function(){
        assert.equal((function(){
            let checkingAccount= new CheckingAccount(99834,100);
            checkingAccount.deposit(5000);
            checkingAccount.setOverDrafedLimit(200);
            return checkingAccount.toString();
        }()),"Account 99834: balance 5000: OverDraft limit 200");
    });
})