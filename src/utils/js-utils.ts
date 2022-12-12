import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

export const AssociativeArrayToArray = (obj: object) => {
  return Object.keys(obj).reduce((object, key) => {
    object[key] = obj[key].bend;
    return object;
  }, {});
};

export const monthToString = (month) => {
  switch (month) {
    case 0:
      return 'Января';
    case 1:
      return 'Февраля';
    case 2:
      return 'Марта';
    case 3:
      return 'Апреля';
    case 4:
      return 'Мая';
    case 5:
      return 'Июня';
    case 6:
      return 'Июля';
    case 7:
      return 'Августа';
    case 8:
      return 'Сентября';
    case 9:
      return 'Октября';
    case 10:
      return 'Ноября';
    case 11:
      return 'Декабря';
  }
};

export const dayDifference = (d1, d2) => {
  let t2 = d2.getTime();
  let t1 = d1.getTime();
  // @ts-ignore
  return parseInt((t2 - t1) / (24 * 3600 * 1000));
};

export const getTimeFromMins = (mins) => {   //минуты в часы + минуты. 100 минут => 1 ч. 30 мин.
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (mins < 60) {
    return (mins < 2 && `${mins} минута`)
      || ((2 <= mins && mins <= 4) && `${mins} минуты`)
      || (4 < mins && `${mins} минут`);
  }
  if (minutes === 0) {
    return (hours < 2 && `${hours} час`)
      || ((2 <= hours && hours <= 5) && `${hours} часа`)
      || (5 < hours && `${hours} часов`);
  }
  if (minutes !== 0) {
    return `${hours} ч. ${minutes} мин.`;
  }
};

export const parseHours = (hours: number): string => {
    return (hours < 2 && `${hours} час`)
      || ((2 <= hours && hours < 5) && `${hours} часа`)
      || (5 <= hours && `${hours} часов`);
}

export const parseTime = (mins) => {   //минуты в часы + минуты. 100 минут => 1 ч. 30 мин.
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (mins < 60) {
    return (mins < 2 && `${mins} минута`)
      || ((2 <= mins && mins <= 4) && `${mins} минуты`)
      || (4 < mins && `${mins} минут`);
  }
  if (minutes === 0) {
    return (hours < 2 && `${hours} час`)
      || ((2 <= hours && hours <= 5) && `${hours} часа`)
      || (5 < hours && `${hours} часов`);
  }
  if (minutes !== 0) {
    return `${hours} час ${minutes} мин.`;
  }
};


export const sortFunction = (array) => {
  return array.images.slice().sort(function(first, second) {
    if (first.weight < second.weight || (first.weight === null && second.weight !== null)) {
      return -1;
    }
    if (first.weight > second.weight || (first.weight !== null && second.weight === null)) {
      return 1;
    }
    return 0;
  });
};

export function declOfNum(number, words) {  // number 2, [день дня дней]
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
}

export const useDebounce = (callback, delay: number, setState) => {
  debounce((...args) => callback(...args), delay);
  setTimeout(() => setState(), delay);
};

export const divideItemsInGroups = (items, groupCount) => {
  const result = [];
  let group = 0;

  if (items?.length) {
    items.forEach((item) => {
      if (!result[group]) {
        result[group] = [];
      }

      result[group].push(item);
      group++;
      if (group >= groupCount) {
        group = 0;
      }
    });
  }

  return result;
};

// Sticky scroll -->
export function positionChangeMain(event, elementRef) {
  function positionChange(event, elementRef) {
    if (elementRef.current !== null && elementRef.current?.clientHeight) {
      if (
        event.target.documentElement.scrollTop + window.innerHeight >=
        elementRef.current.clientHeight
      ) {
        elementRef.current.style.position = 'sticky';
        elementRef.current.style.top =
          document.documentElement.clientHeight - elementRef.current.clientHeight - 300 + 'px';

      } else {
        elementRef.current.style.position = 'initial';
        if (elementRef.current.clientHeight > document.documentElement.clientHeight) {
          elementRef.current.style.top =
            document.documentElement.clientHeight - elementRef.current.clientHeight + 'px';
        }
      }
    }
  }

  for (let i = 0; i <= elementRef.length - 1; i++) {
    positionChange(event, elementRef[i]);
  }
}

//size window
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
};


/*
ПРИМЕР ИСПОЛЬЗОВАНИЯ
const firstColumn = useRef()
function scroll(event) {
        positionChangeMain(event, [firstColumn, secondColumn])
}
useEffect(() => {
    document.addEventListener('scroll', scroll)
    return function() {
        document.removeEventListener('scroll', scroll)
    }
}, [])
*/
// <-- Sticky scroll

// Только числа
export function onlyNumber(value, prevValue) {
  return /^-?\d*$/.test(value) ? value : prevValue;
}

export function daysDifference(day) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(day);
  // @ts-ignore
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}


export const formatDate = (input) => {   // гггг-мм-дд => дд.мм.гггг
  const datePart = input?.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[1],
    day = datePart[2];

  return day + '.' + month + '.' + year;
};

export const formDate1 = (d) => {  // 2022-07-14T14:42:00+00:00 => 14 июля 2022
  const date = new Date(d).getDate();
  const month = monthToString(new Date(d).getMonth());
  const year = new Date(d).getFullYear();
  return `${date} ${month} ${year}`;
};


// убираем все теги из текста
export function tagsDel(text) {
  return text && text.length ? text.replace(/(\<(\/?[^>]+)>)/g, '') : '';
}

// валидация e-mail
export const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//  допустимый пароль должен содержать по крайней мере один не буквенно-цифровой символ
export const validatePassword = (pass) => {
  // const re = /([^a-zA-Z\d])+([a-zA-Z\d])+|([a-zA-Z\d])+([^a-zA-Z\d])+/; пароль не менее 6ти символов и один не буквенно цифровой символ
  const re = /([^a-zA-Z\d])+([a-zA-Z\d])+|([a-zA-Z\d])+/;  // пароль не менее 6ти символов
  return re.test(pass);
};

//разбить число на разряды: example 12345 => 12 345. удаляется первый 0 из строки, подходит для input type="text"
//на вход принимает аргумент number
export const numberPerDigit = (n: number) => {
 return  n === null ? 0 :  String(n).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
};


//преобразование числа в сумму прописью, до 99 999 999 включительно
const a = ['', 'один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ', 'десять ', 'одиннадцать ', 'двенадцать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ', 'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '];
const b = ['', '', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ', 'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '];
const c = ['', 'сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ', 'шестьсот ', 'семьсот ', 'восемьсот ', 'девятьсот '];
const d = ['', 'одна ', 'две ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ', 'десять ', 'одиннадцать ', 'двенадцать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ', 'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '];
const e = ['', 'тысяча', 'тысячи', 'тысячи', 'тысячи', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч'];
const f = ['', 'миллион ', 'миллиона ', 'миллиона ', 'миллиона ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов ', 'миллионов '];
export const inWords = (num) => {
  if (num.length > 8) return 'Превышен лимит стоимости проекта.';
  let n = ('000000000' + num).substr(-9).match(/^(\d{3})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  let str = '';
  str += (Number(n[1]) != 0) ? (a[Number(n[1])] || b[Number(n[1][1])] + (a[Number(n[1][2])] || 'миллионов')) + `${Number(n[1]) > 19 ? f[n[1][2]] : f[Number(n[1])]}` : '';
  str += (Number(n[2]) != 0) ? c[Number(n[2])] + (Number(n[3]) === 0 && 'тысяч ' || '') : '';
  str += (Number(n[3]) != 0) ? (d[Number(n[3])] || b[Number(n[3][0])] + (d[n[3][1]] || 'тысяч')) + `${Number(n[3]) > 19 ? e[n[3][1]] : e[Number(n[3])]}` : '';
  str += (Number(n[4]) != 0) ? c[Number(n[4])] : '';
  str += (Number(n[5]) != 0) ? (a[Number(n[5])] || b[n[5][0]] + '' + a[n[5][1]]) : '';
  return str;
};