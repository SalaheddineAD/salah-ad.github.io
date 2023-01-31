function Student(name){
    this.name=name;
    this.speak=function(){
    return this.name;
    }
}
let student1={};
student1.__proto__=Student.prototype;
student1.__proto__.name="salah";
    
console.log(new Student("salah"));
console.log(student1);
// function Employee(salary){
//     this.salary=salary;
//     }
//     employee.getSalary=function(){return this.salary;};

// class Person{
//     static x = 1;
// }

// console.log(Person.x);