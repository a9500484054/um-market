new AirDatepicker('#airdatepicker', {

});


const test = document.querySelector('#airdatepicker')
const text = document.querySelector('.text')
const button = document.querySelector('.button')



button.addEventListener('click', function() {
    text.innerHTML = test.value
})

console.log(test.value)