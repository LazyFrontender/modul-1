// ====== 1 =====

function createNumber(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return +("" + a + b + c);
  } else {
    return 0;
  }
}

console.log(createNumber(1, 5, 1));

// ====== 2 =====

const weekDays = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];

function showDay(day) {
  if (day > 7) {
    return "none";
  } else {
    return weekDays[day];
  }
}

console.log(showDay(10));
console.log(showDay(5));

// ====== 3 =====

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

// ====== 4 =====

function showNumber(num) {
  num += "";
  switch (num.length) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    default:
      return "another number length";
  }
}
console.log(showNumber(3));

// ====== 5 =====

function searchMinus(...nums) {
  return nums.every((num) => num > 0);
}

console.log(searchMinus(12, 34, -54, 123));

// ====== 6 =====

function addNumbers(a) {
  let result = 0;
  for (let i = 0; i <= a; i++) {
    result += i;
  }
  return result;
}

console.log(addNumbers(9));

// ====== 7 =====

function perfectNumber(num) {
  let a = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      a += i;
    }
  }
  if (num === a) {
    return true;
  } else {
    return false;
  }
}

console.log(perfectNumber(6));
console.log(perfectNumber(24));

// ====== 8 =====

function numLength(num) {
  return (num += "").length;
}

console.log(numLength(12345678));

// ====== 9 =====

function isPalindrome(num) {
  num += "";
  let arr = num.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(1234321));

// ====== 10 =====

function numbersAddition(num) {
  let total = 0;
  (num += "").split("").forEach((n) => {
    total += Number(n);
  });
  return total;
}

console.log(numbersAddition(1200009345));

// ====== 11 =====

function reverseArray(arr) {
  return [...arr].reverse();
}

console.log(reverseArray([1, 3, 6, 8]));

// ====== 12 =====

function findNumFromArr(num, arr) {
  let leng = 0;
  arr.forEach((n) => {
    if (n === num) {
      leng += 1;
    }
  });
  return leng;
}

console.log(findNumFromArr(6, [2, 4, 6, 6, 4, 4]));

// ====== 13 =====

function findSumEqualToA(array, a) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === a) {
        console.log(`Elementlar: ${array[i]} va ${array[j]}`);
        console.log(`Yig'indisi ${a} ga teng.`);
        return;
      }
    }
  }

  console.log(
    `Bunday ikkita element topilmadi, ularning yig'indisi ${a} ga teng emas.`
  );
}
console.log(findSumEqualToA([3, 5, 8, 2, 6, 7, 1, 9], 10));

// ====== 14 =====

function sortByIncreasing(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortByIncreasing([12, 23, 56, 1234, 565, 1]));

// ====== 15 =====

function sortByIncreasing(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[1];
}

console.log(sortByIncreasing([23, 56, 1234, 565]));
