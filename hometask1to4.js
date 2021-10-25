// 1. Знайти площу прямокутника.

let length = prompt('Enter the length of your rectangle')
let width = prompt('Enter the width of your rectangle')

function area (length, width) {
return length * width;
}

alert('The area of your rectangle is ' + area(length, width));

// 2. Дана функція squareCubeSum. Вона вимагає першим параметром число, другим функцію, котра підносить число до квадрату, а третім параметром - функцію, яка підносить до куба.
// Ці функції є як Function Declaration - squared, cubed. Нехай функція squareCubeSum поверне суму квадрата и куба числа.

let yourNum = prompt('Enter your number');

function squared() {
    return yourNum**2;
};

function cubed() {
    return yourNum**3;
}

function squareCubeSum(yourNum, squared, cubed) {
alert ('The sum is ' + (squared(yourNum) + cubed(yourNum)));
};

squareCubeSum(yourNum, squared, cubed);

// 3. Написати функцію, яка буде нескінченно збільшувати 1 число(prompt) на 2 число(prompt)

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
let sum = num1 + num2;
alert (sum);
function infinitePlus(){ 
return sum += num2; 
}
while (true) {  
 alert ('Next time you click the button, this number ' + infinitePlus() + ' will be increased by the second number you have entered before');
}

// 4. Написать функцію, яка приймає стать людини ('M','F') у виді рядка, результат функції повертає рядок "You're male", "You're female" або "You're sex is undefined"

let sex = prompt('Enter your sex (M/F)')

alert (mF())

function mF() {
    if (sex === 'M') {
    return ("You're male")
}
else if (sex ==='F') {
        return ("You're female");
}
else {
    return ("You're sex is undefined")
}
}

        
