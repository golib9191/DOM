'use strict'

//9a
// const btn=document.querySelector('button')
// console.log(btn);

//9b
// const btn=document.querySelector('.tga')
// btn.innerHTML= "9b Bajarildi"

// 9c
// let hisob = JSON.parse(localStorage.getItem('score')) || {
//             wins: 0,
//             losses: 0,
//         };
//
//         updateScoreElement();
//
//         function playGame(playerMove) {
//             const computerMove = pickComputerMove();
//             let result = '';
//
//             if (playerMove === 'chikka') {
//                 if (computerMove === 'pukka') {
//                     result = 'Yutqazdingiz.';
//                 } else if (computerMove === 'chikka') {
//                     result = 'G\'alaba qozondingiz.';
//                 }
//             } else if (playerMove === 'pukka') {
//                 if (computerMove === 'pukka') {
//                     result = 'G\'alaba qozondingiz.';
//                 } else if (computerMove === 'chikka') {
//                     result = 'Yutqazdingiz.';
//                 }
//             }
//
//             if (result === 'G\'alaba qozondingiz.') {
//                 hisob.wins += 1;
//             } else if (result === 'Yutqazdingiz.') {
//                 hisob.losses += 1;
//             }
//
//             localStorage.setItem('score', JSON.stringify(hisob));
//             updateScoreElement();
//
//             document.querySelector('.js-result').innerHTML = result;
//             document.querySelector('.js-moves').innerHTML = `Siz ${playerMove} tanladingiz - Computer esa ${computerMove} tanladi`;
//         }
//
//         function updateScoreElement() {
//             document.querySelector('.js-score')
//                 .innerHTML = `Wins: ${hisob.wins}, Losses: ${hisob.losses}`;
//         }
//
//         function pickComputerMove() {
//             const randomNumber = Math.random();
//             let computerMove = '';
//
//             if (randomNumber >= 0 && randomNumber < 1 / 2) {
//                 computerMove = 'chikka';
//             } else if (randomNumber >= 1 / 2 && randomNumber < 1) {
//                 computerMove = 'pukka';
//             }
//
//             return computerMove;
//         }

//9d
// function getInputValue() {
//     const inpt = document.querySelector('.name-input');
//     const inptVal = inpt.value;
//     document.querySelector('.name').innerText = `Sizning ismingiz ${inptVal}`
// }

//9e
// function getInputValue() {
//     const inpt = document.querySelector('.name-input');
//     const inptVal = inpt.value;
//     document.querySelector('.name').innerText = `Sizning ismingiz ${inptVal}`
//     }
//     const btn = document.querySelector('.btn');
//     btn.addEventListener('keydown', function (e) {
//         let x = e.keyCode || e.which;
//         if (x===13)
//         {
//             alert ()
//         }
//     })

//9f
// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('.name-input');
//
//     input.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             getInputValue();
//         }
//     });
// });
//
// function getInputValue() {
//     const input = document.querySelector('.name-input');
//     const inputValue = input.value;
//     document.querySelector('.name').textContent = `Sizning ismingiz ${inputValue}`;
//     input.value = '';
// }
//
// function clearInput() {
//     const input = document.querySelector('.name-input');
//     input.value = '';
//     document.querySelector('.name').textContent = '';
// }

//9h
// function myFunction() {
//     let x = document.getElementById("fname").value;
//     document.getElementById("demo").innerHTML = x;
//