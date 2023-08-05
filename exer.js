/*const pass = 'jakuhghgsffdfwww'

if(pass.length > 10 && pass.includes('!')) {
    console.log('dobre haslo');
} else {console.log('masz za krotkie haslo');}*/

/*function pressed(){
    let text = document.getElementById('inp').value;
    if (text === 'red'){
        document.getElementById('header').style.color = 'red';
    }else if(text==='green'){
        document.getElementById('header').style.color = 'green';
    }else if(text==='blue'){
        document.getElementById('header').style.color = 'blue';
    }else{
        document.getElementById('header').style.color = 'black';
    }
}*/
 /*const x = 100
 if (x > 20 ) {
    console.log('s(x)' > 20);
 }else{
    console.log('s(x)' < 20);
 }

 const newX = x > 20 ? 's{x} > 20' : 's{x} < 20'
 console.log(newX);*/

 /*const x = 50
 const y = 30

 if (x > y) {
    console.log(`${x} jest wieksze niz ${y}`);
 }*/

/*let color = 'blue'
 let newColor = 'green'

 if (color === newColor) {
    console.log('kolory sie zgadzaja');
 }else{console.log('kolory sie nie zgadzaja');}*/

 /*let x = 100
 let y = 50

 if (x > y) {
    console.log('x > y');
 }else if (x === y) {
    console.log('x = y');
 }else if (x < y) {
    console.log('x < y');
 }*/


 /*let promo = '20%'
 switch (promo) {
    case '10%':
        console.log('banany w promce po 10ct');
        break;
    case '30%':
        console.log('mango dzisiaj w promce');
    case '20%':
        console.log('dzisiaj dobra promka');  
    // case 'x': 
    //console.log('mbjhvjhvgzj');  
    default:
        console.log('sorki, dzisiaj mamy to co mamy');
        break;
 }*/

/*let x = 10

 if (x % 2 === 0) {
    console.log('liczby sa parzyste');
 }*/

 /*let x = 50

 if (x >= 100) {
    console.log(' x > 100 ');
 }else if (x < 100 && x > 30) {
    console.log(('x jest sredniakiem').toUpperCase());
 }else if (x <= 30) {
    console.log('x jest maly');
 }*/

 /*let x = 50;
 let text;
 if (x >= 100) {
   text = ' x > 100 ';
 }else if (x < 100 && x > 30) {
    text = 'x jest sredniakiem';
 }else if (x <= 30) {
    text = 'x jest maly';
 }

 console.log(text.toUpperCase());*/

//  const color = ['blue', 'white','red'];

//  for (let i = 0; i < color.length; i++) {
//    console.log(color[i]);
   
//  }


// let miasta = ['Krakow', 'Warszawa', 'Opole', 'Lodz']

// for (let i = 0; i < miasta.length; i++) {
//    console.log(`to miasto nazywa sie ${miasta[i].toUpperCase()}`);
   
// }

// let x = 0

// while (x < 10) {
//    x = x + 2
//    console.log(x);
// }

// let x = 20
// do { 
//    x -= 3
//    //console.log(x);
// } while (x > 0);

// console.log(x);

// let numbers = [5,8,10,23,48,60]
//  for (const number of numbers) {
//    console.log(number / 5);
//  }


// let numbers = [5,8,10,23,48,60]
//  for (const number of numbers) {
//    if (number %  2 === 0) {
      
//    console.log(`liczba ${number} jest parzysta`);}
//  }

//01.08.2023

// let ourArray = [];
// for (let i = 0; i < 5; i++) {
//    ourArray.push(i);
   
// }
// console.log(ourArray);


// const numbers = [5,8,10,23,48,60];

// for (const number of numbers) {
//     console.log(number / 5);
// }

// const numbers = [5,8,10,23,48,60];

// for (const number of numbers) {
//       if( number % 2 === 0){
//          console.log(`%cliczba ${number} jest parzysta`,'background-color: gold; color:black');
//       }else{
//          console.log(`licba ${number} jest nieparzysta`);
//       }
// }

// const colors = [ 'red', 'gold', 'green']

// colors.pop('blue')
// console.log(colors);
 
// 03.08.2023 Data-Lists

// const drinks = ['pepsi', 'kawa', 'herbata']
// const meals = ['schab', 'spagetti', 'burgery']
// const menu = [...drinks, ...meals]
// //console.log(... meals, ...drinks);

// console.log(menu);


// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)

// console.log(numbers2);

// const numbers3 = numbers.slice(-3)
// console.log(numbers3);

// const randomStuff = colors.splice(-2)
// console.log(randomStuff);

// const newCars = cars.splice(2,4, 'test')
// console.log(cars);

// console.log(newCars);

// const lit = ['c', 'd']

// // console.log( lit);

// lit.unshift('a','b')

// lit.push('e','f')

// console.log(lit);

// console.log(lit.includes('c'));

// const numbers = [1,2,3]

// const food = ['🥮','🥪', '🧁']
//  const kombi = [...numbers, ...food]

//  console.log(kombi);

//  const nKombi = numbers.concat(food)

//  console.log(nKombi);



// const tab = [1, 5, 13, 26, 48];

// const multipliedTab = tab.map(x => x * 5);

// console.log(multipliedTab);

// // for (const num of multipliedTab) {
// //    if (num % 2 === 0) {
// //      console.log(num);
// //    }
// //  }

//  for (const num of multipliedTab) {
//     if (num % 2 === 0)
//     {
//       console.log(num);
//     }
//  }

// const colors = ['blue']

// colors.unshift('green')

// colors.push('black')
// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
//    console.log(`moj ulubiony kolor to ${colors[i].toUpperCase()}`);
   
// }

// const autos = 'Audi, Mercedes,  BMW, Nissan, Dodge'

// const carsArr = autos.split(', ');

// carsArr.length > 3 ?console.log('Jest ok') : console.log('Nie jest ok');

// console.log(carsArr);


//04.08.2023

// function hello(name, age) {
        
//    console.log(`czesc mam na imie ${name}i mam ${age} lat`);
// }

// hello('Jakub', 40)

// const days = ['wtorek', 'sroda', 'czwartek']

// days.forEach(function(day){
//    console.log(day);
// }
// )

// const poleProstokata = (szerokosc, wysokosc) => console.log(szerokosc * wysokosc);
// poleProstokata(5,4)

// const hello = (name = 'drogi uzytkowniku') => {
//    console.log(`Czesc ${name} jak sie masz?`);
// }

// hello('Klaudia')

// let score; 

// const add = (x , y) => {

//    score = x + y
   
//    if (score % 2 === 0) {
//       evenMsg()
//    }else{
// oddMsg()
//    }
// }


// const evenMsg = () => {
//    console.log(`Liczba ${score} jest parzysta`);
// }


// const oddMsg = () => {
//    console.log(`Liczba ${score} jest nieparzysta`);
// }

// add()

// 05-08.2023

let C

let temp 

const fahrenheit = (c) => {
     C = c
     temp = C * 1.8 + 32

     console.log(`${c}°C = ${temp}°F`);
}

fahrenheit(20)