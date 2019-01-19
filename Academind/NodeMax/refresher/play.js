// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 1500);
//   });
//   return promise;
// };

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//     .then(text => {
//       console.log(text);
//       return fetchData();
//     })
//     .then(text2 => {
//       console.log(text2);
//     });
// }, 2000);

// console.log('Hello!');
// console.log('Hi!');
let command = 'hi'
console.log(command)
{
  let command = 'Hi from inside'
  console.log(command)
}