
mocha.setup('bdd');
let assert = chai.assert;



describe("function returns object with add and reset methods",function(){
    it("can add 1 to the counter, counter initialized with 2",function(){
        assert.equal(module().add(),3);
    });
    it("can reset the counter to 0",function(){
        assert.equal(module().reset(),0);
    });
});

describe(" function whose return value is an add function with increment value of inc instead of 1",function(){
    it("can increment the counter by its argument",function(){
        assert.equal(function(){
            var add5=make_adder(5);
            add5();add5();return add5();
        }(),15);
        assert.equal(function(){
            var add7=make_adder(7);
            add7();add7();return add7();
        }(),21);
    })
})
describe("a module that creates employee objects",function(){
    it("can create an employee",function(){
            assert.equal(createEmployee(),{name:'',
            age: null,
            salary:null,
            getName: function(){return this.name;},
            getAge:function(){return this.age;},
            getSalary:function(){return this.salary;},
            setName: function(name){
                this.name=name;
            },
            setAge:function(age){
                this.age=age;
            },
            setSalary:function(salary){
                this.salary=salary;
            },
            increaseSalary(percentage){
                this.setSalary(this.getSalary()*(1+percentage));
            },
            increaseAge(){
                this.setAge(this.getAge()+1);
            }
        });
    });
});













