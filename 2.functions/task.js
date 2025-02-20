function getArrayParams(...arr) {
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
min = Math.min(...arr);
max = Math.max(...arr); 
avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){return 0};
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){return 0};
  let  min;
  let  max;
  let  MaxMinWorker;
  min = Math.min(...arr);
  max = Math.max(...arr); 
  MaxMinWorker = max - min;
  return MaxMinWorker;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){return 0};
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){return 0};
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
    return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    if(maxWorkerResult < result){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult
}


