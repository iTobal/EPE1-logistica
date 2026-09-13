// RutaControl - lógica de las interacciones del prototipo EPE1.
// Cada bloque selecciona elementos del DOM, escucha un evento y actualiza la interfaz.

document.addEventListener('DOMContentLoaded', () => {
  // INTERACCIÓN 01: actualizar el contenido textual mediante click.
  const mensajeOperativo = document.querySelector('#mensajeOperativo');
  const btnActualizarMensaje = document.querySelector('#btnActualizarMensaje');
  btnActualizarMensaje.addEventListener('click', () => {
    const hora = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    mensajeOperativo.textContent = `Turno actualizado a las ${hora}: priorizar despachos pendientes.`;
    btnActualizarMensaje.textContent = 'Mensaje actualizado';
  });

  // INTERACCIÓN 02: cambiar una variable booleana y una clase CSS.
  let rutaDisponible = true;
  const estadoRuta = document.querySelector('#estadoRuta');
  const btnCambiarEstado = document.querySelector('#btnCambiarEstado');
  btnCambiarEstado.addEventListener('click', () => {
    rutaDisponible = !rutaDisponible;
    estadoRuta.classList.toggle('state-active', rutaDisponible);
    estadoRuta.classList.toggle('state-paused', !rutaDisponible);
    estadoRuta.querySelector('span:last-child').textContent = rutaDisponible ? 'Ruta disponible' : 'Ruta pausada';
    btnCambiarEstado.textContent = rutaDisponible ? 'Pausar ruta' : 'Reanudar ruta';
  });

  // INTERACCIÓN 03: conservar el contador en una variable y renderizarlo.
  let paquetes = 24;
  const contadorPaquetes = document.querySelector('#contadorPaquetes');
  const renderizarPaquetes = () => { contadorPaquetes.textContent = paquetes; };
  document.querySelector('#btnSumarPaquete').addEventListener('click', () => { paquetes += 1; renderizarPaquetes(); });
  document.querySelector('#btnRestarPaquete').addEventListener('click', () => { paquetes = Math.max(0, paquetes - 1); renderizarPaquetes(); });

  // INTERACCIÓN 04: mostrar u ocultar un bloque y actualizar aria-expanded.
  const detalleRuta = document.querySelector('#detalleRuta');
  const btnDetalle = document.querySelector('#btnDetalle');
  btnDetalle.addEventListener('click', () => {
    const debeMostrar = detalleRuta.hidden;
    detalleRuta.hidden = !debeMostrar;
    btnDetalle.setAttribute('aria-expanded', String(debeMostrar));
    btnDetalle.textContent = debeMostrar ? 'Ocultar detalle' : 'Mostrar detalle';
  });

  // INTERACCIÓN 05: reflejar el valor del input en tiempo real y limpiarlo.
  const notaOperador = document.querySelector('#notaOperador');
  const vistaNota = document.querySelector('#vistaNota');
  notaOperador.addEventListener('input', () => { vistaNota.textContent = notaOperador.value.trim() || 'Tu nota aparecerá aquí.'; });
  document.querySelector('#btnLimpiarNota').addEventListener('click', () => { notaOperador.value = ''; vistaNota.textContent = 'Tu nota aparecerá aquí.'; notaOperador.focus(); });

  // INTERACCIÓN 06: convertir valores a número y calcular el resultado.
  const resultadoCalculo = document.querySelector('#resultadoCalculo');
  const calcularEntregas = () => {
    const asignadas = Number(document.querySelector('#zonaSelect').value);
    const tasa = Number(document.querySelector('#tasaExito').value);
    const exitosas = Math.round(asignadas * (Math.min(100, Math.max(0, tasa)) / 100));
    resultadoCalculo.textContent = `Resultado: ${exitosas} entregas exitosas`;
  };
  document.querySelector('#btnCalcular').addEventListener('click', calcularEntregas);

  // INTERACCIÓN 07: actualizar texto y ancho de barra desde un input range.
  const rangoProgreso = document.querySelector('#rangoProgreso');
  const progresoTexto = document.querySelector('#progresoTexto');
  const barraProgreso = document.querySelector('#barraProgreso');
  rangoProgreso.addEventListener('input', () => { progresoTexto.textContent = `${rangoProgreso.value}%`; barraProgreso.style.width = `${rangoProgreso.value}%`; });

  // INTERACCIÓN 08: crear nodos li dinámicamente y eliminarlos con delegación de eventos.
  const nuevaTarea = document.querySelector('#nuevaTarea');
  const listaTareas = document.querySelector('#listaTareas');
  document.querySelector('#btnAgregarTarea').addEventListener('click', () => {
    const texto = nuevaTarea.value.trim();
    if (!texto) { nuevaTarea.focus(); return; }
    const item = document.createElement('li');
    item.innerHTML = `<span>${texto.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</span><button type="button" class="delete-task">Eliminar</button>`;
    listaTareas.appendChild(item);
    nuevaTarea.value = '';
  });
  listaTareas.addEventListener('click', (evento) => { if (evento.target.matches('.delete-task')) evento.target.closest('li').remove(); });

  // INTERACCIÓN 09: filtrar los elementos visibles usando data-search.
  const filtroDespachos = document.querySelector('#filtroDespachos');
  const sinResultados = document.querySelector('#sinResultados');
  filtroDespachos.addEventListener('input', () => {
    const termino = filtroDespachos.value.toLowerCase().trim();
    let visibles = 0;
    document.querySelectorAll('.shipment').forEach((despacho) => { const coincide = despacho.dataset.search.includes(termino); despacho.hidden = !coincide; if (coincide) visibles += 1; });
    sinResultados.hidden = visibles !== 0;
  });

  // INTERACCIÓN 10: detener el envío, validar y mostrar respuesta en la página.
  const formIncidencia = document.querySelector('#formIncidencia');
  const mensajeFormulario = document.querySelector('#mensajeFormulario');
  formIncidencia.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tipo = document.querySelector('#tipoIncidencia').value;
    const detalle = document.querySelector('#detalleIncidencia').value.trim();
    mensajeFormulario.className = 'form-message';
    if (!tipo || detalle.length < 10) { mensajeFormulario.textContent = 'Completa el tipo y escribe al menos 10 caracteres en el detalle.'; mensajeFormulario.classList.add('form-error'); return; }
    mensajeFormulario.textContent = 'Incidencia validada correctamente. No se envió a un servidor.';
    mensajeFormulario.classList.add('form-success');
    formIncidencia.reset();
  });
});
