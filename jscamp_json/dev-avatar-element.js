class DevsJobsAvatar

extends HTMLElement {
    constructor(){
        super()//llamar al constructor de elemento
        this.attachShadow({mode: 'open'})//modo abierto para que se pueda modificar desde afuera
        this.render()   
    }

    createUrl(service, user){
        return `https://unavatar.io/${service}/${user}`
    }
    render(){
        const service = this.getAttribute('service') ?? 'github'//getAttribute envia el atributo que configuramos en service y valida si existe si no exite toma github por defecto
        const user = this.getAttribute('user') ?? 'manuelmendieta21'
        const size = this.getAttribute('size') ?? '32'
        
        const url = this.createUrl(service, user)
       
        this.shadowRoot.innerHTML=`
        <style>
        .avatar{
            height: ${size}px;
            width: ${size}px;
            border-radius: 50%;
            }
        .avatar img{
            height: 100%;
            width: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        </style>
        <div class="avatar">
             <img src="${url}" />
        </div>
        `
    }
    
}
customElements.define('devs-jobs-avatar', DevsJobsAvatar);