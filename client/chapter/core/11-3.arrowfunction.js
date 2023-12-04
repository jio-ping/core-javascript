/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  // normal function
  // let total = 0;
  // total = args.reduce(function(acc,cur){
  //   return acc + cur;
  // },0)
  // return total;

  // arrow function
  let total = 0;
  total = args.reduce((acc, cur) => acc + cur, 0);
  return total;
};

let calcAllMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);
calcAllMoney(1000, 5000, 4500, 15000);

// 화살표 함수와 this
const user = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log('일반 함수 :', this);
    const sayHi = () => {
      console.log('sayhi', this);
    };
  },
};

user.totalGrades();
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (; powerCount > 0; --powerCount) {
    result *= numeric;
  }
  return result;
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
//pow(2,53)

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (; repeatCount > 0; --repeatCount) {
    result += text;
  }
  return result;
};

console.log(repeat('hello', 3));

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, ' ');

let arrayToString = (text, repeatCount) =>
  Array(repeatCount).fill(text).join('');
