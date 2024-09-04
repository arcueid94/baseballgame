// let swing = document.querySelector('.swing');
// swing.addEventListener('click', function() {
//   let rdArray = [];
//   while (rdArray.length < 3) {
//     let num = Math.floor(Math.random() * 20) + 1;
//     let inputnum = document.querySelectorAll('input');
//     if (rdArray.indexOf(num) == -1) {
//       inputnum[rdArray.length].value = num;
//       rdArray.push(num);
//     }
//   }
// })
let rdArray = [];
while (rdArray.length < 3) {
  let num = Math.floor(Math.random() * 20) + 1;
  let inputnum = document.querySelectorAll('input');
  if (rdArray.indexOf(num) == -1) {
    rdArray.push(num);
  }
}

let inputbtn = document.querySelector('.swing');

let appendTemplete = '<br> <input type="number" min="1" max="20" class="target">' + '<input type="number" min="1" max="20" class="target">' + '<input type="number" min="1" max="20" class="target"> <br>';

inputbtn.addEventListener('click', function() {
  let inputnum = document.querySelectorAll('.target');
  for (let i = 0; i < inputnum.length; i++) {
    if (inputnum[i].value == rdArray[i]) {
      inputnum[i].style.backgroundColor = '#3CB371';
    } else if (rdArray.includes(Number(inputnum[i].value)) == true) {
      inputnum[i].style.backgroundColor = '#069af3';
    } else {
      inputnum[i].style.backgroundColor = 'red';
    }
    inputnum[i].classList.remove('target');
  }
  // for (let j = 0; j < 3; j++) {
  //   let newinput = document.createElement('input');
  //   document.querySelector('#container').appendChild(newinput);
  // }
  document.querySelector('#container').insertAdjacentHTML('beforeend', appendTemplete);
})