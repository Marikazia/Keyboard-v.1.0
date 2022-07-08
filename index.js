// 1. Верстка клавиатуры.
// 2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
// 3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 

const i11 =  document.querySelector('.i-11');
const out1 =  document.querySelector('.out-1');
const kb = document.querySelector('.keyboard');
const kk = document.querySelector('.key');
// const kl = document.querySelector('.line');
// const kl1 = document.querySelector('.line-1');
// const kl2 = document.querySelector('.line-2');
// const kl3 = document.querySelector('.line-3');
// const kl4 = document.querySelector('.line-4');
// const kl5 = document.querySelector('.line-5');

// const keyboard =  document.querySelectorAll('.key'); //получить элементы с классом key
const symbol = {
  "Control" : "ctrl",
}
// let key = event.key;
//     if (event.keyCode == 32) key = 'space';
//     if (event.keyCode == 17) key = 'ctrl';
//     if (event.keyCode == 18) key = 'alt';
//     if (event.keyCode == 13) key = 'enter';.

function t11(event) {
	
	console.log(event.key);
	let k = event.key;
	if ( symbol[k] !== undefined) k = symbol[k];
	keyboard.forEach(item => item.classList.remove('active'));

	let singleKey = document.querySelector(`.key[data="${k}"]`);
	if (singleKey) singleKey.classList.add('active');

	out1.innerHTML += k;

}

i11.onkeydown = t11;

///////////////////////



// function f4(event) {
// 	console.log(event.target.innerHTML);
// 	out1.innerHTML += event.target.innerText;
// 	// kb.classList.toggle('active');


// 	// if (event.target.closest(kb)) {
// 	// 	out1.innerHTML += event.target.innerHTML;
// 	// }
// 	// else {
// 	// 	return false;
// 	// }
	
// }

// kb.onclick = f4;

///////////////////

const keys = document.querySelectorAll(".key");
for (const key of keys) {
	key.addEventListener("click", (event) => {
		out1.innerHTML += event.target.innerText;
	})
	
	key.addEventListener("mousedown", (event) => {
		event.target.classList.add('active');
	})

	key.addEventListener("mouseup", (event) => {
		event.target.classList.remove('active');
	})
}

// function getThisKey() {
// 	const myk = document.querySelectorAll(".key");
// 	for (let i=0; i<myk.length; i++) {
// 		console.log([i]);
// 	}
// }


// f31 = () => {
// 	kb.classList.add('active');
// }
// kb.onmousedown = f31;

// f32 = () => {
// 	kb.classList.remove('active');
// }
// kb.onmouseup = f32;


// t12 = () => {
//     document.querySelector('.div-12').classList.toggle('active');
// }
// document.querySelector('.div-12').onmousedown = t12;


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
// 	// let newi = [];
// 	let sv = event.target.innerText;
// 	newi.push(sv);
// 	console.log(newi);
// });

// Array.prototype.push.apply(vegetables, moreVegs);


// function f4() {
//     // console.log(d1);
//     console.log(i11.value);
//     // i11.push(kk.value);
//     // showArr('.i-11', kk);
// }

// kk.onclick = f4;