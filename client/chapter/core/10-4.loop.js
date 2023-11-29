/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};
let key = 'createAt';
/* -------------------------------------------------------------------------- */
/*                                     in문                                   */
/*                                  key in Object                             */
/* -------------------------------------------------------------------------- */
// 전역객체를 오염시키자 -> Object.prototype.nickName='tiger';

// console.log(key in javaScript);

// console.log(javaScript.hasOwnProperty(key)); //false
// console.log(javaScript.hasOwnProperty('createAt')); //true

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// console.log({}.prototype.hasOwnProperty.call(javaScript, key));
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
//for..in은 객체를 순환하는 용도로 사용해주세요
//배열은 ..순서보장이 안됨, 성능 x => for..in은 객체에 양보하시길.

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(javaScript[key]);
  }
}

const tens = [10, 100, 1000, 10000];

for (let arr of tens) {
  console.log(arr);
}
