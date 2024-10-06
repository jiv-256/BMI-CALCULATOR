const form = document.querySelector('form')
form.addEventListener('submit',function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a vslid height"
    }
    else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a vslid weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // show the result
        if(bmi <= 18.6){
            const chbmi = "Under weight"
            result.innerHTML = `<span>${bmi} : ${chbmi}</span>`;
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            const chbmi = "Under Range"
            result.innerHTML = `<span>${bmi} : ${chbmi}</span>`;
        }
        else{
            const chbmi = "Over weight"
            result.innerHTML = `<span>${bmi} : ${chbmi}</span>`;
        }
    }

})