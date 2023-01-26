

var module=function(){
    var counter=2;
    return { add :function(){
            return counter+1;
            }, 
            reset: function(){
            counter=0;
            return counter;
        }
    }
};
module().reset();
console.log(module().add());


// console.log(add());
// question 3... ready? fight!
var make_adder=(function(inc){
    var counter=0;
    return function(){
        counter=counter+inc;
        return counter;
    };
});
var add5=make_adder(5);
add5();
console.log(add5());
//question 5
var createEmployee=function(){
    var name="";
    var age=12;
    var salary=null;
    var getName= function(){return this.name;}
    var getAge=function(){return this.age;}
    var getSalary= function(){return this.salary;}
    var setName=function(arg){
        this.name=arg;
    }
    return {
        getName: getName,
        getAge:getAge,
        getSalary:getSalary
        ,setName: setName
        // setAge:function(age){
        //     this.age=age;
        // },
        // setSalary:function(salary){
        //     this.salary=salary;
        // },
        // increaseSalary(percentage){
        //     this.setSalary(this.getSalary()*(1+percentage));
        // },
        // increaseAge(){
        //     this.setAge(this.getAge()+1);
        // }
    }
};
let employee1=createEmployee();
console.log(employee1);
// employee1.age=15;
console.log(employee1.getAge());

// question 6

// var moduleAddMethods=function(employee){
//     var address=''
//     employee['address']=address;
//     employee[getAddress]=function(){
//         return this.address;
//     }
//     employee[setAddress]=function(address){
//         this.adress=address;
//     }
// }();
// moduleAddMethods(employee1);
// console.log(employee1);
// console.log(employee1.adress);



  