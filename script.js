const bgcolor = ['Yellow', 'Red', 'Blue', 'Grey']
const btn = document.getElementById('btnclick')
const color = document.querySelector('.color')


const colorgenerator = () => {
    const randomcolor = Math.floor(Math.random(bgcolor) * bgcolor.length)
    document.body.style.backgroundColor = bgcolor[randomcolor]
    color.textContent = bgcolor[randomcolor]
    console.log(randomcolor)
}

btn.addEventListener('click', (e) => {
    colorgenerator()
})