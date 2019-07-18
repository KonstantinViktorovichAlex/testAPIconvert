const valut = document.getElementById('valut')
const money = document.getElementById('money')
const convertInp = document.getElementById('convertInp')
const result = document.getElementById('result')
const resultButton = document.getElementById('resulButton')
const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
let valutes = null

async function main(){
    const response = await fetch(url)
    const data = await response.json()
    
    valutes = data.Valute

    valut.addEventListener('change', ()=> {
        
        if(valut.value === 'eur'){
            money.innerHTML = `Евро ${valutes.EUR.Previous}`
        }else if(valut.value === 'dollar'){
            money.innerHTML = `Доллар США ${valutes.USD.Previous}`
        }else if(valut.value === 'byrub'){
            money.innerHTML = `Белорусский рубль ${valutes.BYN.Previous}`
        }else if(valut.value === 'default'){
            money.innerHTML = 'курс вылюты'
        }
    })

    resultButton.addEventListener('click', () => {

        if(valut.value === 'eur'){
           let res = convertInp.value * valutes.EUR.Previous
           result.innerHTML = `${res.toFixed(1)}`
        }else if(valut.value === 'dollar'){
            let res = convertInp.value * valutes.USD.Previous
            result.innerHTML = `${res.toFixed(1)}`
        }else if(valut.value === 'byrub'){
            let res = convertInp.value * valutes.BYN.Previous
            result.innerHTML = `${res.toFixed(1)}`
        }
    })
}
main()

