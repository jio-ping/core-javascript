/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 'yejunii@gmail.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;
// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH); //10px
console.log(null ?? boolean); //false
console.log(boolean ?? WIDTH); //false
console.log('' || WIDTH); // 10px
console.log('' ?? boolean); // ""

//Logical Assignment operation (논리할당연산자 = 논리곱, 논리합 할당 바로 ~ )
let x;
let y;

x ||= y; //x 가 false 일 때 y 값을 x에 할당
x &&= y; // x가 true 일때 y 값을 x에 할당
x ??= y; //x가 undefined, null 일때 y 값을 x에 할당

let title;
title ||= '파랑';
console.log(title); //파랑

let and;
and &&= '알파카';
console.log(and); // undefined

let person = {
  firstName: 'jyo',
  lastName: 'yo~',
};

person.lastName &&= 'nam';

console.log(person);

let user = {
  name: 'kindtiger',
};

user.nickName ??= 'tiger';
