String.prototype.filter=function(arg){
	return this.split(" ").filter((e)=>e!=arg).join(" ");
}
console.log("this is not the case".filter("not"));

Array.prototype.bubbleSort=function(){
    let len=this.length;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            if(this[i]>this[j]){
                let tmp=this[i];
                this[i]=this[j];
                this[j]=tmp;
            }
        }
    }
}
let x=[6,4,0, 3,-2,1];
x.bubbleSort();

console.log(x);


var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
var Teacher =function(){}
Teacher.prototype = new Person();
Teacher.prototype.teach=function(subject){
    console.log(this.name +" is now teaching "+ subject);

}
let teacher1=new Teacher();
teacher1.initialize("salah",99);
teacher1.teach("JavaScript");