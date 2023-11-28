/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

//논리곱 할당 연산자
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisisFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisisTruthy: true };

// let age = 91;
// if (14 <= age <= 90) {
//   console.log('~');
// } else {
//   console.log('아니네');
// }

function login() {
  let userName = prompt('누구십니까?');

  if (!userName) return;

  // 취소 버튼과 ESC 누르면 null 이뜸.
  // 어떤 값도 입력하지 않았을 경우 => 빈문자 ''

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if (password.toLowerCase() === 'themaster') {
      console.log('로그인 성공 환영합니다!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다!');
  }
}

function checkUserName(param) {
  if (param === 'admin') {
    return true;
  } else {
    alert('누구야');
    return false;
  }
}

function checkPwd(param) {
  if (param === 'themaster') {
    alert('welcome');
  } else {
    alert('잘못쳤어!!!');
  }
}

function getUserName() {
  let userName = prompt('누구세요?');
  if (userName === null || userName.replace(/\s*/g, '') === '') {
    return alert('취소하셨군요...');
  } else {
    return userName.toLowerCase();
  }
}

function getPwd() {
  let userPwd = prompt('비밀번호를 알려주삼');
  if (userPwd === null || userPwd === '' || userPwd === ' ') {
    alert('비밀번호 치다가 취소하셨군요...');
  } else {
    return userPwd.toLowerCase();
  }
}

function Login() {
  let userName = getUserName();
  if (userName) {
    if (checkUserName(userName)) {
      let userPwd = getPwd();
      if (userPwd) {
        checkPwd(userPwd);
      }
    }
  }
}
Login();
