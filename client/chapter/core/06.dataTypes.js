/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;

console.log(typeof empty); //object

// 2. 값이 할당되지 않은 상태

let undef = undefined;
console.log(typeof undef); //undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// String literal(literal = 값)
const double = 'hello';
const single = 'single';
const backtick = `hello ${10 + 20}`;

// String constructor
const str = new String('hi');

console.log(typeof backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const num = new Number(123); // number constructor

const integer = 150; //number literal
const floatingPointNumber = 10.123;

console.log(typeof integer); //number

console.log(typeof Infinity);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigNumber = 123n;
console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = { name: 'tiger' };
console.log(typeof obj);

const object = new Object({ name: 'jyo' }); // object constructor

// 8. 고유한 식별자(unique identifier)
// symbol은 정말 유니크한 식별자를 가져요
const unique = Symbol('uuid');

const unique2 = Symbol('uuid');

console.log(typeof unique);

console.log(unique === unique2); //false

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

console.log(typeof 1 + 2); //number2

// 2) 함수 typeof()

console.log(typeof (1 + 2)); // number

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 25,
  sayHi: function () {
    console.log('hello');
  },
  alert1: function () {}, // normalfunction
  alert2() {}, //consise method
  alert3: () => {}, //arrow function
};
console.log(user);

// Array(순서를 가짐)
const newArray = new Array([1, 2, 3, 4]);
let arr = [10, 100, 1000, 1, 2, 3, 4];

Array(10); //[Empty * 10]
Array(10).fill(null); //[null null null null null null null null null null]

for (let i of arr) {
  console.log(i);
}

// function

//함수 vs class => 붕어빵틀

function 붕어빵틀(재료) {
  // 재료: parameter(인자, 매개변수)
  return `냠냠 ${재료} 붕어빵`;
}

let a = 붕어빵틀('팥'); // arguments(인수)

console.log(a);

// this
