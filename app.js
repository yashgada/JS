const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');
//
// create text node
// const text = document.createTextNode("i'm a text node");
// bodyDiv.appendChild(text);
bodyDiv.innerHTML = `now i'm this`

document.body.appendChild(bodyDiv);
bodyDiv.classList.add('blue')
console.log(bodyDiv.innerHTML);