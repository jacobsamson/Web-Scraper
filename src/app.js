const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        var sumOfPrices = 0
        data.forEach(clothingDescription => {
            clothingAttributes = clothingDescription.title.split('$',2);
            const name = clothingAttributes[0]
            const price = parseInt(clothingAttributes[1])
            sumOfPrices += price
            console.log(name)
            console.log(price)
            const clothingInformation = `<div><h3>` + name + `</h3><p>` + `$` + price + `</p></div>`
            feedDisplay.insertAdjacentHTML("beforeend", clothingInformation)
            console.log(sumOfPrices)    
        });
        const averagePrice = sumOfPrices / data.length
        console.log(averagePrice)
        const averagePriceText = `<div><h1>` + `The average price of clothing from this store is $` + averagePrice.toFixed(2) + `</h1></div>`
        feedDisplay.insertAdjacentHTML("afterend",averagePriceText )
    })
