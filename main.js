const getResButton = document.querySelector('button')
const getResidents = document.querySelector('div')

const clickedButton = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then (response => {
        let { residents } = response.data.results[0]
        for(let i = 0; i < residents.length; i++) {
        axios.get(residents[i]).then(response => {
            let h2 = document.createElement('h2')
            h2.textContent = response.data.name
            getResidents.appendChild(h2)
    })
}
console.log(residents)
})
}



getResButton.addEventListener('click', clickedButton)