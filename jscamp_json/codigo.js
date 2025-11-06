const filterLocation = document.querySelector('#filter-location')
const location = document.querySelector('#filter-selected-value')
const inputSearch = document.querySelector('#empleos-search-input')

// Function to apply both filters
function applyFilters() {
    const selectedValue = filterLocation.value.toLowerCase()//transforma en minusculas
    const inputValue = inputSearch.value.toLowerCase()//
    const jobs = document.querySelectorAll('.jobs-listings-card')//La lista de la pagina la clase para crear los elementos

    jobs.forEach(job => {
        const modalidad = job.getAttribute('data-modalidad').toLowerCase()
        const jobText = job.textContent.toLowerCase()
        
        const matchesLocation = selectedValue === '' || selectedValue === modalidad
        const matchesSearch = inputValue === '' || jobText.includes(inputValue)
        
        // Show job only if it matches both filters
        job.style.display = matchesLocation && matchesSearch ? 'flex' : 'none' // condición ? valorSiVerdadero : valorSiFalso
    })

    // Update location filter text
    if(selectedValue) {
        location.textContent = `Filtro seleccionado: ${selectedValue}`
    } else {
        location.textContent = 'No hay filtro seleccionado'
    }
}

// Add event listeners
inputSearch.addEventListener('input', applyFilters)
filterLocation.addEventListener('change', applyFilters)