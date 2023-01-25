const bgcolorhex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector('#btnclick')
const color = document.querySelector('.color')


randomhex = (e) => {
    return Math.floor(Math.random() * bgcolorhex.length)
}

btn.addEventListener('click', (e) => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += bgcolorhex[randomhex()]
        console.log(hexColor)
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor

})

// function getRandomNumber() {
//     return Math.floor(Math.random() * bgcolorhex.length)
// }




// btn.addEventListener('click', (e) => {
//     let hexColor = '#'
//     for (let i = 0; i < 6; i++) {
//         hexColor += bgcolorhex[hexcolorgenerator()]
//     }



//     hexcolorgenerator()

// })

// const hexcolorgenerator = () => {
//     const randomhex = Math.floor(Math.random() * bgcolorhex.length)
//     document.body.style.backgroundColor = bgcolorhex[randomhex]
//     color.textContent = bgcolorhex[randomhex]
// }