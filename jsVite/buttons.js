//Logica del boton al aplicar
export const jobsListingSection = document.querySelector('.jobs-listings')
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