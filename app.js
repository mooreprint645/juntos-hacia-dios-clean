const menuButton = document.querySelector('#menuToggle');
const navMenu = document.querySelector('#navMenu');
const themeButton = document.querySelector('#themeToggle');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => navMenu.classList.toggle('open'));
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeButton.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
  });
}

const songs = [
  ['Canciones con acordes', 'Biblioteca musical'],
  ['Cantos para celebraciones', 'Recursos para comunidad'],
  ['Nuevos cantos', 'Contenido reciente']
];

const artists = ['Artistas y ministerios', 'Música católica', 'Música cristiana'];
const categories = ['Alabanza', 'Adoración', 'Entrada', 'Comunión', 'Salida'];

const songsGrid = document.querySelector('#songsGrid');
const artistsGrid = document.querySelector('#artistsGrid');
const categoriesGrid = document.querySelector('#categoriesGrid');

if (songsGrid) {
  songsGrid.innerHTML = songs.map(item => `<article class="card"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('');
}

if (artistsGrid) {
  artistsGrid.innerHTML = artists.map(name => `<article class="card"><h3>${name}</h3><p>Explorar contenido</p></article>`).join('');
}

if (categoriesGrid) {
  categoriesGrid.innerHTML = categories.map(name => `<span class="chip">${name}</span>`).join('');
}
