document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#nTareas').innerHTML = caja.childElementCount

const formulario = document.querySelector('#formulario')

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const newForm = new FormData(formulario)
    validar(newForm)
  })

  document.body.addEventListener('click', (eve) => {

    const caja = document.querySelector('#caja')
    let identificador = eve.target.parentElement.id

    for(b of caja.children){
      if(b.id == identificador){
        b.remove()
      }
    }

    document.querySelector('#nTareas').innerHTML = caja.childElementCount

  })

})

const validar = f => {
  if(f.get('name_tarea') == '' || f.get('des_tarea') == '' || f.get('resp_tarea') == ''){
    alert('Hay campos sin llenar')
    return false
  }else if(!isNaN(f.get('name_tarea')) || !isNaN(f.get('des_tarea')) || !isNaN(f.get('resp_tarea'))){
    alert('Campos del formulario no pueden ser numericos')
    return false
  }else if(f.get('prioridad') == 'Prioridad de la tarea'){
    alert('Debe selecccionar una prioridad')
    return false
  }else{
    agregar(f)
  }
}

const agregar = form => {
  const caja = document.querySelector('#caja')
  const nTareas = document.querySelector('#nTareas')
  let ID = Math.floor(Math.random()*3000)+'_'+Date.now()

  caja.innerHTML += `<div class="tarjetTask" id=${ID}>
    <h1>${form.get('name_tarea')}</h1>
    <h2>Descripcion:</h2>
    <p>${form.get('des_tarea')}</p>
    <h2>Responsable:</h2>
    <p>${form.get('resp_tarea')}</p>
    <h2>Prioridad:</h2>
    <p>${form.get('prioridad')}</p>
    <button name="delete" class="btn btn-danger mt-2">Eliminar</button>
  </div>`

  nTareas.innerHTML = caja.childElementCount
  document.querySelector('#formulario').reset()
}
