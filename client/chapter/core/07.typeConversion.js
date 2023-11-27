/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof YEAR); // number

console.log(typeof String(YEAR)); //string
console.log(typeof (YEAR + '')); //string

// undefined, null

let day = null;
let weekend;

console.log(typeof (day + '')); //string

console.log(typeof weekend);

// boolean

let isClicked = false;
console.log(typeof (isClicked + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend; //undefined
console.log(Number(friend)); //NaN

// null
let money = null;
console.log(Number(money)); // 0

// boolean

let cutie = true; //true = 1 false= 0
console.log(Number(cutie)); //1

// string
let num = '250';
console.log(Number(num));

console.log(+num);
console.log(num / 1);
console.log(num * 1);

// numeric string (숫자같은문자)
const width = '104.3px';
console.log(Number(width)); //NaN

console.log(window.parseInt(width, 10)); //window 생략가능
console.log(window.parseFloat(width));
/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(friend)); //false
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean('0')); //true
console.log(Boolean(0)); //false

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
