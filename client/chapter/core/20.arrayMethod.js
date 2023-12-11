/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(Array.isArray({ key: 1 }));
console.log('Is array [1,2,3,4,5]?', Array.isArray([1, 2, 3, 4, 5]));

function normalIsArray(data) {
  //return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

normalIsArray([1, 2, 3, 4, 5]);

/* 요소 순환 ---------------------------- */

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];
// forEach

people.forEach((item) => console.log(item)); //{id: 0, name: '김다영', job: '프론트엔드 개발자', age: 25, imageSrc: 'ASdkl31'} console.error('..',..)
people.forEach((item) => console.log(item.job));

const span = document.querySelectorAll('span');

// 여러 항목들을 이벤트 바인딩을 하는데 효과적인가 ->  no
/* 이벤트를 세개나 추가해버린거임 
   이벤트 위입이라는 키워드를 추천해요 🐬 => event delegation
   
  요소들을 감싸고 있는 부모가 이벤트를 갖고있지 
*/
span.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', () => {
    // console.log('clicked!');
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse

const arr = [1, 2, 3, 4, 5, 5, 6, 6, 78, 8, 90];

const reverseArray = arr.reverse();
// console.log(reverseArray); // [90, 8, 78, 6, 6, 5, 5, 4, 3, 2, 1]
// console.log(arr); //[90, 8, 78, 6, 6, 5, 5, 4, 3, 2, 1]➡️ 원형이 파괴됐습니다 ~

const arr2 = ['예', '노', '밤', '은', '하'];
console.log(arr2.toReversed()); //['하', '은', '밤', '노', '예']
console.log(arr2); //['예', '노', '밤', '은', '하'] -> 원본을 파괴하지 않아요 :)

// splice
// arr.splice(-2, -1);
console.log(arr.toSpliced(-1, -2, 'javascript', 'css', 'react'));

// sort

const a = arr.sort((a, b) => {
  return b - a;
});

/* 새로운 배열 반환 ------------------------ */

// concat

// slice
// toSorted
// toReversed
// toSpliced
// map
/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

//
const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
people.find((item) => item.name === '송현규');

people.find((item) => item.age < 30);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter : true가 떨어지는 모든 것을 찾아줘용

people.filter((item) => item.age < 30);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}<div>`,
  ''
);

// document.body.insertAdjacentElement('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split

const string = '예준 노아 밤비 은호 하민';

string.split(' ');
const stringToArray = string.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
