const square = document.querySelector('.square')

console.log(square);

square.addEventListener('click', () => {
    square.style = `
    background: red;
    border-radius: 50%;
    transition: 0.5s;
    `
})


square.addEventListener('dblclick', () => {
    square.style = `
    background: chartreuse;
    transition: 0.5s;
    `
})

