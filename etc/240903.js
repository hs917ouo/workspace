$> npm i moment  // ⇒ require('moment')   // cf. moment.locale(ko|ja|zh-cn|us|...);
moment().format('LLLL'); // Tuesday, August 30, 2022 4:45 PM    ⇐⇒ .format('llll')
moment().format('MMM MMMM Do D DD'); // Aug August 1st 1 01
moment.locale('ko');  // format ⇒ 2022년 8월 30일 화요일 오후 4:45
moment().format('MMM MMMM Do D DD'); // 8월 8월 1일 1 01
const d0 = new Date(0);       const m = moment('2022-12-04');
moment(d0);  // 1970년 1월 1일 목요일 오전 9:00
moment(d0).tz('America/Los_Angeles').format('LLL');  // 1969년 12월 31일 오후 4:00
moment().format('YYYY-MM-DD HH:mm:ss');         //
moment().format('YYYY-MM-DD HH:mm:ss (dd)');    //
moment().format('YYYY-MM-DD HH:mm:ss (dddd)');  //
moment().format('YY-M-D');  //    
moment().format('h:mm a');  //       cf.'a h시 mm분'

moment().startOf('years');  // cf. endOf()
moment().add(3, 'days');   // cf. subtract()
moment().diff(moment('1973-10-05'), 'M');  // 586
moment(new Date(0)).fromNow();  // 53년 전

fn1 = () => {
  date1 = new Date(1970, 1, 1);
  date2 = new Date(1970, 1, 2);
  console.log((date2 - date1) / 1000);
};

fn2 = () => {
  date = new Date();
  tmp_date = new Date(date.getFullYear(), date.getMonth(), 0);
  console.log(tmp_date.getDate());
  day = () => 1 + Math.round((tmp_date.getDate() - 1) * Math.random());
  let arr = [];
  for (i = 0; i < 5; i++) {
    arr.push(day());
  }

  arr.sort((a, b) => a - b);
  console.log(arr);
};

fn3 = () => {
  date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  const day = { 0: "토", 1: "일", 2: "월", 3: "화", 4: "수", 5: "목", 6: "금" };
  console.log(`${day[date.getDay()]}요일`);
};
