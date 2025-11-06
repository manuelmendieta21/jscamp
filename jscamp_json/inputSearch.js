



//Filtro de empleos por ubicacion.
const filteredInput = document.querySelector('.empleos-search-input')


filteredInput.addEventListener('change', function(){
    const inputValue = filteredInput.value.toLowerCase()
    console.log(inputValue)

})



// const filterLocation = document.querySelector('#filter-location')
// const location = document.querySelector('#filter-selected-value')


// filterLocation.addEventListener('change',function(){
    
//     const selectdValue = filterLocation.value
    
//     if(selectdValue){
//         location.textContent = `Filtro seleccionado: ${selectdValue}`
//     }
//     else{
//         location.textContent = `No hay filtro seleccionado`
//     }
//     const jobs = document.querySelectorAll('.jobs-listings-card')    
//      jobs.forEach(job =>{
//         const modalidad = job.getAttribute('data-modalidad')
//         const modalidadMinusculas = modalidad.toLocaleLowerCase();
//         if(selectdValue === ''|| selectdValue === modalidadMinusculas){
//             job.style.display = 'flex'
//         }
//         else{
//             job.style.display = 'none'
//         }
//     })
// })