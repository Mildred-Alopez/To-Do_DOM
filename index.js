//boton de crear
const btntarea = document.querySelector('#btntarea')

//input donde se escribe la tarea
const creatarea = document.querySelector('#creatarea')

let value = ''

//Evento para capturar el valor del input
creatarea.addEventListener('change', (e) => {
    value = e.target.value
})

let contador = 0

//crea la tarea
const creartareita = () => {

    if (value != '') {
        contador = contador + 1
        const div = `
        <div id="padre-${contador}"class="d-flex justify-content-between">
            <div class="form-check">
                <input id="tarea-${contador}" class="form-check-input me-4 bg-warning" type="checkbox">
                <label class="form-check-label text-white" for="defaultCheck1">
                    <p id="parrafo-${contador}" class="text-break"> ${value} </p>
                </label>
            </div>

            <div>
                 <i class="bi bi-trash text-white trash-icono_cursor fs-4" id="btnDelete-${contador}"></i>
            </div>    
        </div> `

        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)
        const checkboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)
        checkboxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })

        creatarea.value = ''
        value = ''

        const removeCard = document.querySelector(`#padre-${contador}`)
        const Eliminarbtn = document.querySelector(`#btnDelete-${contador}`)
        Eliminarbtn.addEventListener('click', () => {
            removeCard.remove()
        })
    }
}
//Evento que escucha el clic de Crear tarea
btntarea.addEventListener('click', creartareita)
