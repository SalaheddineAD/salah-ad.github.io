function max(x, y) {
    if (x > y) return x;
    else return y;
}

function maxOfThree(x, y, z) {
    if (x > y && x > z) return x;
    if (y > z) return y;
    else return z;
}

function isVowel(arg) {
    list = ['a', 'e', 'i', 'o', 'u'];
    if (list.includes(arg)) return true;
    else return false;
}

function sum(list) {
    return list.reduce((sum_ele, element) => sum_ele + element);
}

function multiply(list) {
    return list.reduce((result, element) => result * element);
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function findLongestWord(array) {
    return array.map(x => x.length).reduce((result, element) => {
        if (element > result) return element;
        else return result;
    })
}

function filterLongWords(array, i) {
    return array.filter(x => x.length >= i);
}

// exrcise 8
function exercise8_map(a) {
    return a.map(function(elem, i, array) {
        return elem * 10;
    });
}

function exercise8_filter(a) {
    return a.filter(function(elem, i, array) {
        return elem == 3;
    });
}

function exercise8_reduce(a) {
    return a.reduce(function(prevValue, elem, i, array) {
        return prevValue * elem;
    });
}



// testing
function myFunctionTestForObjects(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return "TEST FAILED";
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return "TEST FAILED";
        }
    }

    return "TEST SUCCEEDED";
}


function myFunctionTest(expected_val, result) {
    if (expected_val == result) return "TEST SUCCEEDED";
    else return "TEST FAILED";
}

console.log("testing myFunctionTest");
console.log("Expected output of myFunctionTest(50,50) is TEST SUCCEEDED  and " + myFunctionTest(50, 50));
console.log("Expected output of myFunctionTest(50,40) is TEST FAILED and " + myFunctionTest(50, 40));
console.log("Expected output of myFunctionTestForObjects([1, 3, 5, 3, 3], [1, 3, 5, 3, 3]) is TEST SUCCEEDED and " + myFunctionTest([1, 3, 5, 3, 3], [1, 3, 5, 3, 3]));
console.log("Expected output of myFunctionTestForObjects([1, 3, 5, 3, 3], [9, 3, 5, 3, 3]) is TEST FAILED and " + myFunctionTest([1, 3, 5, 3, 3], [9, 3, 5, 3, 3]));
console.log("testing the other functions");
console.log("Expected output of max(50,10) is 50 and " + myFunctionTest(50, max(50, 10)));
console.log("Expected output of maxOfThree(50,10,60) is 60 and " + myFunctionTest(60, maxOfThree(50, 10, 60)));
console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('hello') is olleh and " + myFunctionTest('olleh', reverse('hello')));
console.log("Expected output of findLongestWord(['hello', 'abc', 'ab']) is 5 and " + myFunctionTest(5, findLongestWord(['hello', 'abc', 'ab'])));
console.log("Expected output of filterLongWords(['hello', 'abc', 'ab'], 3) is ['hello', 'abc'] and " + myFunctionTestForObjects(['hello', 'abc'], filterLongWords(['hello', 'abc', 'ab'], 3)));
console.log("Expected output of exercise8_map([1, 3, 5, 3, 3]) is [10,30,50,30,30] and " + myFunctionTestForObjects([10, 30, 50, 30, 30], exercise8_map([1, 3, 5, 3, 3])));
console.log("Expected output of exercise8_filter([1, 3, 5, 3, 3]) is [3,3,3] and " + myFunctionTestForObjects([3, 3, 3], exercise8_filter([1, 3, 5, 3, 3])));
console.log("Expected output of exercise8_reduce([1, 3, 5, 3, 3]) is 135 and " + myFunctionTestForObjects(135, exercise8_reduce([1, 3, 5, 3, 3])));