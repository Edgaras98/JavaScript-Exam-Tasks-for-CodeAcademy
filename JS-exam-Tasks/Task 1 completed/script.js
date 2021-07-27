/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = document.getElementById('search').value
    const weightLbs = document.getElementById('weightLbs')
    const weightGrams = document.getElementById('weightGrams')
    const weightOz = document.getElementById('weightOz')
    const div = document.getElementById('output')
    const p = document.querySelectorAll('p')

    // Counting
    const calcWeightLbs = weight * 2.2046
    const calcWeightGrams = weight / 0.0010000
    const calcWeightOz = weight * 35.274
    weightLbs.textContent = `YOUR WEIGHT IN LBS IS: ` + calcWeightLbs.toFixed(1)
    weightGrams.textContent = `YOUR WEIGHT IN GRAMS IS: ` + calcWeightGrams.toFixed(0)
    weightOz.textContent = 'YOUR WEIGHT IN OZ IS' + calcWeightOz.toFixed(1)

    // Styling the output with JS

    div.style.width = '80vw'
    div.style.backgroundColor = 'white'
    div.style.margin = '0 auto'
    div.style.padding = '2rem'
    div.style.fontSize = '2rem'
    div.style.textAlign = 'left'
  })
