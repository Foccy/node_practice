//-------------------------------------------async 

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');


//-------------------------------------------destructuring

const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);


const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


//------------------------------------------- spread, rest, map

//const hobbies = ['Sports', 'Cooking'];

//----------------

// for (let hobby of hobbies) {
//     console.log(hobby);
// }
//-----for of

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
//-----map

// hobbies.push('Programming'); // 배열에 새 요소 추가
// console.log(hobbies);
//-----push

//const copiedArray = hobbies.slice(); 
//----- slice()     배열 카피랑 같음, 옵션넣으면 잘려서 나오는 차이

// const copiedArray = [...hobbies];
// console.log(copiedArray);
// const copiedPerson = {...person};
// console.log(copiedPerson);
//----- spread

// const copiedArray = [...hobbies];
// console.log(copiedArray);
// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1,2,3,4));
//----- rest 

