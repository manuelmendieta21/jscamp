
const jobsListingSection = document.querySelector('.jobs-listings')
//console.log("querySelector desde padre jobs-listings")
//console.log(jobsListingSection)
jobsListingSection.addEventListener('click', function(event) {
    const element = event.target //Obtiene el evento del target.
    //console.log(element)
  if (element.classList.contains('button-apply-job')) {
    //element devuelve el padre con su contenido.
    //classList accede a la clase del elemento
    //contains devuelve true o false si existe la clase con el Valor a comparar.
    element.textContent = '¡Aplicado!'
    //clase envia el contenido con textContent
    element.classList.add('is-applied')
    //
    element.disabled = true
  }
  else{
    
  }
})

const filterLocation = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.jobs-listings-card')
const searchEmpleos = document.querySelector('#empleos-search-input')

filterLocation.addEventListener('change',function(){
    const selectdValue = filterLocation.value
    if(selectdValue){
        mensaje.textContent = `Filtro seleccionado: ${selectdValue}`
    }
    else{
        mensaje.textContent = `No hay filtro seleccionado`
    }
    // const variablesAlmacenadas=jobs.length
    // console.log(variablesAlmacenadas)
    // jobs.forEach(function(job){

    //   // console.log(job)
    // })
     jobs.forEach(job =>{
        const modalidad = job.getAttribute('data-modalidad')
        //Ajustar el value para que se compare con location de la pagina
        const modalidadMinusculas = modalidad.toLocaleLowerCase();


        //data-modalidad seria como el valor a comparar con el value del filter-location y se compara
        //console.log(modalidad)
        if(selectdValue === ''|| selectdValue === modalidadMinusculas){
            job.style.display = 'flex'
        }
        else{
            job.style.display = 'none'
        }
    })
})

// !NOTA
//Revisar el Codigo y Obtimizar con las Classes en css 

//la mejor forma recomendada estilando con las clases de css is-hidden,
// jobs.forEach(job =>{
//     const modalidad = job.getAttribute('data-modalidad')
//     const isHidden = selectdValue === ''|| selectdValue === modalidadMinusculas
//     job.classList.toggle('is-hidden', !isHidden)
//     //job.classlist.toogle('is-hidden, isHidden === false)
// })


// filterLocation.addEventListener('change',function(){
//     const location = filterLocation.value
//     console.log(location)
// })


searchEmpleos.addEventListener('input', function(){
    const search = searchEmpleos.value
    console.log(search)
})
// searchEmpleos.addEventListener('blur',function(){
//     console.log("blur")
//     console.log("Cuando se pierde el foco del contenido")
// })

fetch("./data.json") /*fech es asincrono */
.then(response => response.json())
.then(data => {
    console.log(data)
})


// const searchEmpleosImput = document.querySelector('#empleos-search-form')
// searchEmpleosImput.addEventListener('submit',function(event){
//     //usamos para que no envie la url por defecto al detectar el submit
//     event.preventDefault()
//     console.log('envento activado')
// })

//eventos para el teclado y teclas especiales
// document.addEventListener('keydown', function(event){
//     console.log("Evento teclado",event.key)
//     const teclado = (event.key)
//     console.log(teclado)
//     console.log("shift", event.shiftKey)
//     console.log("ctrl", event.ctrlKey)
//     console.log("alt", event.altKey)
// })

// - Comentarios con otros eventos interesantes

// otras formas de añadir eventos click a elementos
// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

// ejemplos de eventos
// const searchInput = document.querySelector('#empleos-search-input')

// searchInput.addEventListener('input', function() {
//   console.log(searchInput.value)
// })

// searchInput.addEventListener('blur', function() {
//   console.log('Se dispara cuando el campo pierde el foco')
// })

// const searchForm = document.querySelector('#empleos-search-form')

// searchForm.addEventListener('submit', function(event) {
//   event.preventDefault()
//   // ... todo lo que yo te diga aqui
//   console.log('submit')
// })
