/* ---------------- */
/* Switch           */
/* ---------------- */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;
switch (thisTime) {
  case '아침':
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case '점심':
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    console.log('잠잘게');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

function routine(thisTime) {
  if (thisTime === '아침') {
    console.log('뉴스 기사 글을 읽는다.');
  } else if (thisTime === '점심') {
    console.log('자주 가는 식당에 가서 식사를 한다.');
  } else if (thisTime === '저녁') {
    console.log('동네 한바퀴를 조깅한다.');
  } else if (thisTime === '밤') {
    console.log('친구에게 전화를 걸어 수다를 떤다.');
  } else {
    console.log('잘래~');
  }
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  switch (num) {
    case 0:
      return '일요일';

    case 1:
      return '월요일';

    case 2:
      return '화요일';

    case 3:
      return '수요일';

    case 4:
      return '목요일';

    case 5:
      return '금요일';

    case 6:
      return '토요일';
  }
}

let today = getDay(getRandom(7));
console.log(today);

//요일뽑기 ㅇ
// weekend라는 함수를 만들자 전달받은 대상이 월~금 : 평일임 토~일: 주말입니다 .

function weekend(today) {
  return today.includes('토')
    ? '토요일'
    : today.includes('일요일')
      ? '일요일'
      : '평일';
}
console.log(weekend(today));
