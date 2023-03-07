/*function dublicateString(str) {
    //return str ? `${str}${str}` : `String is empty`
    //if (!str) {return "String is empty"} else {return str + str}
    return str.length === 0 ? "String is empty" : str + str
}
console.log(dublicateString("123"))

function normalize(arr) {
    let maxEl = -Infinity;
    arr.forEach(function (item) {
        const absItem = Math.abs(item);
        if (maxEl < absItem) {
            maxEl = absItem;
        }
    });

    if (maxEl === 0) {
        return arr;
    }

    return arr.map(function (item) {
        return item / maxEl;
    });
}

function maxEvenNumber(arr) {
    return arr.filter(el=>el%2===0).reduce((acc,el) => el > acc ? el : acc, -Infinity)
    }

console.log(maxEvenNumber([1,2,3,4,5,6]))


// фунция getRoute принимает на вход три точки a, b, c
// точка - массив из 2 элементов, нулевой элемент массива будем считать х, первый элемент - у
// пример: [ 0.5, 3 ] x = 0.5, y = 3
// задача: вернуть массив из трёх элементов, указывающий в каком порядке надо проходить точки,
// чтобы пройденное расстояние было наименьшим

function getRoute(arr1, arr2, arr3) {
    function getDistance(p1, p2) {
      const c = Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
      return c;
    }
    const distances = [];
    distances.push(getDistance(arr2, arr3));
    distances.push(getDistance(arr1, arr3));
    distances.push(getDistance(arr2, arr1));
  
    let l = 0;
    for (let i = 0; i < distances.length; i++) {
      if (distances[i] > l) {
        l = distances[i];
      }
    }
    const centerPoint = distances.indexOf(l);
    return [(2 + centerPoint) % 3, centerPoint, (centerPoint + 1) % 3];
  }
  
  console.log(getRoute([0, 5], [-1, 0], [1, 4]));
    

  function convertToBitwise(n){ //24 / 2 = ост 0, целая 12
    const arr = [];
   let b = n;
   while(b > 0){
    const a = b % 2 
    arr.push(a)
    b = Math.floor(b / 2)
   }
return arr.reverse().join('')
}
console.log(convertToBitwise(14))
*/
/*
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, el) => acc + el, 0)/classPoints.length <= yourPoints ? true : false
}
  console.log(betterThanAverage([2, 3], 5))



function sumArray(array) {
  if (!Array.isArray(array)|| array.length === 0 || array.some((el) => el === null))
 {
  return 0
 }
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);
  
 return array.filter((el)=>el!=maxValue).filter(el=>el!=minValue).reduce((acc, sum) => acc + sum, 0)
}

console.log(sumArray([ 0, 1, 6, 10, 10 ]))


function sumArray(array) {
  if (!Array.isArray(array)|| array.length === 0 || array.some((el) => el === null))
  {
    return 0
   }
  // отфильтровываем наибольший и наименьший элементы
  const filteredArray = array.filter((num) => {
    return num !== Math.max(...array) && num !== Math.min(...array);
  });

  // суммируем элементы
  const sum = filteredArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
}

console.log(sum);
*/

function hanoiTower(n, source, helper, target) {
  if (n > 0) {    
    // Перенести n-1 диск с исходной палочки на вспомогательную палочку    
    hanoiTower(n - 1, source, target, helper); 
    // Перенести оставшийся диск с исходной палочки на целевую палочку
    target.push(source.pop());
    console.log(`Move disk ${n} from ${source} to ${target}`);
    // Перенести n-1 диск с вспомогательной палочки на целевую палочку    
     hanoiTower(n - 1, helper, source, target);
     }
    } 

// Пример использования функции для сортировки башни из 5 дисков
const tower = [3, 2, 1];
const sourcePole = tower;
const helperPole = [];
const targetPole = [];
hanoiTower(tower.length, sourcePole, helperPole, targetPole);
console.log(`Sorted tower: ${targetPole}`); // [ 3, 2, 1]


console.log(55 % 10 % 2 )