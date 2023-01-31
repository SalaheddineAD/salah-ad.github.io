describe("function accepts an array of strings that specifies a list of banned words",function(){
    it("removes 'not' for example",function(){
        assert.equal(function(){
            let myString="this is not the case";
            return(myString.filter("not"));
        },"this is the case");
    });
});



describe("function accepts an array of strings that specifies a list of banned words."+
" The function returns the string after removing all the banned words",function(){
    it("does exactly that", function (){
        assert.equal(function(){
            let array= [6,4,0, 3,-2,1];
            array.bubbleSort();
            return array;
        },[-2, 0, 1, 3, 4, 6]);
    });
});



describe("Create an object called Teacher derived from the Person class, and implement a method called teach"+
"which receives a string called subject, and returns:"+
"[teacher's name] is now teaching [subject]",function(){
    it("does that", function(){
        assert.equal(function(){
            let teacher1=new Teacher();
            teacher1.initialize("salah",99);
            teacher1.teach("JavaScript");
    },"salah is now teaching Javascript");
});
});