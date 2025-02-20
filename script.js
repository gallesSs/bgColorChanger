const color = document.querySelector('#color')

const updateColor = (e) => {
    return(e.target.value);
    
}

color.addEventListener('change', updateColor);

const body = document.querySelector('.body')

const btn = document.querySelector('.button')

const updateColorBody = () => {
    body.style.backgroundColor = color.value
}

btn.addEventListener('click', updateColorBody)

// btn.addEventListener('click', () => {
//     body.style.backgroundColor = color.value;
// })