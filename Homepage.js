function test() {
    var str = 'fgfggg';
    console.log(str[0]);
}

function returnStr(str1, str2, str3, str4) {
    var res = str2 + str1 + str3 + str1 + str4;
    console.log(res);
}

class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
}
function TreeSum(root) {
    if (!root) return 0;
    let sum = root.value;
    root.children.forEach (child => {
        sum += TreeSum(child);
    })
    return sum;
}
function getSum() {
    let root = new Tree(1);
    let child1 = new Tree(2);
    let child2 = new Tree(3);
    let subChild1 = new Tree(4);
    let subChild2 = new Tree(5);
    root.children.push(child1);
    root.children.push(child2);
    child1.children.push(subChild1);
    child2.children.push(subChild2);
    console.log(TreeSum(root));
}

function drawCircle() {
    var circle = document.getElementById("half_circle");
    var child = document.createElement('div');
    child.style.margin = "auto"
    child.style.width = 200 + "px";
    child.style.height = 100 + "px";
    child.style.backgroundColor = "white";
    child.style.borderTopLeftRadius = 110 + "px"; 
    child.style.borderTopRightRadius = 110 + "px"; 
    child.style.border = 10 + "px solid gray";
    child.style.borderBottom = 0;
    circle.appendChild(child);
}

function sortDate(type) {
    var date = [
        new Date(2022, 3, 30),
        new Date(2023, 6, 26),
        new Date(2021, 2, 24),
        new Date(),
    ];
    if (type == 'asc') {
        date.sort((a,b) => (a < b ? -1 : 1));
    } else if (type == 'desc') {
        date.sort((a,b) => (a < b ? 1 : -1));
    }
    for (let i = 0; i < date.length; i++) {
        console.log(date[i].getFullYear() + '/' + (date[i].getMonth() + 1) + '/' + date[i].getDate());
    }
}

function anagrams(words) {
    for (let i = 0; i < words.length - 1; i++) {
        if (!anagram(words[i], words[i + 1])) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}
function anagram(wordA, wordB) {
    let charA = [];
    let charB = [];
    if (wordA.length != wordB.length) return false;
    for (let i = 0; i < wordA.length; i++) {
        charA.push(wordA[i]);
        charB.push(wordB[i]);
    }
    charA.sort();
    charB.sort();
    for (let i = 0; i < charA.length; i++) {
        if (charA[i] != charB[i]) return false;
    }
    return true;
}

function missing() {
    let array = removeOne(rndArray());
    array.sort((a, b) => { return a - b;});
    console.log(array);
    for (let i = 0; i < 100; i++) {
        if (i + 1 != array[i]) {
            console.log((i + 1) + ' is missing');
            return;
        }
    }
}
function removeOne(array) {
    array.splice(7, 1);
    console.log(array);
    return array;
}
function rndArray() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }
    for (let i = 0; i < 100; i++) {
        let A = Math.floor(Math.random() * 100);
        let B = Math.floor(Math.random() * 100);
        let tmp = array[A];
        array[A] = array[B];
        array[B] = tmp;
    }
    console.log(array);
    return array;
}

function bubbleSort(array) {
    console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    console.log(array);
}

function ReversePolishNotation(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            array.push(parseInt(str[i]));   
        } else {
            array.push(str[i]);
        }   
    }
    console.log(array);
    for (let i = 0; i < array.length;) {
        if (isNaN(array[i])) {
            switch(array[i]) {
                case '+':
                    array[i - 2] = array[i - 2] + array[i - 1];
                    break;
                case '-':
                    array[i - 2] = array[i - 2] - array[i - 1];
                    break;
                case '*':
                    array[i - 2] = array[i - 2] * array[i - 1];
                    break;
                case '/':
                    array[i - 2] = array[i - 2] / array[i - 1];
                    break;
            }
            array.splice(i - 1, 2);
            i -= 2;
            console.log(array);
        } else {
            i++;
        }
    }
    console.log(array[0]);
}

function palindrome(str) {
    let str2 =reverseString(str);
    console.log(str + ' -> ' + str2);
    if (str == str2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}