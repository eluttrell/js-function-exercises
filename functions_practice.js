// Positive Numbers:
// var positiveNumbers = function(arr) {
//   function pos_num(n) {
//       return n > 0;
//   }
//   var pos_arr = arr.filter(pos_num);
//   console.log(pos_arr);
// };
// positiveNumbers([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);

// Even Numbers
// var evenNumbers = function(arr) {
//   function even_num(n) {
//     return n % 2 === 0;
//   }
//   var ans = arr.filter(even_num);
//   console.log(ans);
// };
// evenNumbers([1,2,3,4,5,6,7,8,9,10]);

// Square Numbers
// var squareTheNumbers = function(arr) {
//   function square(n) {
//     return Math.pow(n, 2);
//   }
//   var ans = arr.map(square);
//   console.log(ans);
// };
// squareTheNumbers([1,2,3,4,5,6,7,8,9,10]);

// Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var cities1 = function(arr) {
  function temp(n) {
    return n.temperature < 70;
  }
  var ans = arr.filter(temp);
  console.log(ans);
};
cities1(cities);
