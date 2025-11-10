//Filtro de empleos por ubicacion.
const filterLocation = document.querySelector('#filter-location')
const location = document.querySelector('#filter-selected-value')
const inputSearch = document.querySelector('#empleos-search-input')

// Function aplicar los filtros
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

// function filteredJobsApply(){
    
//     inputSearch.addEventListener('change', function(){
//     const inputValue = inputSearch.value.toLowerCase()
//     console.log(inputValue)
    
//      const jobs = document.querySelectorAll('.jobs-listings-card')   
//         console.log(jobs)
//     })  
    
    // filterLocation.addEventListener('change',function(){
    //     const selectdValue = filterLocation.value
    // if(selectdValue){
    //     location.textContent = `Filtro seleccionado: ${selectdValue}`
    // }
    // else{
    //     location.textContent = `No hay filtro seleccionado`
    // }
    // const jobs = document.querySelectorAll('.jobs-listings-card')    
    //  jobs.forEach(job =>{
    //     const modalidad = job.getAttribute('data-modalidad').toLowerCase()
    //     if(selectdValue === ''|| selectdValue === modalidad){
    //         job.style.display = 'flex'
    //     }
    //     else{
    //         job.style.display = 'none'
    //     }
    // })
//}
//La logica para Buscar el Input con textcontent y colocando en minusculas los stings para comparar
// inputSearch.addEventListener('input', function(){
//     const inputValue = inputSearch.value.toLowerCase()
//     console.log(inputValue)
//     const jobs = document.querySelectorAll('.jobs-listings-card')// al momento de renderisar almacena el valor aqui en jobs
//     console.log(jobs)
//     if(inputValue){
//         jobs.forEach(job =>{
//             const jobText = job.textContent.toLowerCase()
//             if(jobText.includes(inputValue)){
//                 job.style.display = 'flex'
//             }
//             else{
//                 job.style.display = 'none'
//             }
//         })
//     }
     
//     }) 



//inputSearch.addEventListener('change',filteredJobsApply)