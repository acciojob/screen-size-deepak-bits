//your JS code here. If required.
const h1 = document.createElement('h1');
// console.log(h1);
h1.id = 'sizeInfo';

helper();
document.body.appendChild(h1);

window.addEventListener('resize', helper)

function helper() {
    const x = window.innerWidth;
	const y = window.innerHeight;

	const textNode = document.createTextNode(`Width: ${x} and Height: ${y}`);

    h1.innerHTML = '';
	h1.appendChild(textNode);
}