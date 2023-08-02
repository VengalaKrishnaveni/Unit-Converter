const inputValue = document.getElementById('input-value')
const LengthResult = document.getElementById('length')
const volumeResult = document.getElementById('volume')
const massResult = document.getElementById('mass')
const convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener('click', function() {
    let input = inputValue.value
    convertLength(input)
    convertVolume(input)
    convertMass(input)
    inputValue.value = ''
})


function convertLength(input) {
    const feet = input * 3.2808
    const meter = input / 3.2808
    LengthResult.textContent = `${input} meter(s) = ${feet.toFixed(3)} feet | ${input} feet = ${meter.toFixed(3)} meters`

}

function convertVolume(input) {
    const liter = input * 3.7854
    const gallon = input / 3.7854
    volumeResult.textContent = `${input} liter(s) = ${gallon.toFixed(3)} gallon | ${input} gallon = ${liter.toFixed(3)} liters`
}

function convertMass(input){
    const kg = input * 0.453592
    const pound = input / 0.453592
    massResult.textContent = `${input} kg(s) = ${pound.toFixed(3)} pound | ${input} pound = ${kg.toFixed(3)} kg`
}