let info = [
    {
        name: "Merit",
        scores: {
            firstTour: 4,
            secondTour: 8,
            thirdTour: 6,
            fourthTour: 5,
            fifthTour: 6,
        }
    },
    {
        name: "Cambridge",
        scores: {
            firstTour: 5,
            secondTour: 8,
            thirdTour: 10,
            fourthTour: 10,
            fifthTour: 5,
        }
    },
    {
        name: "Everest",
        scores: {
            firstTour: 8,
            secondTour: 9,
            thirdTour: 10,
            fourthTour: 10,
            fifthTour: 10,
        }
    },
    {
        name: "Result",
        scores: {
            firstTour: 9,
            secondTour: 9,
            thirdTour: 6,
            fourthTour: 7,
            fifthTour: 8,
        }
    },
    {
        name: "Registon LC",
        scores: {
            firstTour: 10,
            secondTour: 9,
            thirdTour: 10,
            fourthTour: 10,
            fifthTour: 10,
        }
    },
]



let elTableBody = document.querySelector("#t_body")
let elResultButton = document.querySelector("#result_button")
let elTableRowTemplate = document.querySelector("#row_template").content

function counterObjectValues(object) {
    let counter = 0
    for (let key in object) {
        counter += object[key]
    }
    return counter
}

function render(array, wrapper) {
    let rowItem = document.createDocumentFragment()
    
    array.forEach((item, index) => {
        var listTemplate = elTableRowTemplate.cloneNode(true)
        
        listTemplate.querySelector("#order_number").textContent = index + 1
        listTemplate.querySelector("#name").textContent = item.name
        listTemplate.querySelector("#first").textContent = item.scores.firstTour
        listTemplate.querySelector("#second").textContent = item.scores.secondTour
        listTemplate.querySelector("#third").textContent = item.scores.thirdTour
        listTemplate.querySelector("#fourth").textContent = item.scores.fourthTour
        listTemplate.querySelector("#fifth").textContent = item.scores.fifthTour
        
        let totalScore = counterObjectValues(item.scores)
        
        listTemplate.querySelector("#result").textContent = totalScore
        
        rowItem.appendChild(listTemplate)
    })
    wrapper.innerHTML = null
    wrapper.appendChild(rowItem)
}

render(info, elTableBody)

elResultButton.addEventListener("click", ()=> {
    console.log("SALOM");
    let newArray = info.sort((b, a)=> {
        let itemA = counterObjectValues(a.scores)
        let itemB = counterObjectValues(b.scores)

        if(itemA < itemB) {
            return -1
        }else if(itemA > itemB) {
            return 1
        }else {
            return 0
        }

    })

    render(newArray, elTableBody)
})

