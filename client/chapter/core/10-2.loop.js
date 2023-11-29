/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// do {
//   console.log(repeat);
//   if (repeat < 0) {
//     // console.log('최초실행');
//     break;
//   }
//   repeat--;
// } while (repeat);

// let count = 0;
// let repeat = +prompt();
// do {
//   if (count >= 10) {
//     break;
//   }

//   console.log(++count);
// } while (repeat--);

let first = document.querySelector('.first');
let sercond = document.querySelector('.second');

console.log(first);
console.log(first.nextSibling); //#text
console.log(first.nextSibling.nextSibling); //주석
console.log(first.nextSibling.nextSibling.nextSibling.nextSibling); //second class !

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}

const second = next(first);
console.log(second);

function prev(node) {
  do {
    node = node.previousSibiling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  return node;
}
/* -------------------------------------------------------------------------- */
/*                      nextElmentSibling 쓰면 다 ~~해결돼요                      */
/* -------------------------------------------------------------------------- */
