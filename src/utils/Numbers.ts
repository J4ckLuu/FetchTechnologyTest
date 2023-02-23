function handleNaturalNum(number: number | string, separator: string) {
  let parts = number.toString();
  parts = parts.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts;
}

function handleDecimalNum(
  decimalNum: string,
  extend: number,
  simplify: boolean = false,
) {
  const zero = '0';
  if (decimalNum.length > extend) {
    decimalNum = decimalNum.substr(0, extend);
  } else if (
    (decimalNum.length > 0 && decimalNum.length < extend && !simplify) ||
    decimalNum === ''
  ) {
    const missingZero = zero.repeat(extend - decimalNum.length);
    decimalNum = decimalNum.concat('', missingZero);
  }
  return decimalNum;
}
/**
 * Format number to custom currency
 * @param {*} num number input
 * @param {*} extend extend decimal number
 * @param {*} separator separator character
 * @param {*} simplify (true/false) remove all 0 end of decimal number
 * @returns String of formatted number, Format the input(1000000.556...) into (1,000,000.56)
 */
export function formatNumber(
  num: string | number,
  extend = 3,
  separator = ',',
  simplify = false,
) {
  const re = /^\-?\d+\.?\d*$/;
  if (!re.test(num)) {
    return num;
  } else {
    const number = num.toString();
    const numbers = number.split('.');
    let naturalNum = numbers[0] || number;
    let decimalNum = numbers[1] || '';
    if (decimalNum && extend !== 0) {
      decimalNum = handleDecimalNum(decimalNum, extend, simplify);
    }
    if (naturalNum.length > 3) {
      naturalNum = handleNaturalNum(naturalNum, separator);
    }
    let output = naturalNum;
    if (extend !== 0 && parseInt(decimalNum, 10) > 0) {
      output = naturalNum.concat('.', decimalNum);
    }
    return output;
  }
}
