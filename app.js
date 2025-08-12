async function cargarApps() {
  const res = await fetch('apps.json');
  const apps = await res.json();
  const contenedor = document.getElementById('apps-container');

  apps.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('app-card');

    card.innerHTML = `
      <img src="${app.imagen}" alt="${app.nombre}">
      <h3>${app.nombre}</h3>
      <a href="${app.link}" target="_blank">Descargar</a>
    `;

    contenedor.appendChild(card);
  });
}

cargarApps();
