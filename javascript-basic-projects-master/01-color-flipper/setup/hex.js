const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexValue = '#'
    // get random hex value
    for (let i = 0; i < 6; i++){
        hexValue += hex[Math.floor(Math.random()*hex.length)]
    }
    // set background to the random hex value
    document.body.style.backgroundColor = hexValue;
    // set the span content to the random hex value
    color.textContent = hexValue;
})