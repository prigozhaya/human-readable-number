module.exports = function toReadable(number) {
    let result = "";
    let humanNumber = number.toString();
    let numbers = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
    };
    let dozens = {
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety",
    };
  
    if (number < 20) {
      for (let i in numbers) {
        if (+i === number) {
          result = numbers[i];
        }
      }
    }
  
    if (number >= 20) {
      let units = `${numbers[`${humanNumber[1]}`]}`;
      
      if (units === "zero") {
        result = `${dozens[humanNumber[0]]}`;
      } else {
        result = `${dozens[humanNumber[0]]} ${units}`;
      }
    }
  
    if (number >= 100) {
      let dec = "";
      
      if (+humanNumber[1] > 1 && +humanNumber[2] === 0) {
        dec = +humanNumber[1] === 1 ? `${numbers[`${humanNumber[1]}${humanNumber[2]}`]}` : `${dozens[humanNumber[1]]}`;
      } else if (+humanNumber[1] === 0 && +humanNumber[2] !== 0) {
        dec = `${numbers[`${humanNumber[2]}`]}`;
      } else {
        dec = +humanNumber[1] === 1 ? `${numbers[`${humanNumber[1]}${humanNumber[2]}`]}` : `${dozens[humanNumber[1]]} ${numbers[humanNumber[2]]}`;
      }
  
      result = `${numbers[humanNumber[0]]} hundred ${dec}`;
  
      if (+humanNumber[1] === 0 && +humanNumber[2] === 0) {
        result = `${numbers[humanNumber[0]]} hundred`;
      }
    }
    return result;
  }