document.addEventListener('DOMContentLoaded', () => {

const umInvestorProfileForm = document.querySelector('.um-wamm__form')
const umInvestorProfilePopapSg = document.querySelector('.um-wamm-popap-sg')
const umInvestorProfilePopapSgСlose = document.querySelector('.um-wamm-popap-sg__close')


    function formUmInvestorLpPopapFbCheck() {
        if(document.querySelector('.error') === null) {
            umInvestorProfilePopapSg.classList.add('um-wamm-popap-sg--active')
        }
    }

    umInvestorProfileForm.addEventListener('submit', function() {
        setTimeout(() => formUmInvestorLpPopapFbCheck(), 1000)
    })

    umInvestorProfilePopapSgСlose.addEventListener('click', function() {
        umInvestorProfilePopapSg.classList.remove('um-wamm-popap-sg--active')
    })
})