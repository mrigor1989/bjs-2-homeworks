"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d =  Math.pow(b, 2) - 4*a*c
  if(d == 0){
    arr.push(-b/(2*a));
  }else if(d > 0){
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/1200;
  let credit = amount - contribution;
  let mounthPay = credit*(percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let total = mounthPay*countMonths;
  return +total.toFixed(2);
}