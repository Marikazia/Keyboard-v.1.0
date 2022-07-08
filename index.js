// 1. Верстка клавиатуры.
// 2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
// 3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 

const i11 =  document.querySelector('.i-11');
const out1 =  document.querySelector('.out-1');

const keyboard =  document.querySelectorAll('.key'); //получить элементы с классом key
const symbol = {
  "Control" : "ctrl",
}


function t11(event) {

	console.log(event.key);
	let k = event.key;
	if ( symbol[k] !== undefined) k = symbol[k];
	keyboard.forEach(item => item.classList.remove('active'));

	let singleKey = document.querySelector(`.key[data="${k}"]`);
	if (singleKey) singleKey.classList.add('active');

	out1.innerHTML += k;

}

document.querySelector('.i-11').onkeydown = t11;

// Додати он клік для виводу з кнопок в інпут
// let i11 =  document.querySelector('.i-11')
// function t4() {
// 	// return document.querySelectorAll('.key') = document.querySelector('.key').textContent;
// 	console.log('.key');
// }
// console.log('.key');
// // console.log(i11.value);
// console.log(t4);

// // ваше событие здесь!!!
// document.querySelector('.key').onclick = t4;
// .attr('data-product_variations')

// const kk = document.querySelector('.keyboard');
// const dv = document.querySelectorAll('data').value;


// kk.addEventListener("click", f2);


// function f2(event) {
// 	let newi = [];
// 	let sv = event.target.innerText;
// 	newi.push(sv);

// 	console.log(newi);
// 	// return newi;

// }


// function f2(event) {
// 	let newi = [];
// 	let sv = event.target.innerText;
// 	for (let i = o; i < newi.length; i++) {
// 		newi = newi.push(sv);
// 	}


// 	console.log(newi);
// 	return newi;

// }


// kk.oncklick = function(event) {
// 	let i11 = [];
// 	let newi = i11.push(event.target.innerText);
// 	console.log(i11);
// 	i11 += newi;
// 	console.log(i11);
// 	return dv = i11;
// };
// console.log(i11);

// kk.addEventListener("click", function (event) {
// 	let newi = [];
// 	let sv = event.target.innerText;
// 	newi.push(sv);
// 	console.log(newi);
// });

// Array.prototype.push.apply(vegetables, moreVegs);


// let i11 = document.querySelector('.i-11');
// function f4() {
//     // console.log(d1);
//     console.log(i11.value);
//     i11.push(kk.value);
//     showArr('.i-11', kk);
// }

// document.querySelector(kk).onclick = f4;